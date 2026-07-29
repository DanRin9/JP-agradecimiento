/**
 * La parte dorada de un titular. Se usa dentro de `<HeroLinks titulo={…}>`.
 *
 * Una sola por titular: si se doran más palabras el titular pierde jerarquía y se
 * vuelve un cartel. Por defecto no se parte entre líneas, que es lo correcto para
 * un resalte de dos palabras; con `partible` se permite el corte, necesario cuando
 * el resalte es largo y en mobile se saldría de la pantalla.
 */
import type { ReactNode, CSSProperties } from 'react';

export interface DestacadoProps {
  /** Las palabras que van en amarillo. */
  children: ReactNode;
  /** Permite que el resalte se parta entre dos líneas. Para resaltes largos. */
  partible?: boolean;
}

/** Resalte dorado dentro de un titular. */
export function Destacado({ children, partible = false }: DestacadoProps) {
  const estilo: CSSProperties | undefined = partible ? { whiteSpace: 'normal' } : undefined;
  return <em style={estilo}>{children}</em>;
}
