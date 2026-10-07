import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import didUpdate from "@ember/render-modifiers/modifiers/did-update";
import EaCarouselNav from "./carousel-nav";

const Viewport = <template>
  <div
    class="ea-carousel__viewport"
    tabindex="0"
    {{didInsert @didInsert}}
    {{didUpdate @didUpdate}}
    ...attributes
  >
    {{yield}}
  </div>
</template>;

// EA UI kit — horizontal snap carousel.
// Owns the scroll-edge tracking and page-by-page scrolling so consumers only
// provide items. Yields contextual components:
//
//   <EaCarousel as |carousel|>
//     <EaSectionHeader @title="Games" @iconAfter="users">
//       <:trailing>
//         <carousel.Nav @previousLabel={{...}} @nextLabel={{...}} />
//       </:trailing>
//     </EaSectionHeader>
//     <carousel.Viewport class="my-block__viewport">
//       <ul class="my-block__list">...</ul>
//     </carousel.Viewport>
//   </EaCarousel>
export default class EaCarousel extends Component {
  @tracked isAtStart = true;
  @tracked isAtEnd = true;

  scroller;

  willDestroy() {
    this.scroller?.removeEventListener("scroll", this.updateScrollState);
    super.willDestroy(...arguments);
  }

  @action
  setupScroller(element) {
    this.scroller = element;
    element.addEventListener("scroll", this.updateScrollState, {
      passive: true,
    });
    this.updateScrollState();
  }

  @action
  updateScrollState() {
    if (!this.scroller) {
      return;
    }

    this.isAtStart = this.scroller.scrollLeft <= 1;
    this.isAtEnd =
      this.scroller.scrollLeft + this.scroller.clientWidth >=
      this.scroller.scrollWidth - 1;
  }

  @action
  scrollPrevious() {
    this.scrollByPage(-1);
  }

  @action
  scrollNext() {
    this.scrollByPage(1);
  }

  scrollByPage(direction) {
    this.scroller?.scrollBy({
      left: direction * this.scroller.clientWidth * 0.85,
      behavior: "smooth",
    });
  }

  <template>
    {{yield
      (hash
        Nav=(component
          EaCarouselNav
          onPrevious=this.scrollPrevious
          onNext=this.scrollNext
          previousDisabled=this.isAtStart
          nextDisabled=this.isAtEnd
        )
        Viewport=(component
          Viewport
          didInsert=this.setupScroller
          didUpdate=this.updateScrollState
        )
      )
    }}
  </template>
}
