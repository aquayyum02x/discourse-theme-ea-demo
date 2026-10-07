import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from "@ember/service";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import willDestroy from "@ember/render-modifiers/modifiers/will-destroy";
import { ajax } from "discourse/lib/ajax";
import DiscourseURL from "discourse/lib/url";
import { avatarUrl } from "discourse/lib/avatar-utils";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";
import ageWithTooltip from "discourse/helpers/age-with-tooltip";

// Discourse notification_type ids → how each renders in the EA panel.
// Names follow core's Notification.types; only the common ones need labels.
const TYPES = {
  mentioned: { icon: "at", label: "notifications.mentioned" },
  replied: { icon: "reply", label: "notifications.replied" },
  quoted: { icon: "quote-right", label: "notifications.quoted" },
  liked: { icon: "heart", label: "notifications.liked" },
  invited: { icon: "user-plus", label: "notifications.invited" },
  badge_granted: { icon: "award", label: "notifications.badge_granted" },
  watching_topic: { icon: "eye", label: "notifications.watching" },
};

// Map the numeric type id to a stable key. Core's Notification.types enum:
// 1 mentioned, 2 replied, 3 quoted, 5 liked, 12 badge_granted, 16 watching, 17 invited.
const TYPE_BY_ID = {
  1: "mentioned",
  2: "replied",
  3: "quoted",
  5: "liked",
  12: "badge_granted",
  16: "watching_topic",
  17: "invited",
};

// EA notifications panel — the Figma "Notifcation Panel" (node 1378:126163).
// A bell toggle in the header opens a floating panel of recent activity, fed by
// Discourse's live /notifications.json. "View All" routes to the user's full
// notifications page; "Mark All As Read" calls the mark-read endpoint.
export default class EaNotifications extends Component {
  @service currentUser;

  @tracked isOpen = false;
  @tracked notifications = [];
  @tracked isLoading = true;

  root;

  get hasUnread() {
    return this.notifications.some((n) => !n.read);
  }

  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }

  // --- Data ---

  async load() {
    if (!this.currentUser) {
      this.isLoading = false;
      return;
    }

    try {
      const data = await ajax("/notifications.json", {
        data: { limit: 8, recent: true },
      });

      this.notifications = (data.notifications || []).map((n) =>
        this.present(n)
      );
    } catch {
      this.notifications = [];
    } finally {
      this.isLoading = false;
    }
  }

  present(notification) {
    const data = this.parseData(notification.data);
    const key = TYPE_BY_ID[notification.notification_type];
    const type = TYPES[key] || { icon: "bell", label: "notifications.generic" };

    // Discourse stores who triggered it in the data payload.
    const actor = data?.display_username || data?.username;
    const avatarTemplate =
      this.currentUser && data?.acting_user_avatar_template;

    return {
      id: notification.id,
      read: notification.read,
      createdAt: notification.created_at,
      icon: type.icon,
      text: this.describe(key, data, actor),
      url: this.urlFor(notification, data),
      avatar: avatarTemplate ? avatarUrl(avatarTemplate, "large") : null,
    };
  }

  parseData(raw) {
    try {
      return typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch {
      return {};
    }
  }

  describe(key, data, actor) {
    const vars = {
      username: actor,
      badge: data?.badge_name,
      topic: data?.topic_title,
    };

    return i18n(themePrefix(TYPES[key]?.label || "notifications.generic"), vars);
  }

  urlFor(notification, data) {
    if (notification.topic_id && notification.slug) {
      const post = notification.post_number ? `/${notification.post_number}` : "";
      return `/t/${notification.slug}/${notification.topic_id}${post}`;
    }

    if (data?.badge_slug) {
      return `/badges/${data.badge_id}/${data.badge_slug}`;
    }

    return `/u/${this.currentUser.username}/notifications`;
  }

  // --- Events ---

  @action
  setup(element) {
    this.root = element;
    this.load();
    document.addEventListener("click", this.handleOutside, true);
  }

  @action
  teardown() {
    document.removeEventListener("click", this.handleOutside, true);
  }

  @action
  handleOutside(event) {
    if (this.root && !this.root.contains(event.target)) {
      this.isOpen = false;
    }
  }

  @action
  toggle() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.load();
    }
  }

  @action
  close() {
    this.isOpen = false;
  }

  @action
  async markAllRead() {
    this.notifications = this.notifications.map((n) => ({ ...n, read: true }));

    try {
      await ajax("/notifications/mark-read.json", { type: "PUT" });
    } catch {
      // optimistic UI already applied; a failed call just leaves server state
    }
  }

  @action
  visit(notification) {
    this.isOpen = false;
    DiscourseURL.routeTo(notification.url);
  }

  <template>
    {{#if this.currentUser}}
      <div
        class="ea-notifications"
        {{didInsert this.setup}}
        {{willDestroy this.teardown}}
      >
        <button
          type="button"
          class="ea-notifications__toggle"
          aria-label={{i18n (themePrefix "notifications.toggle")}}
          aria-expanded="{{this.isOpen}}"
          {{on "click" this.toggle}}
        >
          {{icon "bell"}}
          {{#if this.hasUnread}}
            <span
              class="ea-notifications__count"
              aria-label={{i18n
                (themePrefix "notifications.unread_count")
                count=this.unreadCount
              }}
            >{{this.unreadCount}}</span>
          {{/if}}
        </button>

        {{#if this.isOpen}}
          <div class="ea-notifications__panel" role="dialog" aria-label={{i18n (themePrefix "notifications.toggle")}}>
            <header class="ea-notifications__header">
              <h2 class="ea-notifications__title">
                {{i18n (themePrefix "notifications.title")}}
              </h2>
              <a
                class="ea-notifications__view-all"
                href="/u/{{this.currentUser.username}}/notifications"
              >
                {{i18n (themePrefix "notifications.view_all")}}
              </a>
            </header>

            <section class="ea-notifications__section">
              <header class="ea-notifications__section-head">
                <h3 class="ea-notifications__section-title">
                  {{i18n (themePrefix "notifications.recent_activity")}}
                </h3>
                {{#if this.hasUnread}}
                  <button
                    type="button"
                    class="ea-notifications__mark-read"
                    {{on "click" this.markAllRead}}
                  >
                    {{i18n (themePrefix "notifications.mark_all_read")}}
                  </button>
                {{/if}}
              </header>

              {{#if this.isLoading}}
                <p class="ea-notifications__status">
                  {{i18n (themePrefix "notifications.loading")}}
                </p>
              {{else if this.notifications.length}}
                <ul class="ea-notifications__list">
                  {{#each this.notifications as |notification|}}
                    <li>
                      <button
                        type="button"
                        class="ea-notifications__item
                          {{unless notification.read '--unread'}}"
                        {{on "click" (fn this.visit notification)}}
                      >
                        <span class="ea-notifications__item-icon">
                          {{icon notification.icon}}
                        </span>
                        <span class="ea-notifications__item-body">
                          <span class="ea-notifications__item-text">
                            {{notification.text}}
                          </span>
                          <span class="ea-notifications__item-time">
                            {{ageWithTooltip notification.createdAt}}
                          </span>
                        </span>
                        {{#unless notification.read}}
                          <span
                            class="ea-notifications__dot"
                            aria-hidden="true"
                          ></span>
                        {{/unless}}
                      </button>
                    </li>
                  {{/each}}
                </ul>
              {{else}}
                <p class="ea-notifications__status">
                  {{i18n (themePrefix "notifications.empty")}}
                </p>
              {{/if}}
            </section>
          </div>
        {{/if}}
      </div>
    {{/if}}
  </template>
}
