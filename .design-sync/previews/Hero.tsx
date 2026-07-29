import { Envoltorio, Hero } from '@jptt/tactical-ds';

/** El de `/premium`, con el copy real de la landing de agradecimiento. */
export const Premium = () => (
  <Envoltorio>
    <Hero
      badge="Membresía Premium"
      titulo="¡Bienvenido a Tactical Trading!"
      subtitulo="Ahora eres parte de la comunidad de trading más exclusiva de Colombia."
      parrafo={
        <>
          Estás acompañado por el trader reconocido por la{' '}
          <strong>Bolsa de Valores de Colombia</strong>, y desde hoy tienes acceso a todo lo que tu
          membresía incluye.
        </>
      }
    />
  </Envoltorio>
);

/** El de `/basica`: mismo hero, sólo cambia el badge de tier. */
export const Basica = () => (
  <Envoltorio>
    <Hero
      badge="Membresía Básica"
      titulo="¡Bienvenido a Tactical Trading!"
      subtitulo="Ahora eres parte de la comunidad de trading más exclusiva de Colombia."
      parrafo="Desde hoy tienes acceso a todo lo que tu membresía incluye."
    />
  </Envoltorio>
);

/** Sólo titular: lo mínimo que renderiza el componente. */
export const SoloTitulo = () => (
  <Envoltorio>
    <Hero titulo="¡Bienvenido a Tactical Trading!" />
  </Envoltorio>
);
