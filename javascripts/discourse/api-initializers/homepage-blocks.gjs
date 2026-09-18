import { apiInitializer } from "discourse/lib/api";
import BlockAnnouncementsReact from "../blocks/react/block-announcements-react";
import BlockCommunitiesReact from "../blocks/react/block-communities-react";
import BlockRecommendedReact from "../blocks/react/block-recommended-react";
import BlockTrendingReact from "../blocks/react/block-trending-react";

// React + Paloma island variant. The native Glimmer blocks remain in blocks/ for comparison.
export default apiInitializer((api) => {
  api.renderBlocks("homepage-blocks", [
    { block: BlockAnnouncementsReact, id: "ea-announcements" },
    { block: BlockCommunitiesReact, id: "ea-communities" },
    { block: BlockRecommendedReact, id: "ea-recommended" },
    { block: BlockTrendingReact, id: "ea-trending" },
  ]);
});
