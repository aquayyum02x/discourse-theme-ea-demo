import Component from "@glimmer/component";
import { service } from "@ember/service";
import { htmlSafe } from "@ember/template";
import { block } from "discourse/blocks";
// eslint-disable-next-line discourse/ui-kit-imports -- ui-kit paths not yet present in targeted Discourse (<= 2026.4); use stable path
import AsyncContent from "discourse/components/async-content";
import { bind } from "discourse/lib/decorators";
import { i18n } from "discourse-i18n";
import EaBadge from "../components/ea/ui/badge";
import EaMediaCard from "../components/ea/ui/media-card";
import EaSectionHeader from "../components/ea/ui/section-header";
import EaStatPills from "../components/ea/ui/stat-pills";
import EaStatus from "../components/ea/ui/status";

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
      <EaSectionHeader
        @title={{i18n (themePrefix "homepage.recommended.heading")}}
        @iconAfter="lightbulb"
      >
        <:trailing>
          <a class="ea-section__action" href={{this.seeAllUrl}}>
            {{i18n (themePrefix "homepage.recommended.see_all")}}
          </a>
        </:trailing>
      </EaSectionHeader>

      <AsyncContent @asyncData={{this.loadTopics}}>
        <:loading>
          <EaStatus @state="loading">
            {{i18n (themePrefix "homepage.recommended.loading")}}
          </EaStatus>
        </:loading>
        <:error>
          <EaStatus @state="error">
            {{i18n (themePrefix "homepage.recommended.error")}}
          </EaStatus>
        </:error>
        <:content as |topics|>
          {{#if topics.length}}
            <ul class="block-recommended__list">
              {{#each topics as |topic|}}
                <li class="block-recommended__item">
                  <article class="block-recommended__tile">
                    <EaMediaCard
                      @mediaHref={{topic.url}}
                      @image={{topic.image}}
                      @placeholder={{true}}
                    >
                      <:overlay>
                        {{#if topic.solved}}
                          <EaBadge
                            @variant="solved"
                            @icon="check"
                            class="block-recommended__solved"
                          >
                            {{i18n (themePrefix "homepage.solved")}}
                          </EaBadge>
                        {{/if}}

                        {{#if topic.categoryName}}
                          <span class="block-recommended__overlay">
                            <span class="block-recommended__category">
                              {{topic.categoryName}}
                            </span>
                          </span>
                        {{/if}}
                      </:overlay>
                    </EaMediaCard>

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
            <EaStatus>
              {{i18n (themePrefix "homepage.recommended.empty")}}
            </EaStatus>
          {{/if}}
        </:content>
      </AsyncContent>
    </section>
  </template>
}
