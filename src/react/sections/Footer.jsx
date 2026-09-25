import { Divider, Link, Text } from "@paloma/core-ui";
import {
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  XIcon,
  YouTubeIcon,
} from "@paloma/icons";

// Maps the Discourse icon names authored in theme settings onto Paloma glyphs.
const SOCIAL_ICONS = {
  "fab-facebook": FacebookIcon,
  "fab-instagram": InstagramIcon,
  "fab-twitch": TwitchIcon,
  "fab-x-twitter": XIcon,
  "fab-youtube": YouTubeIcon,
};

export default function Footer({
  columns = [],
  social = [],
  localeLabel = "",
  localeHref = null,
  copyright = "",
  socialLabel = "",
}) {
  return (
    <footer className="ea-footer">
      <div className="ea-footer__inner">
        <div className="ea-footer__top">
          {columns.map((column) => (
            <nav
              className="ea-footer__column"
              aria-label={column.title}
              key={column.title}
            >
              <Text as="h2" className="ea-footer__column-title">
                {column.title}
              </Text>
              <ul className="ea-footer__links">
                {column.links.map((link) => (
                  <li key={`${link.url}-${link.text}`}>
                    <Link className="ea-footer__link" href={link.url}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {localeLabel ? (
            <div className="ea-footer__locale">
              {localeHref ? (
                <Link className="ea-footer__locale-button" href={localeHref}>
                  {localeLabel}
                </Link>
              ) : (
                <span className="ea-footer__locale-button">{localeLabel}</span>
              )}
            </div>
          ) : null}
        </div>

        <Divider orientation="horizontal" emphasis="subtle" />

        <div className="ea-footer__bottom">
          {social.length ? (
            <ul className="ea-footer__social" aria-label={socialLabel}>
              {social.map((item) => {
                const Glyph = SOCIAL_ICONS[item.icon];
                return (
                  <li key={item.url}>
                    <Link
                      className="ea-footer__social-link"
                      href={item.url}
                      aria-label={item.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {Glyph ? <Glyph /> : item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}

          {copyright ? (
            <Text as="p" className="ea-footer__copyright">
              {copyright}
            </Text>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
