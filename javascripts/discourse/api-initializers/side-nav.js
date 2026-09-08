import { apiInitializer } from "discourse/lib/api";
import EaSideNav from "../components/ea-side-nav";

export default apiInitializer((api) => {
  if (!settings.side_nav_enabled) {
    return;
  }

  document.documentElement.classList.add("ea-has-side-nav");
  api.renderInOutlet("before-header-panel", EaSideNav);
});
