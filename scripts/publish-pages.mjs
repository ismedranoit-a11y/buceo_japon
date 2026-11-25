import { realpathSync } from 'node:fs';
import { cp, lstat, mkdir, readdir, readFile, realpath, rm, rmdir, writeFile } from 'node:fs/promises';
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// List of every file the last publish copied into the root. It is how the
// script knows which pages it published itself, so it never touches anything
// else in the repository (source code, images, verification files...).
export const MANIFEST = 'scripts/published-files.json';

const isMacMetadata = (name) => name.startsWith('._');

async function listFiles(dir) {
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => relative(dir, join(entry.parentPath, entry.name)))
    .filter((file) => !file.split(sep).some(isMacMetadata))
    .map((file) => file.split(sep).join('/'))
    .sort();
}

async function readManifest(path) {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

function isInside(root, path) {
  const rel = relative(root, path);
  return rel !== '' && !rel.startsWith('..') && !isAbsolute(rel);
}

// True only for a regular file (not a folder or symlink) whose real location
// is inside the root.
async function isPublishedFile(realRoot, path) {
  try {
    if (!(await lstat(path)).isFile()) return false;
    return isInside(realRoot, join(await realpath(dirname(path)), basename(path)));
  } catch {
    return false;
  }
}

async function removeEmptyFolders(root, folder) {
  let current = folder;
  while (isInside(root, current)) {
    try {
      await rmdir(current);
    } catch {
      return; // Not empty (or already gone): stop here.
    }
    current = dirname(current);
  }
}

// Copies the build (dist) into the root and removes the pages that a previous
// publish created but the current build no longer has. Only .html files are
// removed: images and other files always stay.
export async function publish({ dist, root }) {
  const manifestPath = join(root, MANIFEST);
  const previous = await readManifest(manifestPath);
  const files = await listFiles(dist);

  await rm(join(root, '_astro'), { recursive: true, force: true });

  for (const entry of await readdir(dist)) {
    await cp(join(dist, entry), join(root, entry), {
      recursive: true,
      force: true,
      filter: (source) => !isMacMetadata(basename(source)),
    });
  }

  // Compared ignoring case: on macOS, renaming "Tarifas" to "tarifas" keeps
  // the same folder, so the old path is the page that was just copied.
  const current = new Set(files.map((file) => file.toLowerCase()));
  const realRoot = await realpath(root);
  const removed = [];

  for (const file of previous ?? []) {
    if (typeof file !== 'string' || !file.endsWith('.html')) continue;
    if (current.has(file.toLowerCase())) continue;
    const path = resolve(root, file);
    if (!isInside(root, path) || !(await isPublishedFile(realRoot, path))) continue;
    await rm(path);
    await removeEmptyFolders(root, dirname(path));
    removed.push(file);
  }

  await mkdir(dirname(manifestPath), { recursive: true });
  await writeFile(manifestPath, `${JSON.stringify(files, null, 2)}\n`);

  return { removed };
}

if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { removed } = await publish({ dist: resolve('dist'), root: process.cwd() });

  if (removed.length > 0) {
    console.log('Removed pages that no longer exist:');
    for (const file of removed) console.log(`  - ${file}`);
    console.log('To send visitors elsewhere, add a redirect in astro.config.mjs (see README).');
  }
}
