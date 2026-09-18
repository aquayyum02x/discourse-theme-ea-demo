import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import didUpdate from "@ember/render-modifiers/modifiers/did-update";
import { loadReactIsland } from "../lib/ea-react-bridge";

// The Glimmer/React boundary. Glimmer owns the Discourse side (outlet, data, settings, teardown);
// React owns everything inside the mounted element and receives it all as props.
export default class EaReactIsland extends Component {
  @tracked failed = false;

  element;
  island;

  @action
  async mount(element) {
    this.element = element;

    try {
      this.island = await loadReactIsland();
      this.render();
    } catch (error) {
      this.failed = true;
      // eslint-disable-next-line no-console
      console.error("[ea-react] failed to load island bundle", error);
    }
  }

  @action
  render() {
    if (!this.island || !this.element) {
      return;
    }

    this.island.mountSection(this.element, this.args.section, this.args.props);
  }

  willDestroy() {
    if (this.island && this.element) {
      this.island.unmountSection(this.element);
    }

    this.element = null;
    super.willDestroy(...arguments);
  }

  <template>
    {{! template-lint-disable modifier-name-case }}
    <div
      class="ea-react-island"
      data-section={{@section}}
      {{didInsert this.mount}}
      {{didUpdate this.render @props}}
    ></div>
  </template>
}
