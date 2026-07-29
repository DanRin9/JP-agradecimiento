/**
 * El hero de las landings de agradecimiento (`/basica`, `/premium`): badge de
 * tier, titular en mayúsculas, subtítulo y un párrafo de apoyo.
 *
 * Es mobile-first y va centrado dentro de un `<Envoltorio>` de 480px: el tráfico
 * llega desde el checkout, y el checkout se paga en el celular.
 */
import type { ReactNode } from 'react';
import { Badge } from './Badge';

export interface HeroProps {
  /** Texto del badge de tier, p. ej. "Membresía Premium". Sale como texto plano. */
  badge?: ReactNode;
  /** Titular. Se renderiza en mayúsculas, 800, con tracking negativo. */
  titulo: ReactNode;
  /** Una línea de bienvenida, en el color de texto principal. */
  subtitulo?: ReactNode;
  /**
   * Párrafo de apoyo, en gris. Envolvé en `<strong>` lo que quieras que suba al
   * blanco — es el único resalte que admite este párrafo.
   */
  parrafo?: ReactNode;
}

/** Hero de las landings de agradecimiento. */
export function Hero({ badge, titulo, subtitulo, parrafo }: HeroProps) {
  return (
    <section className="hero">
      {badge ? <Badge plano>{badge}</Badge> : null}
      <h1 className="hero__titulo">{titulo}</h1>
      {subtitulo ? <p className="hero__subtitulo">{subtitulo}</p> : null}
      {parrafo ? <p className="hero__parrafo">{parrafo}</p> : null}
    </section>
  );
}
