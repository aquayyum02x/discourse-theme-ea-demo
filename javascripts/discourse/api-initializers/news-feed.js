import { apiInitializer } from "discourse/lib/api";
import EaNewsFeed from "../components/ea-news-feed";

export default apiInitializer((api) => {
  api.renderInOutlet("below-site-header", EaNewsFeed);
});
