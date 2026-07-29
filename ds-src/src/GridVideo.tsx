/**
 * La columna de módulos de `/video-intro-tactical`: el botón de descarga del PDF
 * arriba y los videos debajo, apilados con 28px entre bloques.
 *
 * Una sola columna y no el grid de dos de `<GridAccesos>`: los iframes necesitan
 * ancho de verdad para que el video se vea.
 */
import type { ReactNode } from 'react';

export interface GridVideoProps {
  /** El botón del PDF y los `<ModuloVideo>`. */
  children: ReactNode;
  /** Etiqueta accesible del bloque. */
  etiqueta?: string;
}

/** Columna de módulos del programa premium. */
export function GridVideo({ children, etiqueta }: GridVideoProps) {
  return (
    <nav className="video-grid" aria-label={etiqueta}>
      {children}
    </nav>
  );
}
