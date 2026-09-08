import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { service } from "@ember/service";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
// eslint-disable-next-line discourse/ui-kit-imports -- ui-kit paths not yet present in targeted Discourse (<= 2026.4); use stable path
import icon from "discourse/helpers/d-icon";

export default class EaSideNav extends Component {
  @service site;
  @service router;

  @tracked expanded = false;

  get topLinks() {
    return settings.side_nav_top_links || [];
  }

  get games() {
    const config = settings.side_nav_games || [];

    return config.map((entry) => ({
      title: entry.title,
      image: entry.image,
      link: this.resolveLink(entry),
    }));
  }

  resolveLink(entry) {
    const categoryIds = entry.category;
    const id = Array.isArray(categoryIds) ? categoryIds[0] : categoryIds;
    const category =
      id != null && (this.site.categories || []).find((c) => c.id === id);

    return category ? category.url : entry.url;
  }

  isActive(url) {
    return url && this.router.currentURL === url;
  }

  @action
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  <template>
    <nav
      class="ea-side-nav {{if this.expanded '--expanded'}}"
      aria-label="Quick navigation"
    >
      <button
        type="button"
        class="ea-side-nav__toggle"
        aria-label="Toggle navigation"
        aria-expanded={{this.expanded}}
        {{on "click" this.toggleExpanded}}
      >
        {{icon (if this.expanded "chevron-left" "chevron-right")}}
      </button>

      <div class="ea-side-nav__top">
        {{#each this.topLinks as |link|}}
          <a
            href={{link.url}}
            class="ea-side-nav__link
              {{if (this.isActive link.url) '--active'}}"
            title={{link.label}}
          >
            {{icon link.icon}}
            {{#if this.expanded}}
              <span class="ea-side-nav__label">{{link.label}}</span>
            {{/if}}
          </a>
        {{/each}}
      </div>

      {{#if this.games.length}}
        <div class="ea-side-nav__divider"></div>

        <div class="ea-side-nav__games">
          {{#each this.games as |game|}}
            <a href={{game.link}} class="ea-side-nav__game" title={{game.title}}>
              {{#if game.image}}
                <img
                  class="ea-side-nav__game-icon"
                  src={{game.image}}
                  alt={{game.title}}
                  loading="lazy"
                />
              {{/if}}
              {{#if this.expanded}}
                <span class="ea-side-nav__label">{{game.title}}</span>
              {{/if}}
            </a>
          {{/each}}
        </div>
      {{/if}}

      <div class="ea-side-nav__footer">
        <a href="/" class="ea-side-nav__ea-logo" title="EA">EA</a>
      </div>
    </nav>
  </template>
}
