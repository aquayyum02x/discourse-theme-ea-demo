import { apiInitializer } from "discourse/lib/api";
import { i18n } from "discourse-i18n";

const QUICK_LINKS = [
  { name: "ea-home", key: "home", href: "/", icon: "house" },
  { name: "ea-latest", key: "latest", href: "/latest", icon: "clock-rotate-left" },
  { name: "ea-bookmarks", key: "bookmarks", href: "/my/activity/bookmarks", icon: "bookmark" },
  { name: "ea-profile", key: "profile", href: "/my/summary", icon: "user" },
  { name: "ea-messages", key: "messages", href: "/my/messages", icon: "comments" },
];

export default apiInitializer((api) => {
  if (!settings.side_nav_enabled) {
    return;
  }

  const root = document.documentElement;
  root.classList.toggle("ea-side-nav-rail", !!settings.side_nav_icon_rail);
  root.classList.toggle(
    "ea-side-nav-hide-default",
    !!settings.side_nav_hide_default_sections
  );

  api.addSidebarSection(
    (BaseCustomSidebarSection, BaseCustomSidebarSectionLink) => {
      class QuickLink extends BaseCustomSidebarSectionLink {
        constructor(config) {
          super();
          this.config = config;
        }

        get name() {
          return this.config.name;
        }

        get href() {
          return this.config.href;
        }

        // Also used as the tooltip and accessible name when labels are hidden in rail mode.
        get title() {
          return i18n(themePrefix(`side_nav.${this.config.key}`));
        }

        get text() {
          return this.title;
        }

        get prefixType() {
          return "icon";
        }

        get prefixValue() {
          return this.config.icon;
        }
      }

      return class extends BaseCustomSidebarSection {
        get name() {
          return "ea-quick-links";
        }

        get text() {
          return i18n(themePrefix("side_nav.quick_links"));
        }

        get links() {
          return QUICK_LINKS.map((config) => new QuickLink(config));
        }

        get displaySection() {
          return true;
        }

        get collapsedByDefault() {
          return false;
        }
      };
    }
  );

  api.addSidebarSection(
    (BaseCustomSidebarSection, BaseCustomSidebarSectionLink) => {
      class GameLink extends BaseCustomSidebarSectionLink {
        constructor(config, index, categories) {
          super();
          this.config = config;
          this.index = index;
          this.categories = categories;
        }

        get name() {
          return `ea-game-${this.index}`;
        }

        get href() {
          if (this.config.link) {
            return this.config.link;
          }

          const id = Array.isArray(this.config.category)
            ? this.config.category[0]
            : this.config.category;

          return this.categories.find((c) => c.id === id)?.url || "/categories";
        }

        get title() {
          return this.config.title;
        }

        get text() {
          return this.config.title;
        }

        get prefixType() {
          return this.config.image ? "image" : "icon";
        }

        get prefixValue() {
          return this.config.image || "gamepad";
        }
      }

      return class extends BaseCustomSidebarSection {
        get name() {
          return "ea-games";
        }

        get text() {
          return i18n(themePrefix("side_nav.games"));
        }

        get links() {
          const categories = api.container.lookup("service:site").categories || [];

          return (settings.side_nav_games || []).map(
            (config, index) => new GameLink(config, index, categories)
          );
        }

        get displaySection() {
          return (settings.side_nav_games || []).length > 0;
        }

        get collapsedByDefault() {
          return false;
        }
      };
    }
  );
});
