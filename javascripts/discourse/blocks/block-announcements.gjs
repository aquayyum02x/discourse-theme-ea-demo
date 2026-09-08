import Component from "@glimmer/component";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";

const AnnouncementCard = <template>
  {{#if @card.link}}
    <a
      class="block-announcements__card {{if @card.isBig '--big'}}"
      href={{@card.link}}
    >
      {{#if @card.image}}
        <span class="block-announcements__media">
          <img
            class="block-announcements__image"
            src={{@card.image}}
            alt={{@card.title}}
            loading="lazy"
          />
        </span>
      {{/if}}
      <span class="block-announcements__footer">
        {{#if @card.subtitle}}
          <span
            class="block-announcements__subtitle"
          >{{@card.subtitle}}</span>
        {{/if}}
        <span class="block-announcements__title">{{@card.title}}</span>
      </span>
    </a>
  {{else}}
    <div class="block-announcements__card {{if @card.isBig '--big'}}">
      {{#if @card.image}}
        <span class="block-announcements__media">
          <img
            class="block-announcements__image"
            src={{@card.image}}
            alt={{@card.title}}
            loading="lazy"
          />
        </span>
      {{/if}}
      <span class="block-announcements__footer">
        {{#if @card.subtitle}}
          <span
            class="block-announcements__subtitle"
          >{{@card.subtitle}}</span>
        {{/if}}
        <span class="block-announcements__title">{{@card.title}}</span>
      </span>
    </div>
  {{/if}}
</template>;

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

  // The hero slot always shows one card so the big/small layout never collapses.
  get bigCard() {
    return this.cards.find((card) => card.isBig) || this.cards[0];
  }

  get smallCards() {
    const big = this.bigCard;
    return this.cards.filter((card) => card !== big);
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
          <div class="block-announcements__hero">
            <AnnouncementCard @card={{this.bigCard}} />
          </div>

          {{#if this.smallCards.length}}
            <div class="block-announcements__small-grid">
              {{#each this.smallCards as |card|}}
                <AnnouncementCard @card={{card}} />
              {{/each}}
            </div>
          {{/if}}
        </div>
      </section>
    {{/if}}
  </template>
}
