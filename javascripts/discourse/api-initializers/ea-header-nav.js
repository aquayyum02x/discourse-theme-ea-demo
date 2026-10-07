import { apiInitializer } from "discourse/lib/api";
import EaHeaderNav from "../components/ea-header-nav";

export default apiInitializer((api) => {
  if (settings.header_nav_enabled) {
    api.renderInOutlet("before-header-panel", EaHeaderNav);
  }
});
