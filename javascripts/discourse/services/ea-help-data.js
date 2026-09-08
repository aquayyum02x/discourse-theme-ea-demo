import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

const API_URL = "https://dummyjson.com/c/afab-800c-4a06-a378";

// Parent-level context: fetched once and shared by every block/component that injects this service.
export default class EaHelpData extends Service {
  @tracked sectionObjects = null;
  @tracked isLoading = false;
  @tracked hasError = false;

  loadPromise;

  load() {
    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.isLoading = true;

    this.loadPromise = fetch(API_URL)
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
