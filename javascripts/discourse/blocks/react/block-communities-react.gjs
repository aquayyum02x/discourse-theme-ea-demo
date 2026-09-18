import Component from "@glimmer/component";
import { service } from "@ember/service";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import { block } from "discourse/blocks";
import EaReactIsland from "../../components/ea-react-island";

@block("theme:ea-demo:communities-react", {
  description: "Popular communities carousel rendered by the React + Paloma island.",
})
export default class BlockCommunitiesReact extends Component {
  @service site;
  @service eaHelpData;

  @action
  loadHelpData() {
    this.eaHelpData.load();
  }

  get games() {
    const apiCards = this.eaHelpData.helpByGameCards;

    if (apiCards) {
      return apiCards.map((card) => ({ ...card, owned: false }));
    }

    return (settings.stat_slider_display_stats || []).map((config) => ({
      title: config.title,
      image: config.image,
      owned: config.owned,
      link: this.categoryUrl(config.category),
    }));
  }

  categoryUrl(categoryIds) {
    const id = Array.isArray(categoryIds) ? categoryIds[0] : categoryIds;
    return id == null
      ? undefined
      : (this.site.categories || []).find((c) => c.id === id)?.url;
  }

  get props() {
    return { heading: settings.stat_slider_title, games: this.games };
  }

  <template>
    {{! template-lint-disable modifier-name-case }}
    <div {{didInsert this.loadHelpData}}>
      {{#if this.games.length}}
        <EaReactIsland @section="communities" @props={{this.props}} />
      {{/if}}
    </div>
  </template>
}
