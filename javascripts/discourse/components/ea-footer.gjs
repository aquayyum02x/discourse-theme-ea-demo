import Component from "@glimmer/component";
import { service } from "@ember/service";
import { i18n } from "discourse-i18n";
import EaReactIsland from "./ea-react-island";

export default class EaFooter extends Component {
  @service currentUser;

  // Links are authored as a flat list and grouped here, so admins only manage one setting.
  get columns() {
    const grouped = new Map();

    for (const link of settings.footer_links || []) {
      const column = link.column || "";

      if (!grouped.has(column)) {
        grouped.set(column, []);
      }

      grouped.get(column).push({ text: link.text, url: link.url });
    }

    return [...grouped.entries()].map(([title, links]) => ({ title, links }));
  }

  get islandProps() {
    return {
      columns: this.columns,
      social: (settings.footer_social || []).map((item) => ({
        url: item.url,
        label: item.label,
        icon: item.icon,
      })),
      localeLabel: settings.footer_locale_label,
      localeHref: this.currentUser ? "/my/preferences/interface" : null,
      copyright: settings.footer_copyright,
      socialLabel: i18n(themePrefix("footer.social")),
    };
  }

  <template>
    {{#if settings.footer_enabled}}
      <EaReactIsland @section="footer" @props={{this.islandProps}} />
    {{/if}}
  </template>
}
