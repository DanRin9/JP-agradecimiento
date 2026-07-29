import { Boton, Divisor, HeroLinks, Destacado, Icono, ListaAccesos, Tema } from '@jptt/tactical-ds';

/**
 * La raíz del sistema. Todo lo que se construya con este DS va adentro de un
 * `<Tema>`: es lo que trae el fondo negro, el color de texto y la Raleway.
 */
export const Base = () => (
  <Tema padding={28}>
    <HeroLinks
      badge="Estrategia Tactical"
      titulo={
        <>
          Todo va dentro de <Destacado partible>un Tema</Destacado>
        </>
      }
      subtitulo="Fondo, color de texto y tipografía de la marca salen de este wrapper."
    />
    <Divisor brillo />
    <ListaAccesos>
      <Boton variante="hotmart" icono={<Icono nombre="hotmart" />} href="#">
        Ingresa a tu Zona de Miembros
      </Boton>
      <Boton variante="wa-soporte" icono={<Icono nombre="whatsapp" />} href="#">
        ¿Dudas? Escríbenos
      </Boton>
    </ListaAccesos>
  </Tema>
);

/**
 * Por qué hace falta. A la izquierda, el sistema sin `<Tema>`, tal como cae en un
 * contenedor blanco cualquiera: los rellenos sobreviven y el outline y el texto
 * gris se vuelven ilegibles. A la derecha, lo mismo dentro del wrapper.
 */
export const ConYSinTema = () => {
  const contenido = (
    <ListaAccesos>
      <Boton variante="wa-grupo" icono={<Icono nombre="whatsapp" />} href="#">
        Grupo de WhatsApp
      </Boton>
      <Boton variante="wa-soporte" icono={<Icono nombre="whatsapp" />} href="#">
        ¿Dudas? Escríbenos
      </Boton>
    </ListaAccesos>
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <div style={{ background: '#fff', padding: 16, borderRadius: 12 }}>
        <p style={{ margin: '0 0 10px', fontSize: 11, color: '#6b7280' }}>SIN Tema</p>
        {contenido}
      </div>
      <div style={{ borderRadius: 12, overflow: 'hidden' }}>
        <Tema padding={16}>
          <p style={{ margin: '0 0 10px', fontSize: 11, color: 'var(--texto-2)' }}>CON Tema</p>
          {contenido}
        </Tema>
      </div>
    </div>
  );
};
