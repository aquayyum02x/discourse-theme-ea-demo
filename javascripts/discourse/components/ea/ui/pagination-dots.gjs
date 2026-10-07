import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { eq, gt } from "discourse/truth-helpers";

// EA UI kit — pagination dots for stacked carousels (e.g. the quests widget).
// @items entries should carry a `title` used as the dot's accessible name.
//
//   <EaPaginationDots
//     @items={{this.quests}}
//     @currentIndex={{this.index}}
//     @onSelect={{this.goTo}}
//     class="ea-quests__dots"
//   />
const EaPaginationDots = <template>
  {{#if (gt @items.length 1)}}
    <div class="ea-pagination-dots" ...attributes>
      {{#each @items as |item index|}}
        <button
          type="button"
          class="ea-pagination-dots__dot
            {{if (eq index @currentIndex) '--active'}}"
          aria-label={{item.title}}
          aria-current="{{eq index @currentIndex}}"
          {{on "click" (fn @onSelect index)}}
        ></button>
      {{/each}}
    </div>
  {{/if}}
</template>;

export default EaPaginationDots;
