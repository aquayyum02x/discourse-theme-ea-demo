import { Divider } from "@paloma/core-ui";
import {
  AccountIcon,
  BookmarkIcon,
  ChatIcon,
  ClockIcon,
  GameIcon,
  HomeIcon,
} from "@paloma/icons";

const QUICK_ICONS = {
  home: HomeIcon,
  latest: ClockIcon,
  bookmarks: BookmarkIcon,
  profile: AccountIcon,
  messages: ChatIcon,
};

export default function SideNav({
  quickLinks = [],
  games = [],
  headings = {},
  activePath = "",
  onNavigate,
}) {
  const go = (href) => (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1) {
      return;
    }
    event.preventDefault();
    onNavigate?.(href);
  };

  return (
    <nav className="ea-side-nav" aria-label={headings.quickLinks}>
      {quickLinks.length ? (
        <ul className="ea-side-nav__group">
          {quickLinks.map((link) => {
            const Glyph = QUICK_ICONS[link.key] || HomeIcon;
            const isActive = activePath === link.href;
            return (
              <li key={link.key}>
                <a
                  className={`ea-side-nav__item${isActive ? " is-active" : ""}`}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  aria-current={isActive ? "page" : undefined}
                  onClick={go(link.href)}
                >
                  <Glyph />
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}

      {quickLinks.length && games.length ? (
        <Divider orientation="horizontal" emphasis="subtle" />
      ) : null}

      {games.length ? (
        <ul className="ea-side-nav__group" aria-label={headings.games}>
          {games.map((game) => {
            const isActive = activePath === game.href;
            return (
              <li key={`${game.title}-${game.href}`}>
                <a
                  className={`ea-side-nav__game${isActive ? " is-active" : ""}`}
                  href={game.href}
                  title={game.title}
                  aria-label={game.title}
                  aria-current={isActive ? "page" : undefined}
                  onClick={go(game.href)}
                >
                  {game.image ? (
                    <img className="ea-side-nav__art" src={game.image} alt="" />
                  ) : (
                    <span className="ea-side-nav__art ea-side-nav__art--fallback">
                      <GameIcon />
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </nav>
  );
}
