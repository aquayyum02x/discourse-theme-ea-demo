import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { service } from "@ember/service";
import { concat } from "@ember/helper";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import didUpdate from "@ember/render-modifiers/modifiers/did-update";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";

@block("theme:ea-demo:stat-slider", {
  description:
    "Horizontally scrolling card slider of community statistics, configured from theme settings",
})
export default class BlockStatSlider extends Component {
  @service site;
  @service eaHelpData;

  @tracked isAtStart = true;
  @tracked isAtEnd = true;

  scroller;

  willDestroy() {
    this.scroller?.removeEventListener("scroll", this.updateScrollState);
    super.willDestroy(...arguments);
  }

  @action
  loadHelpData() {
    this.eaHelpData.load();
  }

  get filteredStats() {
    const apiCards = this.eaHelpData.helpByGameCards;

    if (apiCards) {
      return apiCards;
    }

    const statConfig = settings.stat_slider_display_stats || [];

    return statConfig.map((config) => ({
      title: config.title,
      link: this.categoryUrl(config.category),
      image: config.image,
      owned: config.owned,
    }));
  }

  get hasStats() {
    return this.filteredStats.length > 0;
  }

  // Only a configured remote source can be "loading"; settings-authored cards are synchronous.
  get isLoading() {
    return this.eaHelpData.isConfigured && this.eaHelpData.isLoading;
  }

  get hasError() {
    return this.eaHelpData.hasError;
  }

  get statusKey() {
    if (this.isLoading) {
      return "loading";
    }
    return this.hasError ? "error" : null;
  }

  // Nothing to show and nothing to report: stay mounted so the fetch can still run, but render nothing.
  get isHidden() {
    return !this.hasStats && !this.statusKey;
  }

  categoryUrl(categoryIds) {
    const id = Array.isArray(categoryIds) ? categoryIds[0] : categoryIds;

    if (id == null) {
      return undefined;
    }

    return (this.site.categories || []).find((c) => c.id === id)?.url;
  }

  @action
  setupScroller(element) {
    this.scroller = element;
    element.addEventListener("scroll", this.updateScrollState, {
      passive: true,
    });
    this.updateScrollState();
  }

  @action
  updateScrollState() {
    if (!this.scroller) {
      return;
    }

    this.isAtStart = this.scroller.scrollLeft <= 1;
    this.isAtEnd =
      this.scroller.scrollLeft + this.scroller.clientWidth >=
      this.scroller.scrollWidth - 1;
  }

  @action
  scrollPrevious() {
    this.scrollByPage(-1);
  }

  @action
  scrollNext() {
    this.scrollByPage(1);
  }

  scrollByPage(direction) {
    this.scroller?.scrollBy({
      left: direction * this.scroller.clientWidth * 0.85,
      behavior: "smooth",
    });
  }

  <template>
    {{! template-lint-disable modifier-name-case }}
    <section
      class="ea-section block-stat-slider {{if this.isHidden '--empty'}}"
      {{didInsert this.loadHelpData}}
    >
      <header class="ea-section__header">
        {{#if settings.stat_slider_title}}
          <h2 class="ea-section__heading">
            {{htmlSafe settings.stat_slider_title}}
            {{icon "users"}}
          </h2>
        {{/if}}
        {{#if this.hasStats}}
          <div class="ea-carousel-nav">
            <button
              class="ea-carousel-nav__button"
              type="button"
              aria-label={{i18n (themePrefix "homepage.stat_slider.previous")}}
              disabled={{this.isAtStart}}
              {{on "click" this.scrollPrevious}}
            >
              {{icon "arrow-left"}}
            </button>
            <button
              class="ea-carousel-nav__button"
              type="button"
              aria-label={{i18n (themePrefix "homepage.stat_slider.next")}}
              disabled={{this.isAtEnd}}
              {{on "click" this.scrollNext}}
            >
              {{icon "arrow-right"}}
            </button>
          </div>
        {{/if}}
      </header>

      {{#if this.hasStats}}
        <div
          class="block-stat-slider__viewport"
          tabindex="0"
          {{didInsert this.setupScroller}}
          {{didUpdate this.updateScrollState}}
        >
          <ul class="block-stat-slider__list">
            {{#each this.filteredStats as |stat|}}
              <li class="block-stat-slider__item">
                {{#if stat.link}}
                  <a class="block-stat-slider__card" href={{stat.link}}>
                    <span class="block-stat-slider__media">
                      {{#if stat.image}}
                        <img src={{stat.image}} alt="" loading="lazy" />
                      {{/if}}
                      {{#if stat.owned}}
                        <span class="block-stat-slider__owned">
                          {{i18n (themePrefix "homepage.stat_slider.owned")}}
                        </span>
                      {{/if}}
                    </span>
                    <span class="block-stat-slider__label">{{stat.title}}</span>
                  </a>
                {{else}}
                  <div class="block-stat-slider__card">
                    <span class="block-stat-slider__media">
                      {{#if stat.image}}
                        <img src={{stat.image}} alt="" loading="lazy" />
                      {{/if}}
                      {{#if stat.owned}}
                        <span class="block-stat-slider__owned">
                          {{i18n (themePrefix "homepage.stat_slider.owned")}}
                        </span>
                      {{/if}}
                    </span>
                    <span class="block-stat-slider__label">{{stat.title}}</span>
                  </div>
                {{/if}}
              </li>
            {{/each}}
          </ul>
        </div>
      {{else if this.statusKey}}
        <p class="ea-section__status" data-state={{this.statusKey}}>
          {{i18n
            (themePrefix (concat "homepage.stat_slider." this.statusKey))
          }}
        </p>
      {{/if}}
    </section>
  </template>
}
