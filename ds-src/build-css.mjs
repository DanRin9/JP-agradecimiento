/* Concatena el CSS REAL del sitio en dist/tactical.css.
   No reescribe nada: styles.css y links.css se copian tal cual y en el mismo orden
   en que los cargan las páginas (links.css depende de los tokens de styles.css).
   Las @font-face NO van acá: el converter las trae por cfg.extraFonts y las
   engancha desde el styles.css raíz del bundle. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const sitio = resolve(aqui, '..');

const partes = ['styles.css', 'links.css'].map((f) => {
  const css = readFileSync(resolve(sitio, f), 'utf8');
  return `/* ===== ${f} ===== */\n${css}`;
});

mkdirSync(resolve(aqui, 'dist'), { recursive: true });
writeFileSync(resolve(aqui, 'dist/tactical.css'), partes.join('\n\n'));
console.log('tactical.css:', partes.join('\n\n').length, 'bytes');
