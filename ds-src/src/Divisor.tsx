/**
 * La línea fina que separa el hero de los accesos. Amarilla en el centro y
 * degradada a transparente hacia los bordes, así no corta la página en dos.
 *
 * Con `brillo`, un destello la recorre una sola vez al cargar. Una sola vez y no
 * en loop: es un acento de entrada, no una animación de fondo.
 */
export interface DivisorProps {
  /** Hace que un destello recorra la línea una vez al cargar la página. */
  brillo?: boolean;
}

/** Separador horizontal del sistema. */
export function Divisor({ brillo = false }: DivisorProps) {
  return <hr className={brillo ? 'divisor divisor--brillo' : 'divisor'} />;
}
