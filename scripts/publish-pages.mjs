import { cp, readdir, rm } from 'node:fs/promises';
import { basename, resolve } from 'node:path';

const dist = resolve('dist');
const root = process.cwd();

await rm(resolve(root, '_astro'), { recursive: true, force: true });

for (const entry of await readdir(dist)) {
  await cp(resolve(dist, entry), resolve(root, entry), {
    recursive: true,
    force: true,
    filter: (source) => !basename(source).startsWith('._'),
  });
}
