import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { service } from "@ember/service";
import { action } from "@ember/object";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import { block } from "discourse/blocks";
import { i18n } from "discourse-i18n";
import EaReactIsland from "../../components/ea-react-island";

@block("theme:ea-demo:recommended-react", {
  description: "Recommended topics rendered by the React + Paloma island.",
})
export default class BlockRecommendedReact extends Component {
  @service store;

  @tracked topics = [];

  @action
  async load() {
    const limit = settings.recommended_max || 5;
    const params = { per_page: limit };

    if (settings.recommended_tag) {
      params.tags = [settings.recommended_tag];
    }

    try {
      const list = await this.store.findFiltered("topicList", {
        filter: "latest",
        params,
      });

      this.topics = (list.topics || []).slice(0, limit).map((topic) => ({
        id: topic.id,
        url: topic.url || `/t/${topic.slug}/${topic.id}`,
        title: topic.title,
        image: topic.image_url || topic.thumbnails?.[0]?.url,
        solved: Boolean(topic.has_accepted_answer),
        categoryName: topic.category?.name,
        author: topic.lastPosterUser?.username || topic.last_poster_username,
        likes: topic.like_count,
        replies: topic.reply_count ?? topic.posts_count,
        views: topic.views,
      }));
    } catch {
      this.topics = [];
    }
  }

  get props() {
    return {
      heading: i18n(themePrefix("homepage.recommended.heading")),
      seeAllLabel: i18n(themePrefix("homepage.recommended.see_all")),
      seeAllUrl: settings.recommended_see_all_url || "/latest",
      topics: this.topics,
    };
  }

  <template>
    {{! template-lint-disable modifier-name-case }}
    <div {{didInsert this.load}}>
      <EaReactIsland @section="recommended" @props={{this.props}} />
    </div>
  </template>
}
