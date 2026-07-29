/**
 * El botón del sistema: un `.btn` con ícono a la izquierda, texto que se estira y
 * flecha al final. Es el componente que carga toda la página en las landings y en
 * las páginas de links, así que casi cualquier acceso se arma con éste.
 *
 * Cada variante corresponde a un canal, no a una jerarquía abstracta: el color
 * dice a dónde lleva el botón. Sólo `hotmart` lleva glow, y es a propósito — es el
 * único glow del sistema y está reservado al CTA principal de cada página.
 *
 * Un botón sin `href` (o con `deshabilitado`) sale como `<button disabled>`: un
 * botón que no se puede tocar no debe verse ni comportarse como tocable.
 */
import type { ReactNode, MouseEventHandler } from 'react';

/**
 * Variantes del botón. El nombre es el canal de destino, no un nivel de énfasis.
 *
 * - `neutro` — superficie gris, el `.btn` pelado. Para accesos sin marca propia.
 * - `wa-grupo` — relleno verde vivo. Canal primario de WhatsApp.
 * - `wa-soporte` — outline verde. Canal secundario de WhatsApp.
 * - `hotmart` — degradé dorado con glow. El CTA principal; uno por página.
 * - `telegram` — relleno azul Telegram.
 * - `sistema` — outline azul. Acciones del sistema (agendar, etc.).
 * - `zoom` — outline azul Zoom para la sesión en vivo.
 * - `exness` — como `sistema`, pero el ícono es el wordmark de Exness y no un glifo.
 */
export type VarianteBoton =
  | 'neutro'
  | 'wa-grupo'
  | 'wa-soporte'
  | 'hotmart'
  | 'telegram'
  | 'sistema'
  | 'zoom'
  | 'exness';

export interface BotonProps {
  /** Canal de destino. Determina color, peso y glow. Por defecto `neutro`. */
  variante?: VarianteBoton;
  /** Texto del botón. Va en `.btn__texto` y se queda con el espacio sobrante. */
  children?: ReactNode;
  /** Ícono de la izquierda. Normalmente un `<Icono />`. */
  icono?: ReactNode;
  /** Destino. Sin `href` el botón sale como `<button>` en vez de `<a>`. */
  href?: string;
  /** Handler de click. Fuerza `<button>` aunque haya `href`. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Atenúa el botón y lo bloquea. Para datos que todavía no existen. */
  deshabilitado?: boolean;
  /** Chip a la derecha cuando está deshabilitado, p. ej. "Próximamente". */
  etiquetaPendiente?: string;
  /**
   * Glifo del final. `'↗'` (el de las landings) por defecto en los links externos;
   * pasá `'→'` para navegación interna, o `false` para no mostrar ninguno.
   */
  flecha?: ReactNode | false;
  /**
   * Formato tarjeta: más alto, más aire, animación de entrada y luz que sigue al
   * cursor. Es el que usan las páginas con grid (`/links-comunidad`,
   * `/estrategia-tactical`). En las landings va en `false`.
   */
  tarjeta?: boolean;
  /** Posición en la secuencia de entrada. Escalona la animación (`--orden`). */
  orden?: number;
  /** Clases extra, por si hace falta enganchar algo del layout. */
  className?: string;
  /** Fuerza la descarga en vez de abrir el destino (para PDFs). */
  descargar?: boolean;
}

const CLASE_VARIANTE: Record<VarianteBoton, string> = {
  neutro: '',
  'wa-grupo': 'btn--wa-grupo',
  'wa-soporte': 'btn--wa-soporte',
  hotmart: 'btn--hotmart',
  telegram: 'btn--telegram',
  sistema: 'btn--sistema',
  zoom: 'btn--zoom',
  // Exness hereda el outline azul de `sistema` y sólo cambia el tratamiento del ícono.
  exness: 'btn--sistema btn--exness',
};

/** Un acceso del sistema. Ver `VarianteBoton` para elegir el color. */
export function Boton({
  variante = 'neutro',
  children,
  icono,
  href,
  onClick,
  deshabilitado = false,
  etiquetaPendiente,
  flecha = '↗',
  tarjeta = false,
  orden,
  className,
  descargar = false,
}: BotonProps) {
  const clases = [
    'btn',
    CLASE_VARIANTE[variante],
    tarjeta ? 'btn--links' : '',
    deshabilitado ? 'esta-deshabilitado' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const estilo = orden === undefined ? undefined : ({ '--orden': orden } as React.CSSProperties);

  const interior = (
    <>
      {icono ? <span className="btn__icono">{icono}</span> : null}
      <span className="btn__texto">{children}</span>
      {deshabilitado && etiquetaPendiente ? (
        <span className="btn__proximamente">{etiquetaPendiente}</span>
      ) : null}
      {!deshabilitado && flecha !== false ? (
        <span className="btn__flecha" aria-hidden="true">
          {flecha}
        </span>
      ) : null}
    </>
  );

  if (deshabilitado || onClick || !href) {
    return (
      <button
        type="button"
        className={clases}
        style={estilo}
        disabled={deshabilitado}
        aria-disabled={deshabilitado || undefined}
        onClick={onClick}
      >
        {interior}
      </button>
    );
  }

  return (
    <a
      className={clases}
      style={estilo}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={descargar ? '' : undefined}
    >
      {interior}
    </a>
  );
}
