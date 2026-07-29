/**
 * La tarjeta de tier del selector de `/links-comunidad`: nombre de la membresía,
 * un pie corto y una flecha. Siempre van de a dos, en el mismo grid.
 *
 * `premium` es la única pieza del sistema que combina el degradé dorado, el glow y
 * un brillo que la recorre cada tantos segundos. El ciclo es largo y con pausa a
 * propósito: un shimmer rápido y continuo se vuelve ruido de fondo y es justo el
 * efecto "IA genérica" que la marca evita. `basica` no es el hermano pobre, es el
 * que no grita — outline sobrio sobre superficie.
 */
import type { CSSProperties } from 'react';

export interface BotonTierProps {
  /** Cuál de las dos membresías. Define todo el tratamiento visual. */
  tier: 'basica' | 'premium';
  /** Nombre de la membresía, en grande. */
  nombre: string;
  /** Línea de apoyo bajo el nombre, p. ej. "Ver mis canales". */
  pie?: string;
  /** Destino. Son rutas internas fijas, no links externos. */
  href: string;
  /** Chip de la esquina superior derecha. Sólo lo lleva `premium`. */
  chip?: string;
  /** Posición en la secuencia de entrada. Escalona la animación (`--orden`). */
  orden?: number;
}

/** Una de las dos tarjetas del selector de tier. */
export function BotonTier({ tier, nombre, pie, href, chip, orden }: BotonTierProps) {
  const clases = ['btn', 'btn--links', 'btn--tier', `btn--tier-${tier}`].join(' ');
  const estilo = orden === undefined ? undefined : ({ '--orden': orden } as CSSProperties);

  return (
    <a className={clases} href={href} style={estilo}>
      {chip ? <span className="tier__chip">{chip}</span> : null}
      <span className="btn__texto">
        <span className="tier__nombre">{nombre}</span>
        {pie ? <span className="tier__pie">{pie}</span> : null}
      </span>
      <span className="btn__flecha" aria-hidden="true">
        →
      </span>
    </a>
  );
}
