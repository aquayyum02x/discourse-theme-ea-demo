import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import { gt } from "discourse/truth-helpers";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";

// EA header search overlay (Figma 1252:93373) — the dropdown that opens under
// the search bar. Empty query: Recent Searches + Trending Discussions.
// Typing: live topic results. Purely presentational; the parent
// ea-header-search component owns state and data fetching.
const EaHeaderSearchOverlay = <template>
  <div class="ea-header-search-overlay" role="listbox">
    {{#if @term}}
      {{! Live results while typing }}
      <section class="ea-header-search-overlay__section">
        <h3 class="ea-header-search-overlay__heading">
          {{i18n (themePrefix "header.search_results")}}
        </h3>

        {{#if @isSearching}}
          <p class="ea-header-search-overlay__status">
            {{i18n (themePrefix "header.searching")}}
          </p>
        {{else if @results.length}}
          <ul class="ea-header-search-overlay__list">
            {{#each @results as |result|}}
              <li>
                <a
                  class="ea-header-search-overlay__item"
                  href={{result.url}}
                  {{on "click" (fn @onVisit result)}}
                >
                  <span class="ea-header-search-overlay__item-icon">
                    {{icon "magnifying-glass"}}
                  </span>
                  <span class="ea-header-search-overlay__item-text">
                    {{result.title}}
                  </span>
                </a>
              </li>
            {{/each}}
          </ul>
        {{else}}
          <p class="ea-header-search-overlay__status">
            {{i18n (themePrefix "header.no_results")}}
          </p>
        {{/if}}
      </section>
    {{else}}
      {{! Idle: Recent Searches + Trending Discussions }}
      {{#if @recentSearches.length}}
        <section class="ea-header-search-overlay__section">
          <header class="ea-header-search-overlay__section-head">
            <h3 class="ea-header-search-overlay__heading">
              {{i18n (themePrefix "header.recent_searches")}}
            </h3>
            <button
              type="button"
              class="ea-header-search-overlay__clear"
              {{on "click" @onClearRecent}}
            >
              {{i18n (themePrefix "header.clear_recent")}}
            </button>
          </header>

          <ul class="ea-header-search-overlay__list">
            {{#each @recentSearches as |query|}}
              <li>
                <button
                  type="button"
                  class="ea-header-search-overlay__item"
                  {{on "click" (fn @onPickRecent query)}}
                >
                  <span class="ea-header-search-overlay__item-icon">
                    {{icon "clock-rotate-left"}}
                  </span>
                  <span class="ea-header-search-overlay__item-text">
                    {{query}}
                  </span>
                </button>
              </li>
            {{/each}}
          </ul>
        </section>
      {{/if}}

      {{#if (gt @recentSearches.length 0)}}
        {{#if (gt @trending.length 0)}}
          <hr class="ea-header-search-overlay__divider" />
        {{/if}}
      {{/if}}

      {{#if @trending.length}}
        <section class="ea-header-search-overlay__section">
          <h3 class="ea-header-search-overlay__heading">
            {{i18n (themePrefix "header.trending_discussions")}}
          </h3>

          <ul class="ea-header-search-overlay__list">
            {{#each @trending as |topic|}}
              <li>
                <a
                  class="ea-header-search-overlay__item"
                  href={{topic.url}}
                  {{on "click" (fn @onVisit topic)}}
                >
                  <span class="ea-header-search-overlay__item-icon">
                    {{icon "arrow-trend-up"}}
                  </span>
                  <span class="ea-header-search-overlay__item-text">
                    {{topic.title}}
                  </span>
                </a>
              </li>
            {{/each}}
          </ul>
        </section>
      {{/if}}
    {{/if}}
  </div>
</template>;

export default EaHeaderSearchOverlay;
