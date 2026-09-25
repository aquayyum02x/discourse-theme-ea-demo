import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";
import DiscourseURL from "discourse/lib/url";
import { i18n } from "discourse-i18n";
import EaReactIsland from "./ea-react-island";

const QUICK_LINKS = [
  { key: "home", href: "/" },
  { key: "latest", href: "/latest" },
  { key: "bookmarks", href: "/my/activity/bookmarks" },
  { key: "profile", href: "/my/summary" },
  { key: "messages", href: "/my/messages" },
];

export default class EaSideNav extends Component {
  @service router;
  @service site;

  get games() {
    const categories = this.site.categories || [];

    return (settings.side_nav_games || []).map((config) => {
      const id = Array.isArray(config.category)
        ? config.category[0]
        : config.category;

      return {
        title: config.title,
        image: config.image || null,
        href:
          config.link ||
          categories.find((category) => category.id === id)?.url ||
          "/categories",
      };
    });
  }

  get islandProps() {
    return {
      activePath: this.router.currentURL?.split("?")[0] || "",
      quickLinks: QUICK_LINKS.map((link) => ({
        ...link,
        label: i18n(themePrefix(`side_nav.${link.key}`)),
      })),
      games: this.games,
      headings: {
        quickLinks: i18n(themePrefix("side_nav.quick_links")),
        games: i18n(themePrefix("side_nav.games")),
      },
      onNavigate: this.onNavigate,
    };
  }

  @action
  onNavigate(href) {
    DiscourseURL.routeTo(href);
  }

  <template>
    <EaReactIsland @section="side-nav" @props={{this.islandProps}} />
  </template>
}
