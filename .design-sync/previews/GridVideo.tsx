import { Boton, GridVideo, Icono, ModuloVideo } from '@jptt/tactical-ds';

/**
 * La columna del programa premium: el botón del PDF arriba y los videos debajo.
 * Una sola columna y no el grid de dos — los iframes necesitan ancho de verdad.
 */
export const ProgramaPremium = () => (
  <GridVideo etiqueta="Módulos del programa">
    <Boton
      tarjeta
      variante="hotmart"
      className="video-pdf"
      icono={<Icono nombre="documento" />}
      href="/assets/de-cero-a-tactical-introduccion-2026.pdf"
      descargar
      orden={0}
    >
      Descarga la introducción del programa
    </Boton>
    <ModuloVideo
      titulo="Introducción: El Sistema Circulatorio del Mercado"
      youtubeId="Q64biFwECPY"
      orden={1}
    />
    <ModuloVideo titulo="Macroeconomía del Trading" youtubeId="2xFYgbf_vmc" orden={2} />
  </GridVideo>
);

/** Sólo videos, sin el botón de descarga. */
export const SoloVideos = () => (
  <GridVideo etiqueta="Módulos del programa">
    <ModuloVideo
      titulo="Psicología de los Ciclos y Supervivencia"
      youtubeId="XpYsRLAGMBU"
      orden={0}
    />
    <ModuloVideo titulo="Introducción a los Mercados Financieros" youtubeId="ASjhS7tM6a4" orden={1} />
  </GridVideo>
);
