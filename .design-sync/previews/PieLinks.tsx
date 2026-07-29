import { PieLinks, RECONOCIMIENTOS } from '@jptt/tactical-ds';

/**
 * El pie de las páginas de links. Más liviano que el de las landings: acá no
 * cierra la página, la apoya — sin isotipo ni tagline.
 */
export const Completo = () => <PieLinks />;

/** Con un subconjunto de reconocimientos. */
export const Subconjunto = () => <PieLinks reconocimientos={RECONOCIMIENTOS.slice(0, 3)} />;
