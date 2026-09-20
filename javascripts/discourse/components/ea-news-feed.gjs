import Component from "@glimmer/component";
import { service } from "@ember/service";
import { i18n } from "discourse-i18n";

export default class EaNewsFeed extends Component {
  @service router;

  get isApexPage() {
    const currentUrl = this.router.currentURL?.split("?")[0] || "";
    const categorySlug = settings.apex_category_slug || "apex-legends";

    return (
      currentUrl === `/c/${categorySlug}` ||
      currentUrl.startsWith(`/c/${categorySlug}/`)
    );
  }

  get items() {
    return [
      {
        id: 1,
        title: "Apex Legends community update",
        summary: "Read the latest news from the Apex Legends community.",
        url: "/c/apex-legends/5",
        date: "2026-09-19",
        displayDate: "September 19, 2026",
      },
      {
        id: 2,
        title: "Latest discussions",
        summary: "See what players are discussing right now.",
        url: "/c/apex-legends/5/l/latest",
        date: "2026-09-18",
        displayDate: "September 18, 2026",
      },
    ];
  }


// get items() {
//   return settings.news_feed_items || [];
// }
  <template>
    {{#if this.isApexPage}}
      <section
        class="ea-news-feed"
        aria-labelledby="ea-news-feed-heading"
      >
        <div class="ea-news-feed__inner">
          <h2 id="ea-news-feed-heading" class="ea-news-feed__heading">
            {{i18n (themePrefix "news_feed.heading")}}
          </h2>

          <ul class="ea-news-feed__list">
            {{#each this.items as |item|}}
              <li class="ea-news-feed__item">
                <article>
                  <time
                    class="ea-news-feed__date"
                    datetime={{item.date}}
                  >
                    {{item.displayDate}}
                  </time>

                  <h3 class="ea-news-feed__title">
                    <a href={{item.url}}>
                      {{item.title}}
                    </a>
                  </h3>

                  <p class="ea-news-feed__summary">
                    {{item.summary}}
                  </p>
                </article>
              </li>
            {{/each}}
          </ul>
        </div>
      </section>
    {{/if}}
  </template>
}
