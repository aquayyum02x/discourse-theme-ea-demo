import { apiInitializer } from "discourse/lib/api";
import EaFooter from "../components/ea-footer";

// `footer` is a DCustomHtml slot, not a plugin outlet; `below-footer` is the real extension point.
export default apiInitializer((api) => {
  api.renderInOutlet("below-footer", EaFooter);
});
