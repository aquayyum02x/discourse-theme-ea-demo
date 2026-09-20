import Component from "@glimmer/component";
import { i18n } from "discourse-i18n";

export default class EaApexTopicListHeading extends Component {
  get isApexCategory() {
    return (
      this.args.outletArgs?.category?.slug ===
      (settings.apex_category_slug || "apex-legends")
    );
  }

  <template>
    {{#if this.isApexCategory}}
      <header class="ea-apex-topic-list-heading">
        <div>
          <p>{{i18n (themePrefix "apex.community_eyebrow")}}</p>
          <h2>{{i18n (themePrefix "apex.community_heading")}}</h2>
        </div>
        <p>{{i18n (themePrefix "apex.community_description")}}</p>
      </header>
    {{/if}}
  </template>
}
