import { apiInitializer } from "discourse/lib/api";
import BlockHomepageLayout from "../blocks/block-homepage-layout";

export default apiInitializer((api) => {
  api.renderBlocks("homepage-blocks", [
    { block: BlockHomepageLayout, id: "ea-homepage-layout" },
  ]);
});
