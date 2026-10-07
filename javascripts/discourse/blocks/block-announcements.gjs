import Component from "@glimmer/component";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";
import EaMediaCard from "../components/ea/ui/media-card";
import EaSectionHeader from "../components/ea/ui/section-header";

// Announcement card: EA UI kit media card with the announcement body
// (avatar, subtitle, title, meta) slotted in.
const AnnouncementCard = <template>
  <EaMediaCard
    @href={{@card.link}}
    @image={{@card.image}}
    @featured={{@featured}}
    class="block-announcements__card"
  >
    <:body>
      <span class="block-announcements__body">
        {{#if @card.icon}}
          <span class="block-announcements__avatar">
            <img src={{@card.icon}} alt="" loading="lazy" />
          </span>
        {{/if}}
        <span class="block-announcements__text">
          {{#if @card.subtitle}}
            <span class="block-announcements__subtitle">{{@card.subtitle}}</span>
          {{/if}}
          <span class="block-announcements__title">{{@card.title}}</span>
          {{#if @card.meta}}
            <span class="block-announcements__meta">{{@card.meta}}</span>
          {{/if}}
        </span>
      </span>
    </:body>
  </EaMediaCard>
</template>;

@block("theme:ea-demo:announcements", {
  description:
    "Grid of announcement cards (news, patch notes, updates). Each card's big/small size is authored in theme settings, and display order can optionally be shuffled.",
})
export default class BlockAnnouncements extends Component {
  cardCache;

  // Cached per settings snapshot: `bigCard`/`smallCards` compare card identity, and an optional
  // shuffle must not reorder the grid on every re-render.
  get cards() {
    const config = settings.announcements || [];

    if (this.cardCache?.source !== config) {
      this.cardCache = { source: config, cards: this.buildCards(config) };
    }

    return this.cardCache.cards;
  }

  buildCards(config) {
    const cards = config.map((entry) => ({
      title: entry.title,
      subtitle: entry.subtitle,
      meta: entry.meta,
      icon: entry.icon,
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
      <section class="ea-section block-announcements">
        {{#if settings.announcements_heading}}
          <EaSectionHeader
            @title={{htmlSafe settings.announcements_heading}}
            @iconBefore="bullhorn"
          />
        {{/if}}

        <div class="block-announcements__grid">
          <AnnouncementCard @card={{this.bigCard}} @featured={{true}} />

          {{#if this.smallCards.length}}
            <div class="block-announcements__list">
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
