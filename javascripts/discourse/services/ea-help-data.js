import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

const REQUEST_TIMEOUT_MS = 10000;

// Parent-level context: fetched once and shared by every block/component that injects this service.
export default class EaHelpData extends Service {
  @tracked sectionObjects = null;
  @tracked isLoading = false;
  @tracked hasError = false;

  loadPromise;

  // https only, so an admin typo cannot downgrade the request or point it at another scheme.
  get endpoint() {
    const configured = (settings.ea_help_data_endpoint || "").trim();
    return configured.startsWith("https://") ? configured : null;
  }

  get isConfigured() {
    return Boolean(this.endpoint);
  }

  load() {
    if (this.loadPromise) {
      return this.loadPromise;
    }

    const endpoint = this.endpoint;

    if (!endpoint) {
      this.loadPromise = Promise.resolve();
      return this.loadPromise;
    }

    this.isLoading = true;
    this.hasError = false;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    this.loadPromise = fetch(endpoint, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        this.sectionObjects = json.sectionObjects || [];
      })
      .catch((error) => {
        this.hasError = true;
        // eslint-disable-next-line no-console
        console.error("Failed to load EA Help data", error);
      })
      .finally(() => {
        clearTimeout(timeoutId);
        this.isLoading = false;
      });

    return this.loadPromise;
  }

  sectionByType(type) {
    return this.sectionObjects?.find((section) => section.type === type);
  }

  get helpByGameCards() {
    const games = this.sectionByType("HelpByGame")?.data?.games;

    if (!games?.length) {
      return null;
    }

    return games.map((game) => ({
      title: game.title,
      link: game.pagePath,
      image: game.boxArt?.src,
    }));
  }
}
