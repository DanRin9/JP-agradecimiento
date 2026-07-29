/* Genera src/assets.ts: los assets de marca como data URIs.
   Van inline y no por ruta porque los diseños que el agente construya con este DS
   no sirven /assets/ desde ningún lado: una ruta absoluta ahí es una imagen rota.
   Todos los archivos juntos pesan ~48 KB, así que el costo es despreciable. */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const sitio = resolve(aqui, '..');

const MIME = { webp: 'image/webp', png: 'image/png' };

function dataURI(rel) {
  const ext = rel.split('.').pop();
  const b64 = readFileSync(resolve(sitio, rel)).toString('base64');
  return `data:${MIME[ext]};base64,${b64}`;
}

// Los `alto` replican config.js: se ajustaron a ojo, no matemáticamente, porque un
// wordmark ancho y un medallón cuadrado no pesan igual a la misma altura.
const RECONOCIMIENTOS = [
  ['assets/rec-bvc.webp', 'Bolsa de Valores de Colombia', 40],
  ['assets/rec-rankia.webp', 'Rankia Awards 2024', 44],
  ['assets/rec-banrep.webp', 'Banco de la República', 44],
  ['assets/rec-bolsa-millonaria.webp', 'Bolsa Millonaria', 38],
  ['assets/rec-exness-team-pro.webp', 'Exness Team Pro', 19],
];

const salida = `/* GENERADO por gen-assets.mjs — no editar a mano. */

/** Lockup oficial de marca (isotipo + nombre tipográfico) en un solo archivo. */
export const LOGO_LOCKUP = '${dataURI('assets/logo-lockup.webp')}';

/** Isotipo solo: las velas japonesas que forman el monograma JP. */
export const LOGO_ISOTIPO = '${dataURI('assets/logo-isotipo.webp')}';

/** Wordmark de Exness (marca de terceros, no de JP Tactical Trading). */
export const LOGO_EXNESS = '${dataURI('assets/exness-logo.png')}';

/** Un reconocimiento del footer: logo de un tercero, su alt y su altura de render. */
export interface Reconocimiento {
  /** Imagen del logo, como data URI. */
  src: string;
  /** Texto alternativo. Nombre de la institución que reconoce. */
  alt: string;
  /** Altura de render en px antes de aplicar --escala-rec. */
  alto: number;
}

/** Los cinco reconocimientos del footer, en el orden oficial. */
export const RECONOCIMIENTOS: Reconocimiento[] = [
${RECONOCIMIENTOS.map(([rel, alt, alto]) => `  { src: '${dataURI(rel)}', alt: ${JSON.stringify(alt)}, alto: ${alto} },`).join('\n')}
];
`;

writeFileSync(resolve(aqui, 'src/assets.ts'), salida);
console.log('assets.ts generado');
