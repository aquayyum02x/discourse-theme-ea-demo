import { apiInitializer } from "discourse/lib/api";

// Keep the EA side-nav rail permanently docked on DESKTOP. Discourse collapses
// the sidebar by dropping the `has-sidebar-page` body class, which flips
// #main-outlet-wrapper back to a single column; we re-assert the class on every
// route so the rail never collapses. The hamburger toggle is hidden on desktop
// in CSS (see stylesheets/app/side-nav.scss). On mobile the sidebar is a drawer
// and the menu button stays, so we leave those routes untouched.
export default apiInitializer((api) => {
  if (!settings.side_nav_permanent) {
    return;
  }

  api.onPageChange(() => {
    // site.mobileView is the reactive source of truth; never force the grid on
    // mobile, where the sidebar is an overlay drawer, not a column.
    if (settings.side_nav_enabled && !api.container.lookup("service:site")?.mobileView) {
      document.body.classList.add("has-sidebar-page");
    }
  });
});
