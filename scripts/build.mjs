import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
await cp(path.join(root, 'public'), output, { recursive: true });
await cp(path.join(root, 'src'), path.join(output, 'src'), { recursive: true });
let html = await readFile(path.join(root, 'index.html'), 'utf8');
for (const asset of ['src/styles.css', 'src/main.js']) {
  const content = await readFile(path.join(root, asset));
  const version = createHash('sha256').update(content).digest('hex').slice(0, 12);
  html = html.replaceAll(asset, `${asset}?v=${version}`);
}
await writeFile(path.join(output, 'index.html'), html);
console.log('Sitio Quimeico generado en dist/.');
