import { apiInitializer } from "discourse/lib/api";
import EaSideNav from "../components/ea-side-nav";

export default apiInitializer((api) => {
  if (!settings.side_nav_enabled) {
    return;
  }

  const root = document.documentElement;
  root.classList.toggle("ea-side-nav-rail", !!settings.side_nav_icon_rail);
  root.classList.toggle(
    "ea-side-nav-hide-default",
    !!settings.side_nav_hide_default_sections
  );

  // Discourse's addSidebarSection API only accepts link data, so the EA rail is
  // rendered as one island in the sidebar's own outlet instead.
  api.renderInOutlet("after-sidebar-sections", EaSideNav);
});
