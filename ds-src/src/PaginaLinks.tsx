/**
 * El armazón de las páginas de links: halo dorado de fondo, envoltorio centrado y
 * el bloque central que se queda con el espacio sobrante (en una pantalla alta el
 * contenido se centra solo; en una baja simplemente respira menos).
 *
 * El halo es el ÚNICO elemento decorativo del sistema. Respira muy lento —9s— para
 * dar profundidad sin volverse un fondo animado.
 *
 * La variante ajusta el ancho y el peso del titular según la página:
 * - `selector` — grid de 880px para las dos tarjetas de tier.
 * - `estrategia` — grid de 880px y titular protagonista (hasta 56px).
 * - `video` — una sola columna de 760px; los iframes necesitan ancho de verdad.
 *   Además sube la intensidad del halo: es un programa premium y la página tiene
 *   que sentirse un escalón arriba de una lista de accesos.
 */
import type { ReactNode } from 'react';

export interface PaginaLinksProps {
  /** Qué página de links es. Ajusta ancho, titular y halo. */
  variante?: 'selector' | 'estrategia' | 'video';
  /** Encabezado con la marca. Normalmente un `<Encabezado>`. */
  encabezado?: ReactNode;
  /** Hero, divisor y accesos. */
  children: ReactNode;
  /** Pie de página. Normalmente un `<PieLinks>`. */
  pie?: ReactNode;
}

/** Armazón de página para `/links-comunidad`, `/estrategia-tactical` y `/video-intro-tactical`. */
export function PaginaLinks({ variante, encabezado, children, pie }: PaginaLinksProps) {
  const clases = ['pagina-links', variante ? `pagina-${variante}` : ''].filter(Boolean).join(' ');

  return (
    <div className={clases}>
      <div className="links-fondo" aria-hidden="true" />
      <div className="links-envoltorio">
        {encabezado ? <header className="links-header">{encabezado}</header> : null}
        <main className="links-main">{children}</main>
        {pie}
      </div>
    </div>
  );
}
