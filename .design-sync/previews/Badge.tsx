import { Badge } from '@jptt/tactical-ds';

/** Los tres badges que usa el sitio, en su forma pill. */
export const Contextos = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <Badge>Membresía Premium</Badge>
    <Badge>Programa Premium</Badge>
    <Badge>Estrategia Tactical</Badge>
    <Badge>Acceso a la comunidad</Badge>
  </div>
);

/**
 * Pill vs. plano. El plano es el badge de tier de las landings: al ir arriba de un
 * titular grande, la pill competía con él. Va como máximo uno por página.
 */
export const PillYPlano = () => (
  <div style={{ display: 'grid', gap: 20, justifyItems: 'center' }}>
    <Badge>Membresía Premium</Badge>
    <Badge plano>Membresía Premium</Badge>
  </div>
);
