import { apiInitializer } from "discourse/lib/api";
import {
  mount,
  mountHomepage,
  unmount,
  mountSiteHeader
} from "../react-dist/ea-react-widgets";

export default apiInitializer(() => {
  window.EaReactWidgets = { mount, mountHomepage,mountSiteHeader, unmount };
});
