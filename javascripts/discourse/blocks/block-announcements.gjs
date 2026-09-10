import Component from "@glimmer/component";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import { block } from "discourse/blocks";

@block("theme:ea-demo:announcements", {
  description:
    "Grid of announcement cards (news, patch notes, updates). Each card's big/small size is authored in theme settings, and display order can optionally be shuffled.",
})
export default class BlockAnnouncements extends Component {
  mountElement;

  @action
  mountReact(element) {
    this.mountElement = element;
    window.EaReactWidgets?.mountAnnouncements(element, {
      cards: settings.announcements || [],
      heading: settings.announcements_heading,
      shuffle: settings.announcements_shuffle,
    });
  }

  willDestroy() {
    window.EaReactWidgets?.unmount(this.mountElement);
    super.willDestroy(...arguments);
  }

  <template>
    <div class="block-announcements" {{didInsert this.mountReact}}></div>
  </template>
}
