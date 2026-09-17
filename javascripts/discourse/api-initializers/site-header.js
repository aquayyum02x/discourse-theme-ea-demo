import { apiInitializer } from "discourse/lib/api";
import EaSiteHeader from "../components/ea-site-header";

export default apiInitializer((api) => {
  document.documentElement.classList.add("ea-paloma-header-enabled");
  api.renderInOutlet("above-site-header", EaSiteHeader);
});
