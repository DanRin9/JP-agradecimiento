import {
  Boton,
  BotonTier,
  Destacado,
  Divisor,
  Encabezado,
  GridAccesos,
  GridVideo,
  HeroLinks,
  Icono,
  ModuloVideo,
  PaginaLinks,
  PieLinks,
} from '@jptt/tactical-ds';

/** `/links-comunidad`: el selector de tier, la página completa. */
export const Selector = () => (
  <PaginaLinks variante="selector" encabezado={<Encabezado />} pie={<PieLinks />}>
    <HeroLinks
      badge="Acceso a la comunidad"
      titulo={
        <>
          ¿Cuál es tu <Destacado>tier</Destacado>?
        </>
      }
      subtitulo="Cada membresía tiene sus propios grupos y el ingreso lo aprueba un administrador: nos reservamos el derecho de admisión."
    />
    <Divisor brillo />
    <GridAccesos etiqueta="Elegí tu membresía">
      <BotonTier
        tier="basica"
        nombre="Membresía Básica"
        pie="Ver mis canales"
        href="/links-comunidad/basica"
        orden={0}
      />
      <BotonTier
        tier="premium"
        nombre="Membresía Premium"
        pie="Ver mis canales"
        chip="Premium"
        href="/links-comunidad/premium"
        orden={1}
      />
    </GridAccesos>
  </PaginaLinks>
);

/** `/estrategia-tactical`: titular protagonista y cuatro accesos en grid. */
export const Estrategia = () => (
  <PaginaLinks variante="estrategia" encabezado={<Encabezado />} pie={<PieLinks />}>
    <HeroLinks
      badge="Estrategia Tactical"
      titulo={
        <>
          Así opera el <Destacado partible>mejor trader de Colombia</Destacado> según la BVC
        </>
      }
      subtitulo="La Estrategia Tactical en vivo: el portafolio y la bitácora, movimiento a movimiento."
    />
    <Divisor brillo />
    <GridAccesos etiqueta="Accesos a la Estrategia Tactical">
      <Boton tarjeta variante="zoom" icono={<Icono nombre="video" />} href="#" orden={0}>
        Entra al portafolio en vivo
      </Boton>
      <Boton
        tarjeta
        variante="hotmart"
        icono={<Icono nombre="bitacora" />}
        href="https://bitacora.ttrading.shop"
        orden={1}
      >
        Abre la Bitácora
      </Boton>
      <Boton tarjeta variante="wa-soporte" icono={<Icono nombre="whatsapp" />} href="#" orden={2}>
        Canal de Pre-Mercado
      </Boton>
      <Boton
        tarjeta
        variante="sistema"
        icono={<Icono nombre="calendario" />}
        deshabilitado
        etiquetaPendiente="Próximamente"
        orden={3}
      >
        Live recurrente
      </Boton>
    </GridAccesos>
  </PaginaLinks>
);

/**
 * `/video-intro-tactical`: una sola columna de 760px y el halo más intenso. Es un
 * programa premium — la página tiene que sentirse un escalón arriba de una lista
 * de accesos.
 */
export const Video = () => (
  <PaginaLinks variante="video" encabezado={<Encabezado />} pie={<PieLinks />}>
    <HeroLinks
      badge="Programa Premium"
      titulo={
        <>
          De Cero a <Destacado>Tactical Investor</Destacado>
        </>
      }
      subtitulo="Los métodos de Juan Pablo Vieira, paso a paso."
    />
    <Divisor brillo />
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
  </PaginaLinks>
);
