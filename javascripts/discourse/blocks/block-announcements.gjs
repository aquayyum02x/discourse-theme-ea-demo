import Component from "@glimmer/component";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";

@block("theme:ea-demo:announcements", {
  description:
    "Grid of announcement cards (news, patch notes, updates). Each card's big/small size is authored in theme settings, and display order can optionally be shuffled.",
})
export default class BlockAnnouncements extends Component {
  get cards() {
    const config = settings.announcements || [];
    const cards = config.map((entry) => ({
      title: entry.title,
      subtitle: entry.subtitle,
      image: entry.image,
      link: entry.link,
      isBig: entry.size === "big",
    }));

    return settings.announcements_shuffle ? this.shuffled(cards) : cards;
  }

  // Fisher-Yates so re-renders don't just reverse or bias toward one order.
  shuffled(list) {
    const result = [...list];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }

  <template>
    {{#if this.cards.length}}
      <section class="block-announcements">
        {{#if settings.announcements_heading}}
          <h2 class="ea-section-heading">
            {{htmlSafe settings.announcements_heading}}
          </h2>
        {{/if}}

        <div class="block-announcements__grid">
          {{#each this.cards as |card|}}
            {{#if card.link}}
              <a
                class="block-announcements__card {{if card.isBig '--big'}}"
                href={{card.link}}
              >
                {{#if card.image}}
                  <img
                    class="block-announcements__image"
                    src={{card.image}}
                    alt={{card.title}}
                    loading="lazy"
                  />
                {{/if}}
                <span class="block-announcements__overlay">
                  {{#if card.subtitle}}
                    <span
                      class="block-announcements__subtitle"
                    >{{card.subtitle}}</span>
                  {{/if}}
                  <span class="block-announcements__title">{{card.title}}</span>
                </span>
              </a>
            {{else}}
              <div class="block-announcements__card {{if card.isBig '--big'}}">
                {{#if card.image}}
                  <img
                    class="block-announcements__image"
                    src={{card.image}}
                    alt={{card.title}}
                    loading="lazy"
                  />
                {{/if}}
                <span class="block-announcements__overlay">
                  {{#if card.subtitle}}
                    <span
                      class="block-announcements__subtitle"
                    >{{card.subtitle}}</span>
                  {{/if}}
                  <span class="block-announcements__title">{{card.title}}</span>
                </span>
              </div>
            {{/if}}
          {{/each}}
        </div>
      </section>
    {{/if}}
  </template>
}
