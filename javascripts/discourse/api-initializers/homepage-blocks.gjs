import { apiInitializer } from "discourse/lib/api";
import BlockAnnouncements from "../blocks/block-announcements";
import BlockRecommended from "../blocks/block-recommended";
import BlockStatSlider from "../blocks/block-stat-slider";
import BlockTrending from "../blocks/block-trending";

export default apiInitializer((api) => {
  api.renderBlocks("homepage-blocks", [
    { block: BlockAnnouncements, id: "ea-announcements" },
    { block: BlockStatSlider, id: "ea-stat-slider" },
    { block: BlockRecommended, id: "ea-recommended" },
    { block: BlockTrending, id: "ea-trending" },
  ]);
});
