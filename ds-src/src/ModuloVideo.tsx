/**
 * Un módulo del programa "De Cero a Tactical Investor": título y el video
 * embebido en 16:9.
 *
 * El wrapper mantiene la proporción con `padding-top: 56.25%`, así que el iframe
 * no necesita JS ni conocer su alto real. El borde y la sombra van con tinte
 * dorado — no el borde gris del resto del sistema — para que el bloque se sienta
 * parte de un producto premium y no de una lista de accesos.
 *
 * Entre módulos consecutivos aparece un acento dorado corto como separador. Lo
 * pone el CSS solo; no hay que agregar nada entre uno y otro.
 */
import type { CSSProperties } from 'react';

export interface ModuloVideoProps {
  /** Título del módulo. También es el `title` accesible del iframe. */
  titulo: string;
  /** ID del video de YouTube. Los del programa están subidos como "no listados". */
  youtubeId: string;
  /** Posición en la secuencia de entrada. Escalona la animación (`--orden`). */
  orden?: number;
}

/** Un módulo en video del programa premium. */
export function ModuloVideo({ titulo, youtubeId, orden }: ModuloVideoProps) {
  const estilo = orden === undefined ? undefined : ({ '--orden': orden } as CSSProperties);

  return (
    <article className="video-modulo" style={estilo}>
      <h2 className="video-modulo__titulo">{titulo}</h2>
      <div className="video-modulo__embed">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={titulo}
          loading="lazy"
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </article>
  );
}
