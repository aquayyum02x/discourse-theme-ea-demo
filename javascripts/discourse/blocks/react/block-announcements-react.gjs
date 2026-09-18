import Component from "@glimmer/component";
import { block } from "discourse/blocks";
import { i18n } from "discourse-i18n";
import EaReactIsland from "../../components/ea-react-island";

@block("theme:ea-demo:announcements-react", {
  description: "Announcements rendered by the React + Paloma island.",
})
export default class BlockAnnouncementsReact extends Component {
  get props() {
    const config = settings.announcements || [];
    const cards = config.map((entry) => ({
      title: entry.title,
      subtitle: entry.subtitle,
      meta: entry.meta,
      image: entry.image,
      link: entry.link,
      isBig: entry.size === "big",
    }));

    const hero = cards.find((c) => c.isBig) || cards[0];
    const ordered = hero ? [hero, ...cards.filter((c) => c !== hero)] : cards;

    return {
      heading: settings.announcements_heading,
      cards: ordered,
    };
  }

  <template>
    {{#if this.props.cards.length}}
      <EaReactIsland @section="announcements" @props={{this.props}} />
    {{/if}}
  </template>
}
