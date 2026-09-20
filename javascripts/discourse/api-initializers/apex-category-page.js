import { apiInitializer } from "discourse/lib/api";
import EaApexCategoryPage from "../components/ea-apex-category-page";
import EaApexTopicListHeading from "../components/ea-apex-topic-list-heading";

export default apiInitializer((api) => {
  api.renderInOutlet("above-category-heading", EaApexCategoryPage);
  api.renderInOutlet("before-topic-list", EaApexTopicListHeading);
});
