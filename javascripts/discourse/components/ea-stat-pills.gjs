import Component from "@glimmer/component";
import { concat } from "@ember/helper";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";
import number from "discourse/helpers/number";

// Views / likes / replies pills shared by the recommended and trending cards.
export default class EaStatPills extends Component {
  get pills() {
    return [
      { key: "likes", icon: "far-thumbs-up", count: this.args.likes },
      { key: "replies", icon: "reply", count: this.args.replies },
      { key: "views", icon: "eye", count: this.args.views },
    ].filter((pill) => typeof pill.count === "number");
  }

  <template>
    {{#if this.pills.length}}
      <ul class="ea-stat-pills">
        {{#each this.pills as |pill|}}
          <li class="ea-stat-pills__item">
            {{icon pill.icon}}
            <span aria-hidden="true">{{number pill.count}}</span>
            <span class="sr-only">
              {{i18n
                (themePrefix (concat "homepage.stats." pill.key))
                count=pill.count
              }}
            </span>
          </li>
        {{/each}}
      </ul>
    {{/if}}
  </template>
}
