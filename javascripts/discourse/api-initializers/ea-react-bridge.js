import { apiInitializer } from "discourse/lib/api";
import {
  mount,
  mountAnnouncements,
  unmount,
} from "../react-dist/ea-react-widgets";

export default apiInitializer(() => {
  window.EaReactWidgets = { mount, mountAnnouncements, unmount };
});
