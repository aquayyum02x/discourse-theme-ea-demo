import { apiInitializer } from "discourse/lib/api";
import BlockStatSlider from "../blocks/block-stat-slider";

export default apiInitializer((api) => {
  api.renderBlocks("homepage-blocks", [
    { block: BlockStatSlider, id: "ea-stat-slider" },
  ]);
});
