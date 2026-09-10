import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { service } from "@ember/service";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import { block } from "discourse/blocks";
import {
  mountHomepage,
  unmount,
} from "../react-dist/ea-react-widgets";

@block("theme:ea-demo:homepage-layout", {
  description:
    "Homepage layout that mounts the React game slider and announcement components through one shared React root",
})
export default class BlockHomepageLayout extends Component {
  @service site;
  @service eaHelpData;

  @tracked apiCards;
  mountElement;

  get fallbackCards() {
    return (settings.stat_slider_display_stats || []).map((config) => ({
      title: config.title,
      image: config.image,
      link: this.categoryUrl(config.category),
    }));
  }

  get cards() {
    return this.apiCards?.length ? this.apiCards : this.fallbackCards;
  }

  categoryUrl(categoryIds) {
    const id = Array.isArray(categoryIds) ? categoryIds[0] : categoryIds;
    return (this.site.categories || []).find((category) => category.id === id)?.url;
  }

  @action
  mountHomepage(element) {
    this.mountElement = element;
    this.renderReact();
    this.loadHelpData();
  }

  async loadHelpData() {
    await this.eaHelpData.load();
    this.apiCards = this.eaHelpData.helpByGameCards;
    this.renderReact();
  }

  renderReact() {
    mountHomepage(this.mountElement, {
      cards: this.cards,
    });
  }

  willDestroy() {
    unmount(this.mountElement);
    super.willDestroy(...arguments);
  }

  <template>
    <div class="block-homepage-layout" {{didInsert this.mountHomepage}}></div>
  </template>
}
