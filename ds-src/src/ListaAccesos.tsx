/**
 * La columna de accesos de las landings: los botones apilados, uno debajo del
 * otro, con 12px entre ellos.
 *
 * Acá los botones van sin `tarjeta`: en una columna de 480px el formato tarjeta
 * ocuparía toda la pantalla y el usuario perdería de vista que hay más de un
 * acceso.
 */
import type { ReactNode } from 'react';

export interface ListaAccesosProps {
  /** Los botones de la landing, en orden de importancia. */
  children: ReactNode;
  /** Etiqueta accesible del bloque de navegación. */
  etiqueta?: string;
}

/** Columna de accesos para las landings. */
export function ListaAccesos({ children, etiqueta }: ListaAccesosProps) {
  return (
    <nav className="botones" aria-label={etiqueta}>
      {children}
    </nav>
  );
}
