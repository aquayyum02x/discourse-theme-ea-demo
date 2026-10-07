import { apiInitializer } from "discourse/lib/api";
import EaHeader from "../components/ea-header";

// ─────────────────────────────────────────────────────────────────────────────
// DEMO: plug the EA header into Discourse.
//
// We render the component into the "home-logo" outlet — the slot Discourse
// reserves for the brand area at the far left of the header. Discourse's own
// search and login buttons on the right stay untouched and keep working.
// ─────────────────────────────────────────────────────────────────────────────
export default apiInitializer((api) => {
  if (settings.ea_header_enabled) {
    api.renderInOutlet("home-logo", EaHeader);
  }
});
