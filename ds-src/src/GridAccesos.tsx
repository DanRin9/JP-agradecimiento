/**
 * El grid 2×2 de las páginas de links. Usa el ancho de la pantalla en vez de
 * apilar cuatro botones en una columna larga; en mobile colapsa a una sola.
 *
 * Va con `<Boton tarjeta>` o con `<BotonTier>`, no con botones de landing.
 */
import type { ReactNode } from 'react';

export interface GridAccesosProps {
  /** Los accesos. Normalmente dos o cuatro. */
  children: ReactNode;
  /** Etiqueta accesible del bloque de navegación. */
  etiqueta?: string;
}

/** Grid de dos columnas para los accesos de las páginas de links. */
export function GridAccesos({ children, etiqueta }: GridAccesosProps) {
  return (
    <nav className="links-grid" aria-label={etiqueta}>
      {children}
    </nav>
  );
}
