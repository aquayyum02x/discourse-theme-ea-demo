import { concat } from "@ember/helper";
import icon from "discourse/helpers/d-icon";

// ─────────────────────────────────────────────────────────────────────────────
// UI LIBRARY: badge — a small pill (e.g. "Solved", a tag).
//
// This is a REUSABLE building block. Other components drop it in with a variant:
//   <UiBadge @variant="solved" @icon="check">Solved</UiBadge>
//   <UiBadge>{{tag}}</UiBadge>
//
// `@variant` adds a "--<variant>" class; `@icon` draws a leading icon;
// `{{yield}}` is whatever content the caller puts inside.
// ─────────────────────────────────────────────────────────────────────────────
const UiBadge = <template>
  <span class="ui-badge {{if @variant (concat '--' @variant)}}" ...attributes>
    {{#if @icon}}
      {{icon @icon}}
    {{/if}}
    {{yield}}
  </span>
</template>;

export default UiBadge;
