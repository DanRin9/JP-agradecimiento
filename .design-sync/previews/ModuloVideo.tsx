import { GridVideo, ModuloVideo } from '@jptt/tactical-ds';

/** Un módulo suelto, con su wrapper 16:9. */
export const Individual = () => (
  <ModuloVideo titulo="Introducción: El Sistema Circulatorio del Mercado" youtubeId="Q64biFwECPY" />
);

/**
 * Dos módulos seguidos. Entre uno y otro el CSS mete solo un acento dorado corto
 * como separador — no hay que agregar nada en el medio.
 */
export const Consecutivos = () => (
  <GridVideo etiqueta="Módulos del programa">
    <ModuloVideo
      titulo="Introducción: El Sistema Circulatorio del Mercado"
      youtubeId="Q64biFwECPY"
      orden={1}
    />
    <ModuloVideo titulo="Macroeconomía del Trading" youtubeId="2xFYgbf_vmc" orden={2} />
  </GridVideo>
);

/** El programa completo: los cuatro módulos de "De Cero a Tactical Investor". */
export const ProgramaCompleto = () => (
  <GridVideo etiqueta="Módulos del programa">
    <ModuloVideo
      titulo="Introducción: El Sistema Circulatorio del Mercado"
      youtubeId="Q64biFwECPY"
      orden={1}
    />
    <ModuloVideo titulo="Macroeconomía del Trading" youtubeId="2xFYgbf_vmc" orden={2} />
    <ModuloVideo
      titulo="Psicología de los Ciclos y Supervivencia"
      youtubeId="XpYsRLAGMBU"
      orden={3}
    />
    <ModuloVideo
      titulo="Introducción a los Mercados Financieros"
      youtubeId="ASjhS7tM6a4"
      orden={4}
    />
  </GridVideo>
);
