import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { cancel } from "@ember/runloop";
import { service } from "@ember/service";
import discourseDebounce from "discourse/lib/debounce";
import { bind } from "discourse/lib/decorators";
import {
  isValidSearchTerm,
  searchForTerm,
  updateRecentSearches,
} from "discourse/lib/search";
import DiscourseURL from "discourse/lib/url";
import { i18n } from "discourse-i18n";
import {
  readRecentTerms,
  readRecentTopics,
  rememberTerm,
} from "../lib/ea-search-history";
import EaReactIsland from "./ea-react-island";

const DEBOUNCE_MS = 250;
const HEX = /^[0-9a-f]{6}$/i;

// Glimmer owns everything Discourse-coupled (services, ajax, routing, i18n,
// settings); the React island owns rendering and interaction.
export default class EaHeaderSearch extends Component {
  @service appEvents;
  @service currentUser;
  @service discovery;
  @service router;
  @service siteSettings;
  @service store;

  @tracked term = "";
  @tracked results = null;
  @tracked loading = false;
  @tracked trending = null;
  @tracked recentTerms = [];
  @tracked recentTopics = [];

  constructor() {
    super(...arguments);
    this.router.on("routeDidChange", this.onRouteChange);
    this.appEvents.on("header:keyboard-trigger", this.onKeyboardTrigger);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.router.off("routeDidChange", this.onRouteChange);
    this.appEvents.off("header:keyboard-trigger", this.onKeyboardTrigger);
    cancel(this._debounce);
    this._request?.abort?.();
    this._request = null;
  }

  get category() {
    return this.discovery.category;
  }

  get placeholder() {
    return this.category
      ? i18n(themePrefix("header_search.placeholder_scoped"), {
          category: this.category.name,
        })
      : i18n(themePrefix("header_search.placeholder"));
  }

  get isQuerying() {
    return isValidSearchTerm(this.term.trim(), this.siteSettings);
  }

  get islandProps() {
    return {
      placeholder: this.placeholder,
      loading: this.loading,
      isQuerying: this.isQuerying,
      sections: this.sections,
      labels: {
        open: i18n(themePrefix("header_search.open")),
        close: i18n(themePrefix("header_search.close")),
        suggestions: i18n(themePrefix("header_search.suggestions")),
        loading: i18n(themePrefix("header_search.loading")),
      },
      onOpen: this.onOpen,
      onQueryChange: this.onQueryChange,
      onNavigate: this.onNavigate,
      onSubmitQuery: this.runFullSearch,
    };
  }

  get sections() {
    if (this.isQuerying) {
      return [
        {
          id: "results",
          heading: i18n(themePrefix("header_search.results")),
          rows: this.resultRows,
        },
      ];
    }

    return [
      {
        id: "recent",
        heading: i18n(themePrefix("header_search.recent")),
        rows: this.recentRows,
      },
      {
        id: "trending",
        heading: i18n(themePrefix("header_search.trending")),
        rows: this.trendingRows,
      },
    ].filter((section) => section.rows.length);
  }

  get recentRows() {
    const max = settings.header_search_recent_max;
    const topics = this.recentTopics.slice(0, Math.max(0, max - 2));

    return [
      ...this.recentTerms.slice(0, max - topics.length).map((term) => ({
        kind: "query",
        query: term,
        title: term,
        icon: "recent",
        href: this.searchUrl(term),
      })),
      ...topics.map((topic) => ({
        kind: "topic",
        title: topic.title,
        subtitle: topic.categoryName,
        href: topic.url,
        badgeUrl: topic.categoryLogo,
        badgeInitial: topic.categoryLogo
          ? null
          : (topic.categoryName || "#").charAt(0).toUpperCase(),
        badgeColor: topic.categoryColor,
      })),
    ];
  }

  get trendingRows() {
    // The design marks trending rows with a trend glyph rather than game art.
    return (this.trending || []).map((topic) => ({
      ...topic,
      badgeUrl: null,
      badgeInitial: null,
      badgeColor: null,
      icon: "trending",
    }));
  }

  get resultRows() {
    const rows = this.results || [];
    const term = this.term.trim();

    if (this.loading && !rows.length) {
      return [];
    }

    return [
      ...rows,
      {
        kind: "query",
        query: term,
        title: i18n(themePrefix("header_search.see_all"), { term }),
        icon: "search",
        href: this.searchUrl(term),
      },
    ];
  }

  searchUrl(term) {
    return `/search?q=${encodeURIComponent(this.scopedQuery(term))}`;
  }

  scopedQuery(term) {
    return this.category
      ? `${term} #${this.category.slug}`.trim()
      : String(term).trim();
  }

  topicRow(topic) {
    const category = topic.category;

    return {
      kind: "topic",
      title: topic.title,
      subtitle: category?.name,
      href: topic.url || `/t/${topic.slug}/${topic.id}`,
      badgeUrl: category?.uploaded_logo?.url,
      badgeInitial: category?.uploaded_logo?.url
        ? null
        : (category?.name || "#").charAt(0).toUpperCase(),
      badgeColor: HEX.test(category?.color || "") ? category.color : null,
    };
  }

  @bind
  onRouteChange() {
    this.term = "";
    this.results = null;
  }

  @bind
  onKeyboardTrigger(appEvent) {
    if (appEvent?.type !== "search") {
      return;
    }

    appEvent.event?.preventDefault();
    document.getElementById("ea-header-search-input")?.focus();
  }

  @action
  onOpen() {
    this.recentTerms = this.currentUser?.recent_searches || readRecentTerms();
    this.recentTopics = readRecentTopics();
    this.loadTrending();
  }

  @action
  onQueryChange(term) {
    this.term = term;
    cancel(this._debounce);
    this._debounce = discourseDebounce(this, this.runSearch, DEBOUNCE_MS);
  }

  @action
  onNavigate(href) {
    DiscourseURL.routeTo(href);
  }

  @action
  runFullSearch(term) {
    const clean = String(term || "").trim();

    if (!clean) {
      return;
    }

    if (this.currentUser) {
      updateRecentSearches(this.currentUser, clean);
    } else {
      rememberTerm(clean);
    }

    DiscourseURL.routeTo(this.searchUrl(clean));
  }

  @bind
  async runSearch() {
    const term = this.term.trim();

    this._request?.abort?.();
    this._request = null;

    if (!isValidSearchTerm(term, this.siteSettings)) {
      this.results = null;
      this.loading = false;
      return;
    }

    this.loading = true;

    const request = searchForTerm(term, {
      typeFilter: "topic",
      searchContext: this.category
        ? { type: "category", id: this.category.id, name: this.category.slug }
        : undefined,
    });

    this._request = request;

    try {
      const response = await request;

      if (this._request !== request) {
        return;
      }

      this.results = (response?.topics || [])
        .slice(0, settings.header_search_results_max)
        .map((topic) => this.topicRow(topic));
    } catch {
      if (this._request !== request) {
        return;
      }

      this.results = [];
    } finally {
      if (this._request === request) {
        this.loading = false;
      }
    }
  }

  async loadTrending() {
    if (this.trending || this._trendingRequest) {
      return;
    }

    const category = this.category;
    const filter = category?.path ? `${category.path.slice(1)}/l/top` : "top";

    this._trendingRequest = this.store.findFiltered("topicList", {
      filter,
      params: {
        period: "weekly",
        per_page: settings.header_search_trending_max,
      },
    });

    try {
      const list = await this._trendingRequest;

      this.trending = (list?.topics || [])
        .slice(0, settings.header_search_trending_max)
        .map((topic) => this.topicRow(topic));
    } catch {
      this.trending = [];
    } finally {
      this._trendingRequest = null;
    }
  }

  <template>
    <EaReactIsland @section="header-search" @props={{this.islandProps}} />
  </template>
}
