/**
 * La fila de reconocimientos del footer: BVC, Rankia, Banco de la República,
 * Bolsa Millonaria y Exness Team Pro.
 *
 * Van en escala de grises al 55% de opacidad. No es un capricho de estilo:
 * unifica wordmarks blancos y medallones a color sin aplanarlos a blanco puro
 * —eso convertiría los medallones en manchas sólidas— y evita que compitan con
 * el dorado de la marca. Al pasar el cursor suben a 0.9.
 *
 * Cada logo trae su propia altura, ajustada a ojo: un wordmark ancho y un
 * medallón cuadrado no pesan igual a la misma altura.
 */
import { RECONOCIMIENTOS, type Reconocimiento } from './assets';

export interface ReconocimientosProps {
  /** Qué logos mostrar. Por defecto, los cinco oficiales en su orden. */
  items?: Reconocimiento[];
}

/** Fila de logos de reconocimiento. Va dentro del footer. */
export function Reconocimientos({ items = RECONOCIMIENTOS }: ReconocimientosProps) {
  return (
    <div className="reconocimientos">
      {items.map((r) => (
        <img
          key={r.alt}
          src={r.src}
          alt={r.alt}
          loading="lazy"
          decoding="async"
          style={{ ['--alto' as string]: r.alto }}
        />
      ))}
    </div>
  );
}
