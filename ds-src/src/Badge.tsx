/**
 * El chip dorado que abre cada página y nombra el contexto: "Membresía Premium",
 * "Programa Premium", "Estrategia Tactical".
 *
 * La forma pill acá sí corresponde — es un chip, no un botón. En el sistema los
 * botones nunca son pill; sólo este badge y los chips lo son.
 */
import type { ReactNode } from 'react';

export interface BadgeProps {
  /** Texto del chip. Se muestra en mayúsculas con tracking amplio. */
  children: ReactNode;
  /**
   * Lo baja a texto plano: sin borde, sin fondo, sin padding. Reservado al badge
   * de tier de las landings, que es dinámico y no debe competir con el titular.
   * Se implementa con `id="badge"`, así que va como máximo uno por página.
   */
  plano?: boolean;
}

/** Chip de contexto. Va arriba del titular, dentro del hero. */
export function Badge({ children, plano = false }: BadgeProps) {
  return (
    <span className="badge" id={plano ? 'badge' : undefined}>
      {children}
    </span>
  );
}
