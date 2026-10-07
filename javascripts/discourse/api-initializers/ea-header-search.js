import { apiInitializer } from "discourse/lib/api";
import EaHeaderSearch from "../components/ea-header-search";

export default apiInitializer((api) => {
  if (!settings.header_search_enabled) {
    return;
  }

  // Lets the stylesheet hide the native icon-button search on desktop without
  // affecting sites that disable the EA search bar.
  document.documentElement.classList.add("ea-header-search-enabled");

  api.renderInOutlet("before-header-panel", EaHeaderSearch);
});
