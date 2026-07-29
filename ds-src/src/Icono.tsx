/**
 * Los siete íconos del sistema, SVG inline. Cuatro íconos no justifican una
 * librería, así que viajan con el bundle y no como dependencia.
 *
 * El `fill="currentColor"` va en el `<svg>`, no en cada `<path>`: cualquier regla
 * CSS del sistema que fije un fill (por ejemplo `.btn--telegram` lo clava en
 * #05283A) le gana al atributo de presentación, así que dentro de un botón el
 * ícono se ve exactamente igual que en el sitio, y suelto hereda el color del
 * texto en vez de caer a negro.
 */
import type { SVGProps } from 'react';

/** Nombre de cada ícono disponible en el sistema. */
export type NombreIcono =
  | 'whatsapp'
  | 'telegram'
  | 'hotmart'
  | 'calendario'
  | 'video'
  | 'bitacora'
  | 'documento';

export interface IconoProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** Cuál de los siete íconos dibujar. */
  nombre: NombreIcono;
}

const TRAZOS: Record<NombreIcono, JSX.Element> = {
  whatsapp: (
    <>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.25-4.38c0-4.54 3.69-8.23 8.23-8.23a8.23 8.23 0 0 1 .01 16.47Z" />
    </>
  ),
  telegram: (
    <path d="M21.94 4.5 18.6 20.24c-.25 1.11-.91 1.39-1.84.86l-5.09-3.75-2.46 2.36c-.27.27-.5.5-1.02.5l.36-5.17 9.4-8.5c.41-.36-.09-.56-.64-.2L5.7 12.66.7 11.1c-1.09-.34-1.11-1.09.23-1.61L20.53 2.9c.9-.34 1.7.2 1.41 1.6Z" />
  ),
  hotmart: (
    <>
      <path d="M11 3a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5Z" />
      <path d="M15.3 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4L17.58 13H10a1 1 0 1 1 0-2h7.59L15.3 8.7a1 1 0 0 1 0-1.4Z" />
    </>
  ),
  calendario: (
    <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1ZM4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9H4Zm3 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
  ),
  // Cámara de videollamada: sirve para Zoom y seguiría sirviendo si mañana la
  // sesión se muda a otra plataforma.
  video: (
    <>
      <path d="M4 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H4Zm0 2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
      <path d="M22.4 6.55a1 1 0 0 0-1.02.05l-3.5 2.4A1 1 0 0 0 17.5 9.8v4.4a1 1 0 0 0 .38.8l3.5 2.4A1 1 0 0 0 23 16.6V7.4a1 1 0 0 0-.6-.85Zm-1.4 3.16v4.58l-1.5-1.03v-2.52l1.5-1.03Z" />
    </>
  ),
  // Libro abierto: la bitácora de operaciones.
  bitacora: (
    <path d="M12 5.4c-1.6-1.1-3.6-1.7-5.6-1.7-1 0-2 .15-2.94.44A1 1 0 0 0 2.8 5.1v12.3a1 1 0 0 0 1.3.95c.75-.24 1.54-.36 2.3-.36 1.8 0 3.55.6 4.9 1.66a1.1 1.1 0 0 0 1.4 0c1.35-1.06 3.1-1.66 4.9-1.66.76 0 1.55.12 2.3.36a1 1 0 0 0 1.3-.95V5.1a1 1 0 0 0-.66-.96c-.94-.29-1.94-.44-2.94-.44-2 0-4 .6-5.6 1.7Zm-1 12.03c-1.36-.7-2.9-1.08-4.6-1.08-.53 0-1.06.04-1.6.12V5.87c.52-.11 1.06-.17 1.6-.17 1.7 0 3.3.44 4.6 1.24v10.49Zm2 0V6.94c1.3-.8 2.9-1.24 4.6-1.24.54 0 1.08.06 1.6.17v10.6c-.54-.08-1.07-.12-1.6-.12-1.7 0-3.24.38-4.6 1.08Z" />
  ),
  // Hoja con esquina doblada: el PDF de introducción del programa.
  documento: (
    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6Zm0 2h7v5a1 1 0 0 0 1 1h5v11H6V4Zm9 1.41L17.59 8H15V5.41Z" />
  ),
};

/** Un ícono del sistema. Hereda el color del texto salvo que el CSS fije otro. */
export function Icono({ nombre, ...resto }: IconoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...resto}>
      {TRAZOS[nombre]}
    </svg>
  );
}
