import { Logo } from '@jptt/tactical-ds';

/** Las dos formas de la marca: el lockup completo y el isotipo solo. */
export const Variantes = () => (
  <div style={{ display: 'flex', gap: 48, alignItems: 'flex-end' }}>
    <div style={{ display: 'grid', gap: 10, justifyItems: 'center' }}>
      <Logo variante="lockup" alto={64} />
      <span style={{ fontSize: 11, color: 'var(--texto-2)' }}>lockup</span>
    </div>
    <div style={{ display: 'grid', gap: 10, justifyItems: 'center' }}>
      <Logo variante="isotipo" alto={64} />
      <span style={{ fontSize: 11, color: 'var(--texto-2)' }}>isotipo</span>
    </div>
  </div>
);

/**
 * Las tres medidas que usa el sitio. El ancho sale solo del alto: la proporción de
 * la marca no se toca nunca.
 */
export const Escalas = () => (
  <div style={{ display: 'flex', gap: 40, alignItems: 'flex-end' }}>
    {[24, 40, 72].map((alto) => (
      <div key={alto} style={{ display: 'grid', gap: 10, justifyItems: 'center' }}>
        <Logo alto={alto} />
        <span style={{ fontSize: 11, color: 'var(--texto-2)' }}>{alto}px</span>
      </div>
    ))}
  </div>
);
