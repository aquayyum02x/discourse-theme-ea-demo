import { apiInitializer } from "discourse/lib/api";
import HeaderNav from "../components/header-nav";

// ─────────────────────────────────────────────────────────────────────────────
// DEMO: How a component gets onto the page
//
// An "initializer" runs once when the theme loads. Here we use it to place our
// HeaderNav component into a slot Discourse reserves in the header called
// "before-header-panel". Think of that slot as a labeled shelf in the header —
// we're just setting our component on it.
//
// The settings.header_nav_enabled check means an admin can turn the whole thing
// off from the theme settings without touching any code.
// ─────────────────────────────────────────────────────────────────────────────
export default apiInitializer((api) => {
  if (settings.header_nav_enabled) {
    api.renderInOutlet("before-header-panel", HeaderNav);
  }
});
