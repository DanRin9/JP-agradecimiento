/**
 * El encabezado: sólo el lockup de marca, alineado a la izquierda.
 *
 * No lleva navegación ni nada más. Estas páginas son destinos finales —se llega
 * desde el checkout o desde un link compartido—, así que no hay a dónde navegar y
 * un menú sólo agregaría ruido antes del titular.
 */
import { Logo } from './Logo';

export interface EncabezadoProps {
  /** Alto del lockup en px. 40 en todas las páginas del sitio. */
  alto?: number;
}

/** Encabezado con el lockup de marca. */
export function Encabezado({ alto = 40 }: EncabezadoProps) {
  return (
    <header className="header">
      <Logo className="header__logo" alto={alto} />
    </header>
  );
}
