import Component from "@glimmer/component";
import { concat } from "@ember/helper";
import { htmlSafe } from "@ember/template";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";

// EA header navigation — the "EA Help" and "Browse by Topic ▾" pills that sit
// between the logo and the search pill in the Figma header (node 1257:102078).
// Rendered into the before-header-panel outlet by api-initializers/ea-header-nav.js.
// Static links only; Discourse's own search, notifications and auth stay live.
export default class EaHeaderNav extends Component {
  get helpUrl() {
    return settings.header_nav_help_url || "https://help.ea.com";
  }

  get helpLabel() {
    return settings.header_nav_help_label?.trim()
      ? htmlSafe(settings.header_nav_help_label)
      : null;
  }

  get browseUrl() {
    return settings.header_nav_browse_url || "/categories";
  }

  get browseLabel() {
    return settings.header_nav_browse_label?.trim()
      ? htmlSafe(settings.header_nav_browse_label)
      : null;
  }

  <template>
    {{#if settings.header_nav_enabled}}
      <nav
        class="ea-header-nav"
        aria-label={{i18n (themePrefix "header.nav_label")}}
      >
        {{#if this.helpLabel}}
          <a class="ea-header-nav__link" href={{this.helpUrl}}>
            {{this.helpLabel}}
          </a>
        {{/if}}
        {{#if this.browseLabel}}
          <a class="ea-header-nav__link" href={{this.browseUrl}}>
            {{this.browseLabel}}
            {{icon "chevron-down" class="ea-header-nav__caret"}}
          </a>
        {{/if}}
      </nav>
    {{/if}}
  </template>
}
