import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from "@ember/service";
import { on } from "@ember/modifier";
import didInsert from "@ember/render-modifiers/modifiers/did-insert";
import willDestroy from "@ember/render-modifiers/modifiers/will-destroy";
import { ajax } from "discourse/lib/ajax";
import DiscourseURL from "discourse/lib/url";
import icon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";
import EaHeaderSearchOverlay from "./ea-header-search-overlay";

const HISTORY_KEY = "ea-search-history";
const HISTORY_MAX = 4; // design (1252:93373) shows up to 4 recent searches
const DEBOUNCE_MS = 250;
const LIVE_MAX = 6;

// EA header search bar — the 650px input pill from the Figma header
// (node 1257:102078) plus the live Search Overlay (node 1252:93373).
// Focusing opens an overlay with recent searches and trending discussions;
// typing runs a debounced live search; Enter or a result routes to the topic
// or the full-page search. Rendered into before-header-panel by
// api-initializers/ea-header-search.js.
//
// Recent searches come from Discourse's built-in per-user log
// (GET/DELETE /u/recent-searches.json) when logged in; anonymous users fall
// back to localStorage.
export default class EaHeaderSearch extends Component {
  @service currentUser;

  @tracked term = "";
  @tracked isOpen = false;
  @tracked recentSearches = [];
  @tracked trending = [];
  @tracked results = null;
  @tracked isSearching = false;

  root;
  searchTimer;
  lastQuery = 0;

  get placeholder() {
    return settings.header_search_placeholder;
  }

  // Overlay has something to show when there is recent, trending, or live data.
  get hasOverlay() {
    return (
      this.isOpen &&
      (this.isSearching ||
        Boolean(this.results?.length) ||
        (!this.term.trim() &&
          (this.recentSearches.length > 0 || this.trending.length > 0)))
    );
  }

  // --- Data ---

  readHistory() {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch {
      return [];
    }
  }

  // Server-side history for logged-in users (Discourse's SearchLog), local
  // storage otherwise. The server already records every /search.json call, so
  // there is no separate "add" write — we just re-read after searching.
  async loadRecentSearches() {
    if (!this.currentUser) {
      this.recentSearches = this.readHistory();
      return;
    }

    try {
      const data = await ajax("/u/recent-searches.json");
      this.recentSearches = (data.recent_searches || []).slice(0, HISTORY_MAX);
    } catch {
      // 403 when log_search_queries is off, 404 for anonymous — stay local.
      this.recentSearches = this.readHistory();
    }
  }

  // Anonymous users record their own history; logged-in users are recorded by
  // the server's search log automatically when the search runs.
  recordLocal(query) {
    if (this.currentUser) {
      return;
    }

    const next = [query, ...this.recentSearches.filter((q) => q !== query)].slice(
      0,
      HISTORY_MAX
    );

    this.recentSearches = next;

    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
    } catch {
      // storage unavailable (private mode) — history just won't persist
    }
  }

  async loadTrending() {
    try {
      const list = await ajax("/top.json", {
        data: { period: "weekly", per_page: 3 },
      });

      this.trending = (list.topic_list?.topics || []).slice(0, 3).map((t) => ({
        id: t.id,
        url: `/t/${t.slug}/${t.id}`,
        title: t.fancy_title || t.title,
      }));
    } catch {
      this.trending = [];
    }
  }

  async runSearch(query) {
    const token = ++this.lastQuery;

    this.isSearching = true;

    try {
      const data = await ajax("/search.json", { data: { q: query } });

      // A slower earlier request may resolve after a newer one; drop stale.
      if (token !== this.lastQuery) {
        return;
      }

      const topics = (data.topics || []).slice(0, LIVE_MAX).map((t) => ({
        id: t.id,
        url: `/t/${t.slug}/${t.id}`,
        title: t.fancy_title || t.title,
      }));

      this.results = topics;
    } catch {
      if (token === this.lastQuery) {
        this.results = [];
      }
    } finally {
      if (token === this.lastQuery) {
        this.isSearching = false;
      }
    }
  }

  // --- Events ---

  @action
  setup(element) {
    this.root = element;
    this.loadRecentSearches();
    this.loadTrending();
    document.addEventListener("click", this.handleOutside, true);
  }

  @action
  teardown() {
    document.removeEventListener("click", this.handleOutside, true);
    clearTimeout(this.searchTimer);
  }

  @action
  handleOutside(event) {
    if (this.root && !this.root.contains(event.target)) {
      this.close();
    }
  }

  @action
  open() {
    this.isOpen = true;

    if (this.term.trim()) {
      this.scheduleSearch();
    }
  }

  @action
  close() {
    this.isOpen = false;
  }

  @action
  updateTerm(event) {
    this.term = event.target.value;
    this.isOpen = true;
    this.scheduleSearch();
  }

  scheduleSearch() {
    clearTimeout(this.searchTimer);

    const query = this.term.trim();

    if (!query) {
      this.results = null;
      this.isSearching = false;
      return;
    }

    this.searchTimer = setTimeout(() => this.runSearch(query), DEBOUNCE_MS);
  }

  @action
  submit(event) {
    event.preventDefault();

    const query = this.term.trim();

    if (!query) {
      return;
    }

    this.recordLocal(query);
    this.close();
    DiscourseURL.routeTo(`/search?q=${encodeURIComponent(query)}`);

    // The server logs the search on navigation; refresh history after it lands.
    if (this.currentUser) {
      setTimeout(() => this.loadRecentSearches(), 800);
    }
  }

  @action
  pickRecent(query) {
    this.term = query;
    this.isOpen = true;
    this.runSearch(query);
  }

  @action
  clearRecent() {
    this.recentSearches = [];

    if (this.currentUser) {
      // Server-side reset (users#reset_recent_searches).
      ajax("/u/recent-searches.json", { type: "DELETE" }).catch(() => {});
      return;
    }

    try {
      localStorage.removeItem(HISTORY_KEY);
    } catch {
      // ignore
    }
  }

  // Clicking a result navigates; anonymous users record the query locally.
  @action
  visitResult() {
    if (this.term.trim()) {
      this.recordLocal(this.term.trim());
    }

    this.close();
  }

  @action
  handleKeydown(event) {
    if (event.key === "Escape") {
      this.close();
      event.target.blur();
    }
  }

  <template>
    <div
      class="ea-header-search"
      role="search"
      {{didInsert this.setup}}
      {{willDestroy this.teardown}}
    >
      <form class="ea-header-search__form" {{on "submit" this.submit}}>
        {{icon "magnifying-glass" class="ea-header-search__icon"}}
        <input
          class="ea-header-search__input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder={{this.placeholder}}
          aria-label={{i18n (themePrefix "header.search_label")}}
          aria-expanded="{{this.hasOverlay}}"
          {{on "focus" this.open}}
          {{on "input" this.updateTerm}}
          {{on "keydown" this.handleKeydown}}
        />
      </form>

      {{#if this.hasOverlay}}
        <EaHeaderSearchOverlay
          @term={{this.term}}
          @results={{this.results}}
          @isSearching={{this.isSearching}}
          @recentSearches={{this.recentSearches}}
          @trending={{this.trending}}
          @onPickRecent={{this.pickRecent}}
          @onClearRecent={{this.clearRecent}}
          @onVisit={{this.visitResult}}
        />
      {{/if}}
    </div>
  </template>
}
