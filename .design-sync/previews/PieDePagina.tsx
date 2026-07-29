import { PieDePagina, RECONOCIMIENTOS } from '@jptt/tactical-ds';

/** El pie completo de las landings, con los cinco reconocimientos oficiales. */
export const Completo = () => <PieDePagina />;

/**
 * Con un subconjunto de reconocimientos: la fila se recentra sola. Útil cuando los
 * cinco logos empujarían el contenido fuera de pantalla en una página corta.
 */
export const ReconocimientosParciales = () => (
  <PieDePagina reconocimientos={RECONOCIMIENTOS.slice(0, 3)} />
);
