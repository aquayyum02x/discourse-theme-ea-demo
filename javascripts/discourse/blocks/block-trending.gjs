import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { concat, fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
import { service } from "@ember/service";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";
// eslint-disable-next-line discourse/ui-kit-imports -- ui-kit paths not yet present in targeted Discourse (<= 2026.4); use stable path
import AsyncContent from "discourse/components/async-content";
import { bind } from "discourse/lib/decorators";
import { eq, or } from "discourse/truth-helpers";
import icon from "discourse/helpers/d-icon";
import number from "discourse/helpers/number";
import ageWithTooltip from "discourse/helpers/age-with-tooltip";
import { i18n } from "discourse-i18n";
import EaStatPills from "../components/ea-stat-pills";
import EaQuests from "../components/ea-quests";
import EaCommunityHeroes from "../components/ea-community-heroes";

const FILTERS = [
  { id: "trending", filter: "top", icon: "fire", params: { period: "weekly" } },
  { id: "recent", filter: "latest", params: { order: "created" } },
  { id: "replies", filter: "latest", params: { order: "posts" } },
  { id: "solutions", filter: "latest", params: { solved: "yes" } },
  { id: "unsolved", filter: "latest", params: { solved: "no" } },
];

const VIEWS = [
  { id: "card", icon: "table-cells-large" },
  { id: "compact", icon: "list" },
];

@block("theme:ea-demo:trending", {
  description:
    "Filterable trending discussion list with card and compact layouts, plus quests and community leaderboard widgets.",
})
export default class BlockTrending extends Component {
  @service store;

  @tracked activeFilter = "trending";
  @tracked activeView = "card";

  filters = FILTERS;
  views = VIEWS;

  @action
  setFilter(id) {
    this.activeFilter = id;
  }

  @action
  setView(id) {
    this.activeView = id;
  }

  get isCard() {
    return this.activeView === "card";
  }

  @bind
  async loadTopics(activeFilter) {
    const config = FILTERS.find((f) => f.id === activeFilter) || FILTERS[0];

    const list = await this.store.findFiltered("topicList", {
      filter: config.filter,
      params: { ...config.params, per_page: settings.trending_max || 10 },
    });

    return (list.topics || []).map((topic) => ({
      id: topic.id,
      url: topic.url || `/t/${topic.slug}/${topic.id}`,
      title: topic.fancyTitle || topic.title,
      image: topic.image_url || topic.thumbnails?.[0]?.url,
      solved: Boolean(topic.has_accepted_answer),
      categoryName: topic.category?.name,
      tags: (topic.tags || []).map((tag) => tag?.name ?? tag),
      author: topic.lastPosterUser?.username || topic.last_poster_username,
      age: topic.bumpedAt || topic.createdAt,
      likes: topic.like_count,
      replies: topic.reply_count ?? topic.posts_count,
      views: topic.views,
    }));
  }

  <template>
    <section class="ea-section block-trending">
      <header class="ea-section__header">
        <h2 class="ea-section__heading">
          {{i18n (themePrefix "homepage.trending.heading")}}
          {{icon "arrow-trend-up"}}
        </h2>
      </header>

      <div class="block-trending__controls">
        <div class="block-trending__filters" role="group" aria-label={{i18n (themePrefix "homepage.trending.filters_label")}}>
          <span class="block-trending__filters-label">
            {{icon "sliders"}}
            {{i18n (themePrefix "homepage.trending.filters")}}
          </span>
          {{#each this.filters as |filter|}}
            <button
              type="button"
              class="block-trending__chip
                {{if (eq filter.id this.activeFilter) '--active'}}"
              aria-pressed="{{eq filter.id this.activeFilter}}"
              {{on "click" (fn this.setFilter filter.id)}}
            >
              {{#if filter.icon}}{{icon filter.icon}}{{/if}}
              {{i18n
                (themePrefix (concat "homepage.trending.filter." filter.id))
              }}
            </button>
          {{/each}}
        </div>

        <div class="block-trending__views" role="group" aria-label={{i18n (themePrefix "homepage.trending.view_label")}}>
          {{#each this.views as |view|}}
            <button
              type="button"
              class="block-trending__view
                {{if (eq view.id this.activeView) '--active'}}"
              aria-pressed="{{eq view.id this.activeView}}"
              {{on "click" (fn this.setView view.id)}}
            >
              {{icon view.icon}}
              {{i18n (themePrefix (concat "homepage.trending.view." view.id))}}
            </button>
          {{/each}}
        </div>
      </div>

      <div class="block-trending__body">
        <div class="block-trending__threads">
          <AsyncContent
            @asyncData={{this.loadTopics}}
            @context={{this.activeFilter}}
          >
            <:loading>
              <p class="ea-section__status" data-state="loading">
                {{i18n (themePrefix "homepage.trending.loading")}}
              </p>
            </:loading>
            <:error>
              <p class="ea-section__status" data-state="error">
                {{i18n (themePrefix "homepage.trending.error")}}
              </p>
            </:error>
            <:content as |topics|>
              {{#if topics.length}}
                {{#if this.isCard}}
                  <ul class="block-trending__list">
                    {{#each topics as |topic index|}}
                      <li class="block-trending__row">
                        <p class="block-trending__eyebrow">
                          {{#if topic.categoryName}}
                            <span>{{topic.categoryName}}</span>
                            <span aria-hidden="true">&bull;</span>
                          {{/if}}
                          {{ageWithTooltip topic.age}}
                        </p>

                        <h3 class="block-trending__title">
                          <a href={{topic.url}}>{{htmlSafe topic.title}}</a>
                        </h3>

                        {{#if (or topic.solved topic.tags.length)}}
                          <p class="block-trending__badges">
                            {{#if topic.solved}}
                              <span class="ea-badge --solved">
                                {{icon "check"}}
                                {{i18n (themePrefix "homepage.solved")}}
                              </span>
                            {{/if}}
                            {{#each topic.tags as |tag|}}
                              <span class="ea-badge">{{tag}}</span>
                            {{/each}}
                          </p>
                        {{/if}}

                        {{#if (eq index 0)}}
                          {{#if topic.image}}
                            <a
                              class="block-trending__media"
                              href={{topic.url}}
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <img src={{topic.image}} alt="" loading="lazy" />
                            </a>
                          {{/if}}
                        {{/if}}

                        <EaStatPills
                          @likes={{topic.likes}}
                          @replies={{topic.replies}}
                          @views={{topic.views}}
                        />
                      </li>
                    {{/each}}
                  </ul>
                {{else}}
                  <table class="block-trending__table">
                    <thead>
                      <tr>
                        <th scope="col">
                          {{i18n (themePrefix "homepage.trending.col.topic")}}
                        </th>
                        <th scope="col">
                          {{i18n (themePrefix "homepage.trending.col.author")}}
                        </th>
                        <th scope="col">
                          {{i18n (themePrefix "homepage.trending.col.replies")}}
                        </th>
                        <th scope="col">
                          {{i18n (themePrefix "homepage.trending.col.views")}}
                        </th>
                        <th scope="col">
                          {{i18n (themePrefix "homepage.trending.col.activity")}}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {{#each topics as |topic|}}
                        <tr>
                          <td>
                            <a href={{topic.url}}>{{htmlSafe topic.title}}</a>
                            {{#if topic.categoryName}}
                              <span class="block-trending__table-category">
                                {{topic.categoryName}}
                              </span>
                            {{/if}}
                          </td>
                          <td>{{topic.author}}</td>
                          <td>{{number topic.replies}}</td>
                          <td>{{number topic.views}}</td>
                          <td>{{ageWithTooltip topic.age}}</td>
                        </tr>
                      {{/each}}
                    </tbody>
                  </table>
                {{/if}}
              {{else}}
                <p class="ea-section__status">
                  {{i18n (themePrefix "homepage.trending.empty")}}
                </p>
              {{/if}}
            </:content>
          </AsyncContent>
        </div>

        <aside class="block-trending__widgets">
          <EaQuests />
          <EaCommunityHeroes />
        </aside>
      </div>
    </section>
  </template>
}
