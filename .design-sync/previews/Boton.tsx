import { Boton, Icono, ListaAccesos, LOGO_EXNESS } from '@jptt/tactical-ds';

/** El CTA principal. Único botón del sistema con glow, y uno solo por página. */
export const CtaPrincipal = () => (
  <ListaAccesos etiqueta="Accesos de tu membresía">
    <Boton
      variante="hotmart"
      icono={<Icono nombre="hotmart" />}
      href="https://hotmart.com/es/club/tactical-investors"
    >
      Ingresa a tu Zona de Miembros
    </Boton>
  </ListaAccesos>
);

/** Los canales de comunidad: WhatsApp relleno y outline, y Telegram. */
export const Canales = () => (
  <ListaAccesos etiqueta="Canales">
    <Boton
      variante="wa-grupo"
      icono={<Icono nombre="whatsapp" />}
      href="https://chat.whatsapp.com/FpLc71qGE9p26d7Wbw1FPy"
    >
      Únete al grupo de WhatsApp de tu membresía
    </Boton>
    <Boton
      variante="wa-soporte"
      icono={<Icono nombre="whatsapp" />}
      href="https://wa.me/573245942816"
    >
      ¿Dudas? Escríbenos: Soporte y Customer Success
    </Boton>
    <Boton
      variante="telegram"
      icono={<Icono nombre="telegram" />}
      href="https://t.me/+kFpsUGJY2y9jZmYx"
    >
      Únete al Canal de Telegram: Señales y Estrategia
    </Boton>
  </ListaAccesos>
);

/** Acciones del sistema y sesión en vivo: los dos outlines azules. */
export const Sistema = () => (
  <ListaAccesos etiqueta="Sistema">
    <Boton variante="sistema" icono={<Icono nombre="calendario" />} flecha={false}>
      Agenda tu sesión de Onboarding
    </Boton>
    <Boton variante="zoom" icono={<Icono nombre="video" />} href="https://us06web.zoom.us/j/83942944549">
      Entra al portafolio en vivo
    </Boton>
  </ListaAccesos>
);

/**
 * Deshabilitado: mientras un dato siga sin resolverse el botón sale bloqueado con
 * su chip, en vez de mandar a alguien que acaba de pagar a un link roto. El de
 * Hotmart se atenúa menos que el resto — sigue siendo el que tiene que ganar la
 * página.
 */
export const Deshabilitado = () => (
  <ListaAccesos etiqueta="Pendientes">
    <Boton
      variante="hotmart"
      icono={<Icono nombre="hotmart" />}
      deshabilitado
      etiquetaPendiente="Próximamente"
    >
      Ingresa a tu Zona de Miembros
    </Boton>
    <Boton
      variante="wa-grupo"
      icono={<Icono nombre="whatsapp" />}
      deshabilitado
      etiquetaPendiente="Próximamente"
    >
      Únete al grupo de WhatsApp de tu membresía
    </Boton>
  </ListaAccesos>
);

/**
 * Formato tarjeta, el de las páginas con grid: más alto, con animación de entrada
 * y luz que sigue al cursor. Exness es el caso raro — el ícono es el wordmark
 * completo, no un glifo cuadrado.
 */
export const Tarjeta = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
    <Boton
      tarjeta
      variante="hotmart"
      icono={<Icono nombre="bitacora" />}
      href="https://bitacora.ttrading.shop"
      orden={0}
    >
      Abre la Bitácora
    </Boton>
    <Boton
      tarjeta
      variante="zoom"
      icono={<Icono nombre="video" />}
      href="https://us06web.zoom.us/j/83942944549"
      orden={1}
    >
      Entra al portafolio en vivo
    </Boton>
    <Boton
      tarjeta
      variante="wa-soporte"
      icono={<Icono nombre="whatsapp" />}
      href="https://whatsapp.com/channel/0029VaNf7Pq23n3Xfc3Rpt3D"
      orden={2}
    >
      Canal de Pre-Mercado
    </Boton>
    <Boton
      tarjeta
      variante="exness"
      icono={<img src={LOGO_EXNESS} alt="Exness" />}
      deshabilitado
      etiquetaPendiente="Próximamente"
      orden={3}
    >
      {''}
    </Boton>
  </div>
);
