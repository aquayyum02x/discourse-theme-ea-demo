import { apiInitializer } from "discourse/lib/api";
import EaNotifications from "../components/ea-notifications";

export default apiInitializer((api) => {
  if (!settings.notifications_panel_enabled) {
    return;
  }

  api.renderInOutlet("after-header-panel", EaNotifications);
});
