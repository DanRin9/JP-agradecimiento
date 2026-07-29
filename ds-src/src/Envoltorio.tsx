/**
 * El envoltorio de las landings de agradecimiento: una columna centrada de 480px.
 *
 * Angosto a propósito. La página se lee de arriba abajo en el celular, justo
 * después de pagar, y una columna más ancha obligaría al ojo a viajar de más entre
 * el titular y los accesos.
 */
import type { ReactNode } from 'react';

export interface EnvoltorioProps {
  /** Contenido de la landing: encabezado, hero, divisor y accesos. */
  children: ReactNode;
}

/** Columna centrada de 480px para las landings. */
export function Envoltorio({ children }: EnvoltorioProps) {
  return <div className="envoltorio">{children}</div>;
}
