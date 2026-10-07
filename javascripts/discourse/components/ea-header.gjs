import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { htmlSafe } from "@ember/template";
import DiscourseURL from "discourse/lib/url";
import icon from "discourse/helpers/d-icon";

// ─────────────────────────────────────────────────────────────────────────────
// DEMO: The EA Forums header (Figma node 1252:93358, "Header / Authenticated")
//
// WHAT THIS IS: one Glimmer component that renders the whole EA header:
//   [EA logo + "Forums"]   [EA Help] [Browse by Topic ▾]   [ search pill ]
//
// THE PROCESS WE'RE PROVING:
//   1. The design's colors, spacing, and radius come from Figma as TOKENS
//      (see stylesheets/brand/tokens.scss) — we never hardcode a hex value.
//   2. The component is written in Glimmer (Ember), NOT React.
//   3. It drops into Discourse through a single initializer
//      (api-initializers/ea-header.js) — no custom build pipeline.
//
// HOW TO READ THE CODE: the class holds data and actions; the <template> at the
// bottom is the HTML. `{{this.x}}` prints a value, `{{on "click" this.x}}` wires
// a click, `{{icon "…"}}` draws an icon.
// ─────────────────────────────────────────────────────────────────────────────
export default class EaHeader extends Component {
  // The search text the user is typing. `@tracked` means: when this changes,
  // the template re-renders automatically.
  @tracked searchTerm = "";

  // The EA logo we downloaded from Figma. `settings.theme_uploads` is how a
  // theme references an asset declared in about.json's "assets" block.
  get logoUrl() {
    return settings.theme_uploads?.ea_logo;
  }

  // These read admin-editable settings so no text or link is hardcoded.
  get productName() {
    return settings.header_product_name || "Forums";
  }

  get searchPlaceholder() {
    return settings.header_search_placeholder || "Search";
  }

  // Nav links come from a settings list so admins can edit them.
  get navLinks() {
    return settings.header_nav_links || [];
  }

  // When the user types, keep track of the text.
  @action
  updateSearch(event) {
    this.searchTerm = event.target.value;
  }

  // Pressing Enter goes to Discourse's real search results page.
  @action
  submitSearch(event) {
    event.preventDefault();
    const q = this.searchTerm.trim();
    if (q) {
      DiscourseURL.routeTo(`/search?q=${encodeURIComponent(q)}`);
    }
  }

  <template>
    <div class="ea-header">
      {{! ── Left: EA logo + product name ── }}
      <a class="ea-header__brand" href="/">
        {{#if this.logoUrl}}
          <img class="ea-header__logo" src={{this.logoUrl}} alt="EA" />
        {{/if}}
        <span class="ea-header__product">{{this.productName}}</span>
      </a>

      {{! ── Nav pills ("EA Help", "Browse by Topic ▾") ── }}
      <nav class="ea-header__nav" aria-label="Primary">
        {{#each this.navLinks as |link|}}
          <a class="ea-header__pill" href={{link.url}}>
            {{htmlSafe link.text}}
            {{#if link.caret}}
              {{icon "chevron-down"}}
            {{/if}}
          </a>
        {{/each}}
      </nav>

      {{! ── Center: the search pill ── }}
      <form
        class="ea-header__search"
        role="search"
        {{on "submit" this.submitSearch}}
      >
        {{icon "magnifying-glass" class="ea-header__search-icon"}}
        <input
          class="ea-header__search-input"
          type="search"
          placeholder={{this.searchPlaceholder}}
          aria-label="Search"
          {{on "input" this.updateSearch}}
        />
      </form>
    </div>
  </template>
}
