import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { service } from "@ember/service";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import didUpdate from "@ember/render-modifiers/modifiers/did-update";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";

@block("theme:ea-demo:stat-slider", {
  description:
    "Horizontally scrolling card slider of community statistics, configured from theme settings",
})
export default class BlockStatSlider extends Component {
  @service site;

  @tracked isAtStart = true;
  @tracked isAtEnd = true;

  scroller;

  willDestroy() {
    this.scroller?.removeEventListener("scroll", this.updateScrollState);
    super.willDestroy(...arguments);
  }

  get filteredStats() {
    const statConfig = settings.stat_slider_display_stats || [];

    // eslint-disable-next-line no-console
    console.log(
      "[stat-slider] raw config:",
      statConfig,
      settings,
      "| available site.categories:",
      this,
      this.site,
      this.site.categories
    );

    return statConfig.map((config) => ({
      title: config.title,
      link: this.categoryUrl(config.category),
      image: config.image,
    }));
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
    {{#if settings.stat_slider_display_stats}}
      <section class="block-stat-slider">
        <div class="block-stat-slider__header">
          {{#if settings.stat_slider_title}}
            <h2 class="block-stat-slider__title">
              {{htmlSafe settings.stat_slider_title}}
            </h2>
          {{/if}}
          <div class="block-stat-slider__controls">
            <button
              class="block-stat-slider__arrow"
              type="button"
              aria-label="Previous statistics"
              disabled={{this.isAtStart}}
              {{on "click" this.scrollPrevious}}
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              class="block-stat-slider__arrow"
              type="button"
              aria-label="Next statistics"
              disabled={{this.isAtEnd}}
              {{on "click" this.scrollNext}}
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

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
                    {{#if stat.image}}
                      <span class="block-stat-slider__media">
                        <img
                          src={{stat.image}}
                          alt={{stat.title}}
                          loading="lazy"
                        />
                      </span>
                    {{/if}}
                    <span class="block-stat-slider__label">{{stat.title}}</span>
                  </a>
                {{else}}
                  <div class="block-stat-slider__card">
                    {{#if stat.image}}
                      <span class="block-stat-slider__media">
                        <img
                          src={{stat.image}}
                          alt={{stat.title}}
                          loading="lazy"
                        />
                      </span>
                    {{/if}}
                    <span class="block-stat-slider__label">{{stat.title}}</span>
                  </div>
                {{/if}}
              </li>
            {{/each}}
          </ul>
        </div>
      </section>
    {{/if}}
  </template>
}
