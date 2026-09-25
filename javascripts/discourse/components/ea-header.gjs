import Component from "@glimmer/component";
import { service } from "@ember/service";
import { i18n } from "discourse-i18n";
import icon from "discourse/helpers/d-icon";

export default class EaHeader extends Component {
  @service currentUser;
  @service site;
  @service router;

  get isSignedIn() {
    return Boolean(this.currentUser);
  }

  get userMenuUrl() {
    if (this.isSignedIn) {
      return "/my/preferences";
    }
    return "/login";
  }

  get notificationsUrl() {
    return this.isSignedIn ? "/notifications" : "/login";
  }

  get messagesUrl() {
    return this.isSignedIn ? "/messages" : "/login";
  }

  get languageUrl() {
    return this.isSignedIn ? "/my/preferences/interface" : "/login";
  }

  <template>
    <header class="ea-header" role="banner">
      <div class="ea-header__inner">
        {{! Logo / Home link }}
        <div class="ea-header__brand">
          <a
            href="/"
            class="ea-header__logo"
            aria-label={{i18n (themePrefix "breadcrumbs.home")}}
          >
            {{icon "house"}}
            <span class="ea-header__brand-text">EA Help</span>
          </a>
        </div>

        {{! Right side actions }}
        <div class="ea-header__actions">
          {{! Messages }}
          <a
            href={{this.messagesUrl}}
            class="ea-header__action ea-header__action--icon"
            aria-label={{i18n (themePrefix "header.messages")}}
          >
            {{icon "mail"}}
          </a>

          {{! Notifications }}
          <a
            href={{this.notificationsUrl}}
            class="ea-header__action ea-header__action--icon"
            aria-label={{i18n (themePrefix "header.notifications")}}
          >
            {{icon "bell"}}
          </a>

          {{! Language selector }}
          <a
            href={{this.languageUrl}}
            class="ea-header__action ea-header__action--text"
            aria-label={{i18n (themePrefix "header.language")}}
          >
            English (US)
          </a>

          {{! Sign In / User menu }}
          <a
            href={{this.userMenuUrl}}
            class="ea-header__action ea-header__action--signin"
          >
            {{icon "user"}}
            <span>{{i18n (themePrefix "header.sign_in")}}</span>
          </a>
        </div>
      </div>
    </header>
  </template>
}
