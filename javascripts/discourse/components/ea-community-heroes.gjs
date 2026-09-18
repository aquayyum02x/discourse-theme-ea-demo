import Component from "@glimmer/component";
import { service } from "@ember/service";
// eslint-disable-next-line discourse/ui-kit-imports -- ui-kit paths not yet present in targeted Discourse (<= 2026.4); use stable path
import AsyncContent from "discourse/components/async-content";
import icon from "discourse/helpers/d-icon";
import { ajax } from "discourse/lib/ajax";
import { avatarUrl } from "discourse/lib/avatar-utils";
import { bind } from "discourse/lib/decorators";
import { i18n } from "discourse-i18n";

// Backed by the core directory endpoint so it works without the gamification plugin (Q-13).
export default class EaCommunityHeroes extends Component {
  @service siteSettings;

  get limit() {
    return settings.community_heroes_max || 5;
  }

  @bind
  async fetchHeroes() {
    const data = await ajax("/directory_items.json", {
      data: {
        period: settings.community_heroes_period || "monthly",
        order: "post_count",
      },
    });

    return (data.directory_items || []).slice(0, this.limit).map((item) => ({
      id: item.id,
      displayName: this.siteSettings.prioritize_username_in_ux
        ? item.user.username
        : item.user.name || item.user.username,
      path: `/u/${item.user.username}`,
      avatar: avatarUrl(item.user.avatar_template, "large"),
      count: item.post_count || 0,
    }));
  }

  <template>
    <AsyncContent @asyncData={{this.fetchHeroes}}>
      <:loading></:loading>
      <:error></:error>
      <:content as |heroes|>
        {{#if heroes.length}}
          <section class="ea-heroes">
            <header class="ea-heroes__header">
              {{icon "trophy"}}
              <h3 class="ea-heroes__heading">
                {{i18n (themePrefix "homepage.heroes.heading")}}
              </h3>
            </header>

            <ol class="ea-heroes__list">
              {{#each heroes as |hero|}}
                <li class="ea-heroes__item">
                  <a class="ea-heroes__link" href={{hero.path}}>
                    <img
                      class="ea-heroes__avatar"
                      src={{hero.avatar}}
                      alt=""
                      loading="lazy"
                      width="40"
                      height="40"
                    />
                    <span class="ea-heroes__text">
                      <span class="ea-heroes__name">{{hero.displayName}}</span>
                      <span class="ea-heroes__count">
                        {{i18n
                          (themePrefix "homepage.heroes.contributions")
                          count=hero.count
                        }}
                      </span>
                    </span>
                  </a>
                </li>
              {{/each}}
            </ol>
          </section>
        {{/if}}
      </:content>
    </AsyncContent>
  </template>
}
