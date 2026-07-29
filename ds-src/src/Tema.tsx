/**
 * La raíz del sistema. Envolvé TODO lo que construyas con este design system en
 * un `<Tema>`.
 *
 * En el sitio real estas reglas viven en el `body` —fondo negro, texto claro,
 * Raleway, interlineado 1.6—, pero un diseño hecho con este DS no es el `body` de
 * ttrading.co: renderiza dentro de un contenedor ajeno, casi siempre blanco. Sin
 * este wrapper el sistema entero se ve mal, y de una manera traicionera: los
 * botones rellenos (dorado, verde, azul) siguen viéndose bien, mientras que los
 * outline y todo el texto gris se vuelven ilegibles sobre blanco.
 *
 * Reproduce el `body` del sitio tal cual, con los mismos tokens. No agrega ninguna
 * clase que no exista en el CSS del sitio.
 */
import type { CSSProperties, ReactNode } from 'react';

export interface TemaProps {
  /** Todo lo que se construya con el sistema. */
  children: ReactNode;
  /** Aire interior en px. Poné 0 si el hijo ya trae su propio envoltorio. */
  padding?: number;
  /** Alto mínimo en CSS, p. ej. `'100dvh'` para una página completa. */
  altoMinimo?: string;
  /**
   * Congela todo en su estado de reposo: sin animación de entrada, sin brillo que
   * recorre la tarjeta Premium, sin halo respirando.
   *
   * Es la misma regla que el sitio ya aplica bajo `prefers-reduced-motion`. Poné
   * esto en cualquier render estático —una captura, un mockup, una tarjeta de
   * galería—: varias piezas del sistema entran con `animation-fill-mode: backwards`
   * y un delay escalonado, así que en un render instantáneo se ven a medio
   * aparecer o directamente invisibles.
   */
  estatico?: boolean;
  /** Estilos extra del contenedor raíz. */
  style?: CSSProperties;
}

const CSS_ESTATICO = `.jptt-tema-estatico, .jptt-tema-estatico *,
.jptt-tema-estatico *::before, .jptt-tema-estatico *::after {
  animation: none !important;
  transition: none !important;
}`;

/** Raíz del design system: fondo, color de texto y tipografía de la marca. */
export function Tema({ children, padding = 24, altoMinimo, estatico = false, style }: TemaProps) {
  return (
    <div
      className={estatico ? 'jptt-tema-estatico' : undefined}
      style={{
        background: 'var(--negro)',
        color: 'var(--texto)',
        fontFamily: "'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontSize: 16,
        lineHeight: 1.6,
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
        padding,
        minHeight: altoMinimo,
        ...style,
      }}
    >
      {estatico ? <style dangerouslySetInnerHTML={{ __html: CSS_ESTATICO }} /> : null}
      {children}
    </div>
  );
}
