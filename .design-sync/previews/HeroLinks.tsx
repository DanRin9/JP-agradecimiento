import { Destacado, HeroLinks } from '@jptt/tactical-ds';

/** El de `/estrategia-tactical`: el titular es el protagonista de la página. */
export const Estrategia = () => (
  <HeroLinks
    badge="Estrategia Tactical"
    titulo={
      <>
        Así opera el <Destacado partible>mejor trader de Colombia</Destacado> según la BVC
      </>
    }
    subtitulo="La Estrategia Tactical en vivo: el portafolio y la bitácora, movimiento a movimiento."
  />
);

/**
 * El del selector de tier. El resalte son dos palabras, así que no se parte entre
 * líneas: "MÁS EXCLUSIVA" cortado a la mitad se lee como un error de maquetación.
 */
export const Selector = () => (
  <HeroLinks
    badge="Acceso a la comunidad"
    titulo={
      <>
        ¿Cuál es tu <Destacado>tier</Destacado>?
      </>
    }
    subtitulo="Cada membresía tiene sus propios grupos y el ingreso lo aprueba un administrador: nos reservamos el derecho de admisión."
  />
);

/** El del programa premium: titular corto, sin badge de contexto de comunidad. */
export const ProgramaPremium = () => (
  <HeroLinks
    badge="Programa Premium"
    titulo={
      <>
        De Cero a <Destacado>Tactical Investor</Destacado>
      </>
    }
    subtitulo="Los métodos de Juan Pablo Vieira, paso a paso."
  />
);

/** Sin badge: el titular arranca la página solo. */
export const SinBadge = () => (
  <HeroLinks
    titulo={
      <>
        La comunidad de trading <Destacado partible>más exclusiva de Colombia</Destacado>
      </>
    }
    subtitulo="Señales, estrategia y acompañamiento, todos los días de mercado."
  />
);
