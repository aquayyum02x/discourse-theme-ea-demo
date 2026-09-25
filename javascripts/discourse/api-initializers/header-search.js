import { apiInitializer } from "discourse/lib/api";
import EaHeaderSearch from "../components/ea-header-search";
import { rememberTopic } from "../lib/ea-search-history";

export default apiInitializer((api) => {
  if (!settings.header_search_enabled) {
    return;
  }

  // The EA field replaces the core search affordance rather than sitting
  // alongside it; core's own field is suppressed in ea-header-search.scss.
  api.headerIcons.delete("search");
  api.renderInOutlet("before-header-panel", EaHeaderSearch);

  const router = api.container.lookup("service:router");

  api.onPageChange(() => {
    if (!router.currentRouteName?.startsWith("topic.")) {
      return;
    }

    const topic = api.container.lookup("controller:topic")?.model;

    if (!topic?.id) {
      return;
    }

    rememberTopic({
      id: topic.id,
      title: topic.title,
      url: topic.url || `/t/${topic.slug}/${topic.id}`,
      categoryName: topic.category?.name,
      categoryLogo: topic.category?.uploaded_logo?.url,
      categoryColor: topic.category?.color,
    });
  });
});
