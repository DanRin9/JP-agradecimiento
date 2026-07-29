/**
 * La nota gris bajo los accesos. Corta, centrada, con los links en amarillo.
 *
 * Existe porque mucha gente llega a estas páginas por link directo sin pasar por
 * el selector: la nota repite ahí lo que el selector ya había explicado.
 */
import type { ReactNode } from 'react';

export interface NotaProps {
  /** Texto de la nota. Los `<a>` de adentro salen en amarillo. */
  children: ReactNode;
}

/** Nota aclaratoria bajo los accesos. */
export function Nota({ children }: NotaProps) {
  return <p className="links-nota">{children}</p>;
}
