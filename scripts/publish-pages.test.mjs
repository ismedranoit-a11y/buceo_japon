import { strict as assert } from 'node:assert';
import { mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, test } from 'node:test';

import { MANIFEST, publish } from './publish-pages.mjs';

const scratch = await mkdtemp(join(tmpdir(), 'publish-pages-'));
after(() => rm(scratch, { recursive: true, force: true }));

let counter = 0;

async function write(dir, file, content = 'x') {
  await mkdir(dirname(join(dir, file)), { recursive: true });
  await writeFile(join(dir, file), content);
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function setup({ distFiles, rootFiles = [], manifest }) {
  counter += 1;
  const dist = join(scratch, `case-${counter}`, 'dist');
  const root = join(scratch, `case-${counter}`, 'root');
  for (const file of distFiles) await write(dist, file);
  for (const file of rootFiles) await write(root, file);
  if (manifest) await write(root, MANIFEST, JSON.stringify(manifest));
  return { dist, root };
}

test('copies the build into the root and records it in the manifest', async () => {
  const { dist, root } = await setup({ distFiles: ['index.html', 'tarifas/index.html', '._index.html'] });

  await publish({ dist, root });

  assert.equal(await exists(join(root, 'tarifas/index.html')), true);
  assert.equal(await exists(join(root, '._index.html')), false);
  const manifest = JSON.parse(await readFile(join(root, MANIFEST), 'utf8'));
  assert.deepEqual(manifest, ['index.html', 'tarifas/index.html']);
});

test('removes a published page that no longer exists, and its empty folder', async () => {
  const { dist, root } = await setup({
    distFiles: ['index.html'],
    rootFiles: ['index.html', 'tarifas/index.html'],
    manifest: ['index.html', 'tarifas/index.html'],
  });

  const { removed } = await publish({ dist, root });

  assert.deepEqual(removed, ['tarifas/index.html']);
  assert.equal(await exists(join(root, 'tarifas')), false);
  assert.equal(await exists(join(root, 'index.html')), true);
});

test('never removes images, even when they are no longer in the build', async () => {
  const { dist, root } = await setup({
    distFiles: ['index.html'],
    rootFiles: ['index.html', 'images/nudi.jpg'],
    manifest: ['index.html', 'images/nudi.jpg'],
  });

  const { removed } = await publish({ dist, root });

  assert.deepEqual(removed, []);
  assert.equal(await exists(join(root, 'images/nudi.jpg')), true);
});

test('keeps pages that were never published by this script', async () => {
  const { dist, root } = await setup({
    distFiles: ['index.html'],
    rootFiles: ['index.html', 'google08cd7ae0b6f119fa.html'],
    manifest: ['index.html'],
  });

  const { removed } = await publish({ dist, root });

  assert.deepEqual(removed, []);
  assert.equal(await exists(join(root, 'google08cd7ae0b6f119fa.html')), true);
});

test('removes nothing on the first run, when there is no manifest yet', async () => {
  const { dist, root } = await setup({
    distFiles: ['index.html'],
    rootFiles: ['index.html', 'tarifas/index.html'],
  });

  const { removed } = await publish({ dist, root });

  assert.deepEqual(removed, []);
  assert.equal(await exists(join(root, 'tarifas/index.html')), true);
});

test('keeps a page renamed only by letter case', async () => {
  const { dist, root } = await setup({
    distFiles: ['tarifas/index.html'],
    rootFiles: ['Tarifas/index.html'],
    manifest: ['Tarifas/index.html'],
  });

  const { removed } = await publish({ dist, root });

  assert.deepEqual(removed, []);
  assert.equal(await exists(join(root, 'tarifas/index.html')), true);
});

test('ignores manifest entries that are not file paths', async () => {
  const { dist, root } = await setup({
    distFiles: ['index.html'],
    rootFiles: ['index.html', 'old.html/keep.jpg'],
    manifest: ['index.html', 42, 'old.html'],
  });

  const { removed } = await publish({ dist, root });

  assert.deepEqual(removed, []);
  assert.equal(await exists(join(root, 'old.html/keep.jpg')), true);
});

test('ignores manifest entries that point outside the root', async () => {
  const { dist, root } = await setup({
    distFiles: ['index.html'],
    rootFiles: ['index.html'],
    manifest: ['index.html', '../outside.html'],
  });
  await write(dirname(root), 'outside.html');

  const { removed } = await publish({ dist, root });

  assert.deepEqual(removed, []);
  assert.equal(await exists(join(dirname(root), 'outside.html')), true);
});
