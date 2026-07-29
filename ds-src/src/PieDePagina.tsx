/**
 * El pie de las landings: los reconocimientos, el isotipo atenuado, la línea de
 * credencial y el meta legal.
 *
 * Es el pie que CIERRA la página, por eso lleva el isotipo y el tagline: después
 * de los accesos, lo último que queda es quién respalda esto.
 */
import { Logo } from './Logo';
import { Reconocimientos } from './Reconocimientos';
import type { Reconocimiento } from './assets';

export interface PieDePaginaProps {
  /** Título de la fila de logos. */
  tituloReconocimientos?: string;
  /** Qué logos mostrar. Por defecto, los cinco oficiales. */
  reconocimientos?: Reconocimiento[];
  /** La credencial, bajo el isotipo. */
  tagline?: string;
  /** Texto del link al sitio. */
  sitio?: string;
  /** URL del sitio. */
  sitioUrl?: string;
  /** Razón social. */
  legal?: string;
}

/** Pie de página de las landings de agradecimiento. */
export function PieDePagina({
  tituloReconocimientos = 'Reconocimientos',
  reconocimientos,
  tagline = 'Juan Pablo Vieira, Mejor trader del país según la BVC',
  sitio = 'ttrading.co',
  sitioUrl = 'https://www.ttrading.co',
  legal = 'Tactical Assets S.A.S.',
}: PieDePaginaProps) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__titulo">{tituloReconocimientos}</p>
        <Reconocimientos items={reconocimientos} />
        <Logo className="footer__logo" variante="isotipo" alto={26} alt="" />
        <p className="footer__tagline">{tagline}</p>
        <p className="footer__meta">
          <a href={sitioUrl} target="_blank" rel="noopener noreferrer">
            {sitio}
          </a>{' '}
          · <span>{legal}</span>
        </p>
      </div>
    </footer>
  );
}
