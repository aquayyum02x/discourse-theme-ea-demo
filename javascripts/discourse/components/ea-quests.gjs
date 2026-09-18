import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
import { eq, gt } from "discourse/truth-helpers";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";

// Quests have no Discourse data model (see docs/open-questions.md Q-17), so they are
// authored in theme settings until a real source is agreed.
export default class EaQuests extends Component {
  @tracked index = 0;

  get quests() {
    return settings.quests || [];
  }

  get current() {
    return this.quests[this.index];
  }

  get isAtStart() {
    return this.index === 0;
  }

  get isAtEnd() {
    return this.index >= this.quests.length - 1;
  }

  @action
  previous() {
    this.index = Math.max(0, this.index - 1);
  }

  @action
  next() {
    this.index = Math.min(this.quests.length - 1, this.index + 1);
  }

  @action
  goTo(index) {
    this.index = index;
  }

  <template>
    {{#if this.quests.length}}
      <section class="ea-quests">
        <header class="ea-quests__header">
          <h3 class="ea-quests__heading">
            {{i18n (themePrefix "homepage.quests.heading")}}
          </h3>
          <div class="ea-carousel-nav">
            <button
              type="button"
              class="ea-carousel-nav__button"
              aria-label={{i18n (themePrefix "homepage.quests.previous")}}
              disabled={{this.isAtStart}}
              {{on "click" this.previous}}
            >
              {{icon "arrow-left"}}
            </button>
            <button
              type="button"
              class="ea-carousel-nav__button"
              aria-label={{i18n (themePrefix "homepage.quests.next")}}
              disabled={{this.isAtEnd}}
              {{on "click" this.next}}
            >
              {{icon "arrow-right"}}
            </button>
          </div>
        </header>

        <article class="ea-quests__card" aria-live="polite">
          {{#if this.current.image}}
            <span class="ea-quests__media">
              <img src={{this.current.image}} alt="" loading="lazy" />
            </span>
          {{/if}}

          <div class="ea-quests__body">
            {{#if this.current.icon}}
              <span class="ea-quests__icon">
                <img src={{this.current.icon}} alt="" loading="lazy" />
              </span>
            {{/if}}
            <div class="ea-quests__text">
              <p class="ea-quests__title">{{this.current.title}}</p>
              {{#if this.current.reward}}
                <p class="ea-quests__reward">{{this.current.reward}}</p>
              {{/if}}
            </div>
          </div>

          {{#if this.current.link}}
            <a class="ea-quests__cta" href={{this.current.link}}>
              {{i18n (themePrefix "homepage.quests.accept")}}
            </a>
          {{/if}}
        </article>

        {{#if (gt this.quests.length 1)}}
          <div class="ea-quests__dots">
            {{#each this.quests as |quest questIndex|}}
              <button
                type="button"
                class="ea-quests__dot
                  {{if (eq questIndex this.index) '--active'}}"
                aria-label={{quest.title}}
                aria-current="{{eq questIndex this.index}}"
                {{on "click" (fn this.goTo questIndex)}}
              ></button>
            {{/each}}
          </div>
        {{/if}}
      </section>
    {{/if}}
  </template>
}
