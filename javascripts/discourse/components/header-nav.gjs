import Component from "@glimmer/component";
import { htmlSafe } from "@ember/template";
import icon from "discourse/helpers/d-icon";

// ─────────────────────────────────────────────────────────────────────────────
// DEMO: Header navigation links ("EA Help", "Browse by Topic")
//
// WHAT THIS IS: a Glimmer component. That's just a template (HTML with {{…}})
// plus an optional class for logic. This one is so simple it needs almost no
// logic — it reads two labels/URLs from theme settings and renders two links.
//
// HOW IT GETS ON THE PAGE: see api-initializers/header-nav.js, which "plugs"
// this component into a slot Discourse reserves in the header.
// ─────────────────────────────────────────────────────────────────────────────
export default class HeaderNav extends Component {
  // A "getter" — a function that behaves like a property. It reads the admin
  // setting (settings.header_nav_*) so the text is never hardcoded.
  get helpLabel() {
    return settings.header_nav_help_label || "EA Help";
  }

  get helpUrl() {
    return settings.header_nav_help_url || "https://help.ea.com";
  }

  get browseLabel() {
    return settings.header_nav_browse_label || "Browse by Topic";
  }

  get browseUrl() {
    return settings.header_nav_browse_url || "/categories";
  }

  // The template is the HTML this component renders. {{this.helpLabel}} means
  // "insert the value of the helpLabel getter here." {{icon "…"}} draws an icon.
  <template>
    <nav class="demo-header-nav" aria-label="Primary">
      <a class="demo-header-nav__link" href={{this.helpUrl}}>
        {{this.helpLabel}}
      </a>
      <a class="demo-header-nav__link" href={{this.browseUrl}}>
        {{this.browseLabel}}
        {{icon "chevron-down"}}
      </a>
    </nav>
  </template>
}
