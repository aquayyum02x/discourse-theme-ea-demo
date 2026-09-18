import Component from "@glimmer/component";
import { service } from "@ember/service";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";
// eslint-disable-next-line discourse/ui-kit-imports -- ui-kit paths not yet present in targeted Discourse (<= 2026.4); use stable path
import AsyncContent from "discourse/components/async-content";
import { bind } from "discourse/lib/decorators";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";
import EaStatPills from "../components/ea-stat-pills";

@block("theme:ea-demo:recommended", {
  description:
    "Row of recommended topic tiles with solved state, category attribution, and engagement counts.",
})
export default class BlockRecommended extends Component {
  @service store;
  @service siteSettings;

  get limit() {
    return settings.recommended_max || 5;
  }

  get seeAllUrl() {
    return settings.recommended_see_all_url || "/latest";
  }

  @bind
  async loadTopics() {
    const params = { per_page: this.limit };
    const tag = settings.recommended_tag;

    if (tag) {
      params.tags = [tag];
    }

    const list = await this.store.findFiltered("topicList", {
      filter: "latest",
      params,
    });

    return (list.topics || []).slice(0, this.limit).map((topic) => ({
      id: topic.id,
      url: topic.url || `/t/${topic.slug}/${topic.id}`,
      title: topic.fancyTitle || topic.title,
      image: topic.image_url || topic.thumbnails?.[0]?.url,
      solved: Boolean(topic.has_accepted_answer),
      categoryName: topic.category?.name,
      categoryColor: topic.category?.color,
      author: topic.lastPosterUser?.username || topic.last_poster_username,
      age: topic.bumpedAt || topic.createdAt,
      likes: topic.like_count,
      replies: topic.reply_count ?? topic.posts_count,
      views: topic.views,
    }));
  }

  <template>
    <section class="ea-section block-recommended">
      <header class="ea-section__header">
        <h2 class="ea-section__heading">
          {{i18n (themePrefix "homepage.recommended.heading")}}
          {{icon "lightbulb"}}
        </h2>
        <a class="ea-section__action" href={{this.seeAllUrl}}>
          {{i18n (themePrefix "homepage.recommended.see_all")}}
        </a>
      </header>

      <AsyncContent @asyncData={{this.loadTopics}}>
        <:loading>
          <p class="ea-section__status" data-state="loading">
            {{i18n (themePrefix "homepage.recommended.loading")}}
          </p>
        </:loading>
        <:error>
          <p class="ea-section__status" data-state="error">
            {{i18n (themePrefix "homepage.recommended.error")}}
          </p>
        </:error>
        <:content as |topics|>
          {{#if topics.length}}
            <ul class="block-recommended__list">
              {{#each topics as |topic|}}
                <li class="block-recommended__item">
                  <article class="block-recommended__tile">
                    <a
                      class="block-recommended__media"
                      href={{topic.url}}
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      {{#if topic.image}}
                        <img
                          class="block-recommended__image"
                          src={{topic.image}}
                          alt=""
                          loading="lazy"
                        />
                      {{else}}
                        <span class="block-recommended__placeholder"></span>
                      {{/if}}

                      {{#if topic.solved}}
                        <span class="ea-badge --solved
                            block-recommended__solved">
                          {{icon "check"}}
                          {{i18n (themePrefix "homepage.solved")}}
                        </span>
                      {{/if}}

                      {{#if topic.categoryName}}
                        <span class="block-recommended__overlay">
                          <span class="block-recommended__category">
                            {{topic.categoryName}}
                          </span>
                        </span>
                      {{/if}}
                    </a>

                    <div class="block-recommended__body">
                      <h3 class="block-recommended__title">
                        <a href={{topic.url}}>{{htmlSafe topic.title}}</a>
                      </h3>
                      {{#if topic.author}}
                        <p class="block-recommended__author">{{topic.author}}</p>
                      {{/if}}
                      <EaStatPills
                        @likes={{topic.likes}}
                        @replies={{topic.replies}}
                        @views={{topic.views}}
                      />
                    </div>
                  </article>
                </li>
              {{/each}}
            </ul>
          {{else}}
            <p class="ea-section__status">
              {{i18n (themePrefix "homepage.recommended.empty")}}
            </p>
          {{/if}}
        </:content>
      </AsyncContent>
    </section>
  </template>
}
