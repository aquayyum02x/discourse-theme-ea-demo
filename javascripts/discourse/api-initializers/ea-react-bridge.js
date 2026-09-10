import { apiInitializer } from "discourse/lib/api";
import {
  mount,
  mountHomepage,
  unmount,
} from "../react-dist/ea-react-widgets";

export default apiInitializer(() => {
  window.EaReactWidgets = { mount, mountHomepage, unmount };
});
