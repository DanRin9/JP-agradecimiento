import { Boton, Icono, ListaAccesos } from '@jptt/tactical-ds';

/**
 * La columna completa de `/premium`, en su orden real: el grupo primero, después
 * soporte, la Zona de Miembros —el CTA que tiene que ganar la página—, Telegram y
 * el onboarding.
 */
export const LandingPremium = () => (
  <ListaAccesos etiqueta="Accesos de tu membresía">
    <Boton variante="wa-grupo" icono={<Icono nombre="whatsapp" />} href="#">
      Únete al grupo de WhatsApp de tu membresía
    </Boton>
    <Boton variante="wa-soporte" icono={<Icono nombre="whatsapp" />} href="#">
      ¿Dudas? Escríbenos: Soporte y Customer Success
    </Boton>
    <Boton variante="hotmart" icono={<Icono nombre="hotmart" />} href="#">
      Ingresa a tu Zona de Miembros
    </Boton>
    <Boton variante="telegram" icono={<Icono nombre="telegram" />} href="#">
      Únete al Canal de Telegram: Señales y Estrategia
    </Boton>
    <Boton variante="sistema" icono={<Icono nombre="calendario" />} flecha={false}>
      Agenda tu sesión de Onboarding
    </Boton>
  </ListaAccesos>
);

/** Corta: dos accesos, 12px entre ellos. */
export const Corta = () => (
  <ListaAccesos>
    <Boton variante="hotmart" icono={<Icono nombre="hotmart" />} href="#">
      Ingresa a tu Zona de Miembros
    </Boton>
    <Boton variante="wa-grupo" icono={<Icono nombre="whatsapp" />} href="#">
      Únete al grupo de WhatsApp
    </Boton>
  </ListaAccesos>
);
