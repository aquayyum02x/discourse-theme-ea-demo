import { apiInitializer } from "discourse/lib/api";
import EaHeader from "../components/ea-header";

export default apiInitializer((api) => {
  // Render the EA header in the before-header-panel outlet on the homepage
  // This is additive — it does not replace Discourse's native header
  api.renderInOutlet("before-header-panel", EaHeader);
});
