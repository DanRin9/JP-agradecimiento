import { Encabezado, Envoltorio } from '@jptt/tactical-ds';

/** El encabezado como aparece en todas las páginas: sólo el lockup, a 40px. */
export const Base = () => (
  <Envoltorio>
    <Encabezado />
  </Envoltorio>
);

/** A otras alturas. El manual fija una reducción mínima; a 40px se está holgado. */
export const Alturas = () => (
  <Envoltorio>
    <Encabezado alto={28} />
    <Encabezado alto={40} />
    <Encabezado alto={56} />
  </Envoltorio>
);
