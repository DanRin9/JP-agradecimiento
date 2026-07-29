import { Divisor } from '@jptt/tactical-ds';

/**
 * Las dos formas. Se ven idénticas en un render estático: la diferencia de
 * `brillo` es un destello que la recorre una sola vez al cargar, y la galería
 * muestra el estado de reposo.
 */
export const Variantes = () => (
  <div style={{ display: 'grid', gap: 32 }}>
    <div>
      <p style={{ margin: '0 0 8px', fontSize: 12, color: 'var(--texto-2)' }}>Base</p>
      <Divisor />
    </div>
    <div>
      <p style={{ margin: '0 0 8px', fontSize: 12, color: 'var(--texto-2)' }}>Con brillo</p>
      <Divisor brillo />
    </div>
  </div>
);

/** En contexto: separa el hero de los accesos, que es su único uso en el sitio. */
export const EnContexto = () => (
  <div style={{ textAlign: 'center' }}>
    <h1 className="links-titulo" style={{ margin: '0 auto 12px' }}>
      ¿Cuál es tu tier?
    </h1>
    <p className="links-subtitulo" style={{ margin: '0 0 26px' }}>
      Cada membresía tiene sus propios grupos.
    </p>
    <Divisor brillo />
  </div>
);
