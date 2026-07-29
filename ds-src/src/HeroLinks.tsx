/**
 * El hero de las páginas de links (`/links-comunidad`, `/estrategia-tactical`,
 * `/video-intro-tactical`): badge, titular grande con un resalte dorado y
 * subtítulo.
 *
 * A diferencia del `<Hero>` de las landings, éste es desktop-first: el tráfico no
 * viene del checkout en el celular, viene de un link compartido que se abre en
 * pantalla. Entra escalonado — badge, titular, subtítulo — y el titular se limita
 * a 24ch para que caiga en dos o tres líneas en vez de estirarse a cinco.
 */
import type { ReactNode } from 'react';
import { Badge } from './Badge';

export interface HeroLinksProps {
  /** Texto del badge de contexto, p. ej. "Estrategia Tactical". */
  badge?: ReactNode;
  /**
   * Titular. Meté un `<Destacado>` adentro para dorar las palabras clave —
   * una sola vez por titular.
   */
  titulo: ReactNode;
  /** Subtítulo en gris, bajo el titular. */
  subtitulo?: ReactNode;
}

/** Hero de las páginas de links. */
export function HeroLinks({ badge, titulo, subtitulo }: HeroLinksProps) {
  return (
    <section className="links-hero">
      {badge ? <Badge>{badge}</Badge> : null}
      <h1 className="links-titulo">{titulo}</h1>
      {subtitulo ? <p className="links-subtitulo">{subtitulo}</p> : null}
    </section>
  );
}
