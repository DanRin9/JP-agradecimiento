/**
 * El aviso que aparece cuando no hay JavaScript. En el sitio va dentro de un
 * `<noscript>`, porque los accesos se pintan desde config.
 *
 * No es un error genérico: da una salida concreta (escribir por WhatsApp desde el
 * sitio) para alguien que acaba de pagar y no puede ver sus links.
 */
import type { ReactNode } from 'react';

export interface AvisoSinJSProps {
  /** Texto del aviso, con la salida alternativa. */
  children: ReactNode;
}

/** Aviso de fallback sin JavaScript. */
export function AvisoSinJS({ children }: AvisoSinJSProps) {
  return <p className="sin-js">{children}</p>;
}
