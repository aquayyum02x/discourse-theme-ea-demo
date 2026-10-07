import { on } from "@ember/modifier";
import icon from "discourse/helpers/d-icon";

// EA UI kit — circular previous/next arrows shared by the EA carousels and
// the quests widget. Styled by .ea-carousel-nav in stylesheets/brand/tokens.scss.
//
//   <EaCarouselNav
//     @previousLabel={{i18n ...}}
//     @nextLabel={{i18n ...}}
//     @previousDisabled={{this.isAtStart}}
//     @nextDisabled={{this.isAtEnd}}
//     @onPrevious={{this.previous}}
//     @onNext={{this.next}}
//   />
const EaCarouselNav = <template>
  <div class="ea-carousel-nav" ...attributes>
    <button
      class="ea-carousel-nav__button"
      type="button"
      aria-label={{@previousLabel}}
      disabled={{@previousDisabled}}
      {{on "click" @onPrevious}}
    >
      {{icon "arrow-left"}}
    </button>
    <button
      class="ea-carousel-nav__button"
      type="button"
      aria-label={{@nextLabel}}
      disabled={{@nextDisabled}}
      {{on "click" @onNext}}
    >
      {{icon "arrow-right"}}
    </button>
  </div>
</template>;

export default EaCarouselNav;
