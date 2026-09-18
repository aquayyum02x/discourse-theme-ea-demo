import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { service } from "@ember/service";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import { block } from "discourse/blocks";
import { ajax } from "discourse/lib/ajax";
import { avatarUrl } from "discourse/lib/avatar-utils";
import { i18n } from "discourse-i18n";
import EaReactIsland from "../../components/ea-react-island";

const FILTERS = [
  { id: "trending", filter: "top", params: { period: "weekly" } },
  { id: "recent", filter: "latest", params: { order: "created" } },
  { id: "replies", filter: "latest", params: { order: "posts" } },
  { id: "solutions", filter: "latest", params: { solved: "yes" } },
  { id: "unsolved", filter: "latest", params: { solved: "no" } },
];

@block("theme:ea-demo:trending-react", {
  description: "Trending discussions rendered by the React + Paloma island.",
})
export default class BlockTrendingReact extends Component {
  @service store;
  @service siteSettings;

  @tracked activeFilter = "trending";
  @tracked topics = [];
  @tracked heroes = [];
  @tracked loading = true;
  @tracked error = false;

  @action
  async load() {
    await Promise.all([this.loadTopics(), this.loadHeroes()]);
  }

  // Filtering re-queries Discourse, so it stays on the Glimmer side of the boundary.
  @action
  async setFilter(id) {
    this.activeFilter = id;
    await this.loadTopics();
  }

  async loadTopics() {
    this.loading = true;
    this.error = false;

    const config = FILTERS.find((f) => f.id === this.activeFilter) || FILTERS[0];

    try {
      const list = await this.store.findFiltered("topicList", {
        filter: config.filter,
        params: { ...config.params, per_page: settings.trending_max || 10 },
      });

      this.topics = (list.topics || []).map((topic) => ({
        id: topic.id,
        url: topic.url || `/t/${topic.slug}/${topic.id}`,
        title: topic.title,
        image: topic.image_url || topic.thumbnails?.[0]?.url,
        solved: Boolean(topic.has_accepted_answer),
        categoryName: topic.category?.name,
        tags: (topic.tags || []).map((tag) => tag?.name ?? tag),
        author: topic.lastPosterUser?.username || topic.last_poster_username,
        age: new Date(topic.bumpedAt || topic.createdAt).toLocaleDateString(),
        likes: topic.like_count,
        replies: topic.reply_count ?? topic.posts_count,
        views: topic.views,
      }));
    } catch {
      this.error = true;
      this.topics = [];
    } finally {
      this.loading = false;
    }
  }

  async loadHeroes() {
    try {
      const limit = settings.community_heroes_max || 5;
      const data = await ajax("/directory_items.json", {
        data: {
          period: settings.community_heroes_period || "monthly",
          order: "post_count",
        },
      });

      this.heroes = (data.directory_items || []).slice(0, limit).map((item) => ({
        id: item.id,
        displayName: this.siteSettings.prioritize_username_in_ux
          ? item.user.username
          : item.user.name || item.user.username,
        path: `/u/${item.user.username}`,
        avatar: avatarUrl(item.user.avatar_template, "large"),
        count: item.post_count || 0,
      }));
    } catch {
      this.heroes = [];
    }
  }

  get props() {
    const t = (key) => i18n(themePrefix(`homepage.${key}`));

    return {
      heading: t("trending.heading"),
      activeFilter: this.activeFilter,
      onFilterChange: this.setFilter,
      filters: FILTERS.map((f) => ({
        id: f.id,
        label: t(`trending.filter.${f.id}`),
      })),
      topics: this.topics,
      loading: this.loading,
      error: this.error,
      quests: settings.quests || [],
      heroes: this.heroes,
      labels: {
        filters: t("trending.filters"),
        viewCard: t("trending.view.card"),
        viewCompact: t("trending.view.compact"),
        loading: t("trending.loading"),
        error: t("trending.error"),
        empty: t("trending.empty"),
        solved: t("solved"),
        colTopic: t("trending.col.topic"),
        colAuthor: t("trending.col.author"),
        colReplies: t("trending.col.replies"),
        colViews: t("trending.col.views"),
        colActivity: t("trending.col.activity"),
        questsHeading: t("quests.heading"),
        questsAccept: t("quests.accept"),
        questsPrevious: t("quests.previous"),
        questsNext: t("quests.next"),
        heroesHeading: t("heroes.heading"),
        heroesContributions: "Contributions",
      },
    };
  }

  <template>
    {{! template-lint-disable modifier-name-case }}
    <div {{didInsert this.load}}>
      <EaReactIsland @section="trending" @props={{this.props}} />
    </div>
  </template>
}
