import Component from "@glimmer/component";
import { service } from "@ember/service";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";

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

      grouped.get(column).push(link);
    }

    return [...grouped.entries()].map(([title, links]) => ({ title, links }));
  }

  get socialLinks() {
    return settings.footer_social || [];
  }

  get localeLabel() {
    return settings.footer_locale_label;
  }

  <template>
    {{#if settings.footer_enabled}}
      <footer class="ea-footer">
        <div class="ea-footer__inner">
          <div class="ea-footer__top">
            {{#each this.columns as |column|}}
              <nav class="ea-footer__column" aria-label={{column.title}}>
                <h2 class="ea-footer__column-title">{{column.title}}</h2>
                <ul class="ea-footer__links">
                  {{#each column.links as |link|}}
                    <li>
                      <a class="ea-footer__link" href={{link.url}}>
                        {{link.text}}
                      </a>
                    </li>
                  {{/each}}
                </ul>
              </nav>
            {{/each}}

            {{#if this.localeLabel}}
              <div class="ea-footer__locale">
                {{#if this.currentUser}}
                  <a
                    class="ea-footer__locale-button"
                    href="/my/preferences/interface"
                  >
                    {{this.localeLabel}}
                  </a>
                {{else}}
                  <span class="ea-footer__locale-button">
                    {{this.localeLabel}}
                  </span>
                {{/if}}
              </div>
            {{/if}}
          </div>

          <div class="ea-footer__bottom">
            {{#if this.socialLinks.length}}
              <ul
                class="ea-footer__social"
                aria-label={{i18n (themePrefix "footer.social")}}
              >
                {{#each this.socialLinks as |social|}}
                  <li>
                    <a
                      class="ea-footer__social-link"
                      href={{social.url}}
                      aria-label={{social.label}}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {{icon social.icon}}
                    </a>
                  </li>
                {{/each}}
              </ul>
            {{/if}}

            {{#if settings.footer_copyright}}
              <p class="ea-footer__copyright">{{settings.footer_copyright}}</p>
            {{/if}}
          </div>
        </div>
      </footer>
    {{/if}}
  </template>
}
