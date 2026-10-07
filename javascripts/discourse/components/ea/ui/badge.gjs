import { concat } from "@ember/helper";
import icon from "discourse/helpers/d-icon";

// EA UI kit — badge pill.
// Variants map to the modifier classes in stylesheets: default (tag chip),
// "solved" (green affirmative) and "owned" (floating inverse pill on media).
//
//   <EaBadge @variant="solved" @icon="check">Solved</EaBadge>
//   <EaBadge>{{tag}}</EaBadge>
const EaBadge = <template>
  <span class="ea-badge {{if @variant (concat '--' @variant)}}" ...attributes>
    {{#if @icon}}
      {{icon @icon}}
    {{/if}}
    {{yield}}
  </span>
</template>;

export default EaBadge;
