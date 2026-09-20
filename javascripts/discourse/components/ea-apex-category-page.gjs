import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from "@ember/service";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import DiscourseURL from "discourse/lib/url";
import { i18n } from "discourse-i18n";
import EaReactIsland from "./ea-react-island";

export default class EaApexCategoryPage extends Component {
  @service composer;
  @service site;
  @service store;

  @tracked featuredTopics = [];
  @tracked loading = false;
  @tracked error = false;

  get category() {
    return this.args.outletArgs?.category;
  }

  get isApexCategory() {
    return (
      this.category?.slug === (settings.apex_category_slug || "apex-legends")
    );
  }

  get subcategories() {
    if (!this.category) {
      return [];
    }

    return (this.site.categories || [])
      .filter((category) => category.parent_category_id === this.category.id)
      .map((category) => ({
        id: category.id,
        name: category.name,
        description:
          category.description_text || category.description_excerpt || "",
        url: category.url,
        color: category.color ? `#${category.color}` : null,
        logo:
          category.uploaded_logo?.url || category.uploaded_logo_dark?.url || null,
        topics: category.topic_count,
        posts: category.post_count,
      }));
  }

  get heroImage() {
    const configured = settings.apex_hero_image;
    return (
      configured?.url ||
      configured ||
      this.category?.uploaded_background?.url ||
      null
    );
  }

  get categoryTotals() {
    return [this.category, ...this.subcategories].reduce(
      (totals, category) => ({
        topics: totals.topics + (category?.topic_count || category?.topics || 0),
        posts: totals.posts + (category?.post_count || category?.posts || 0),
      }),
      { topics: 0, posts: 0 }
    );
  }

  @action
  async loadFeaturedTopics() {
    if (!this.isApexCategory || !this.category?.path) {
      return;
    }

    this.loading = true;
    this.error = false;

    try {
      const params = { per_page: settings.apex_featured_max || 4 };
      const tag = (settings.apex_featured_tag || "").trim();

      if (tag) {
        params.tags = [tag];
      }

      const list = await this.store.findFiltered("topicList", {
        filter: `${this.category.path.slice(1)}/l/latest`,
        params,
      });

      this.featuredTopics = (list.topics || [])
        .slice(0, settings.apex_featured_max || 4)
        .map((topic) => ({
          id: topic.id,
          url: topic.url || `/t/${topic.slug}/${topic.id}`,
          title: topic.title,
          image: topic.image_url || topic.thumbnails?.[0]?.url || null,
          excerpt: topic.excerpt || "",
          author: topic.lastPosterUser?.username || topic.last_poster_username,
          replies: topic.reply_count ?? Math.max((topic.posts_count || 1) - 1, 0),
          views: topic.views,
        }));
    } catch {
      this.error = true;
      this.featuredTopics = [];
    } finally {
      this.loading = false;
    }
  }

  @action
  search(term) {
    const query = `${term} #${this.category.slug}`.trim();
    DiscourseURL.routeTo(`/search?q=${encodeURIComponent(query)}`);
  }

  @action
  createTopic() {
    this.composer.openNewTopic({ category: this.category });
  }

  get props() {
    const category = this.category;

    return {
      title: category?.name,
      eyebrow: settings.apex_hero_eyebrow || "EA Forums",
      description:
        category?.description_text ||
        category?.description_excerpt ||
        settings.apex_description,
      logo: category?.uploaded_logo?.url || null,
      heroImage: this.heroImage,
      topicCount: this.categoryTotals.topics,
      postCount: this.categoryTotals.posts,
      places: this.subcategories,
      featuredTopics: this.featuredTopics,
      importantLinks: settings.apex_important_links || [],
      loading: this.loading,
      error: this.error,
      onSearch: this.search,
      onCreateTopic: this.createTopic,
      labels: {
        searchPlaceholder: i18n(
          themePrefix("apex.search_placeholder")
        ),
        searchLabel: i18n(themePrefix("apex.search_label")),
        startDiscussion: i18n(themePrefix("apex.start_discussion")),
        featured: i18n(themePrefix("apex.featured")),
        places: i18n(themePrefix("apex.places")),
        importantLinks: i18n(themePrefix("apex.important_links")),
        topics: i18n(themePrefix("apex.topics")),
        posts: i18n(themePrefix("apex.posts")),
        replies: i18n(themePrefix("apex.replies")),
        views: i18n(themePrefix("apex.views")),
        loading: i18n(themePrefix("apex.loading")),
        error: i18n(themePrefix("apex.error")),
        noFeatured: i18n(themePrefix("apex.no_featured")),
      },
    };
  }

  <template>
    {{#if this.isApexCategory}}
      {{! template-lint-disable modifier-name-case }}
      <div class="ea-apex-category-page" {{didInsert this.loadFeaturedTopics}}>
        <EaReactIsland @section="apex-category" @props={{this.props}} />
      </div>
    {{/if}}
  </template>
}
