import { apiInitializer } from "discourse/lib/api";
import BlockAnnouncements from "../blocks/block-announcements";
import BlockStatSlider from "../blocks/block-stat-slider";

export default apiInitializer((api) => {
  api.renderBlocks("homepage-blocks", [
    { block: BlockStatSlider, id: "ea-stat-slider" }, // help by games — rendered first (higher up)
    { block: BlockAnnouncements, id: "ea-announcements" }, // rendered after, lower on the page
  ]);
});
