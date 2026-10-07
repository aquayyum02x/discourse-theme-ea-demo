import Component from "@glimmer/component";
import { service } from "@ember/service";
import { concat } from "@ember/helper";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";
import { i18n } from "discourse-i18n";
import EaBadge from "../components/ea/ui/badge";
import EaCarousel from "../components/ea/ui/carousel";
import EaMediaCard from "../components/ea/ui/media-card";
import EaSectionHeader from "../components/ea/ui/section-header";
import EaStatus from "../components/ea/ui/status";

@block("theme:ea-demo:stat-slider", {
  description:
    "Horizontally scrolling card slider of community statistics, configured from theme settings",
})
export default class BlockStatSlider extends Component {
  @service site;
  @service eaHelpData;

  @action
  loadHelpData() {
    this.eaHelpData.load();
  }

  get filteredStats() {
    const apiCards = this.eaHelpData.helpByGameCards;

    if (apiCards) {
      return apiCards;
    }

    const statConfig = settings.stat_slider_display_stats || [];

    return statConfig.map((config) => ({
      title: config.title,
      link: this.categoryUrl(config.category),
      image: config.image,
      owned: config.owned,
    }));
  }

  get hasStats() {
    return this.filteredStats.length > 0;
  }

  // Only a configured remote source can be "loading"; settings-authored cards are synchronous.
  get isLoading() {
    return this.eaHelpData.isConfigured && this.eaHelpData.isLoading;
  }

  get hasError() {
    return this.eaHelpData.hasError;
  }

  get statusKey() {
    if (this.isLoading) {
      return "loading";
    }
    return this.hasError ? "error" : null;
  }

  // Nothing to show and nothing to report: stay mounted so the fetch can still run, but render nothing.
  get isHidden() {
    return !this.hasStats && !this.statusKey;
  }

  // htmlSafe of an empty string is still truthy, so normalise before the header sees it.
  get sliderTitle() {
    const title = settings.stat_slider_title;
    return title?.trim() ? htmlSafe(title) : null;
  }

  categoryUrl(categoryIds) {
    const id = Array.isArray(categoryIds) ? categoryIds[0] : categoryIds;

    if (id == null) {
      return undefined;
    }

    return (this.site.categories || []).find((c) => c.id === id)?.url;
  }

  <template>
    <EaCarousel as |carousel|>
      <section
        class="ea-section block-stat-slider {{if this.isHidden '--empty'}}"
        {{didInsert this.loadHelpData}}
      >
        <EaSectionHeader @title={{this.sliderTitle}} @iconAfter="users">
          <:trailing>
            {{#if this.hasStats}}
              <carousel.Nav
                @previousLabel={{i18n
                  (themePrefix "homepage.stat_slider.previous")
                }}
                @nextLabel={{i18n (themePrefix "homepage.stat_slider.next")}}
              />
            {{/if}}
          </:trailing>
        </EaSectionHeader>

        {{#if this.hasStats}}
          <carousel.Viewport>
            <ul class="block-stat-slider__list">
              {{#each this.filteredStats as |stat|}}
                <li class="block-stat-slider__item">
                  <EaMediaCard
                    @href={{stat.link}}
                    @image={{stat.image}}
                    @placeholder={{true}}
                    class="block-stat-slider__card"
                  >
                    <:overlay>
                      {{#if stat.owned}}
                        <EaBadge @variant="owned">
                          {{i18n (themePrefix "homepage.stat_slider.owned")}}
                        </EaBadge>
                      {{/if}}
                    </:overlay>
                    <:body>
                      <span
                        class="block-stat-slider__label"
                      >{{stat.title}}</span>
                    </:body>
                  </EaMediaCard>
                </li>
              {{/each}}
            </ul>
          </carousel.Viewport>
        {{else if this.statusKey}}
          <EaStatus @state={{this.statusKey}}>
            {{i18n
              (themePrefix (concat "homepage.stat_slider." this.statusKey))
            }}
          </EaStatus>
        {{/if}}
      </section>
    </EaCarousel>
  </template>
}
