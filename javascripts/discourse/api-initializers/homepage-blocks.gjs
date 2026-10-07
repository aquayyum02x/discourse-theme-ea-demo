import { apiInitializer } from "discourse/lib/api";
import BlockAnnouncements from "../blocks/block-announcements";

// ─────────────────────────────────────────────────────────────────────────────
// DEMO: register just the announcements block on the homepage.
//
// api.renderBlocks tells Discourse "put this block into the homepage-blocks
// slot." We register only announcements here to keep the demo focused.
// ─────────────────────────────────────────────────────────────────────────────
export default apiInitializer((api) => {
  api.renderBlocks("homepage-blocks", [
    { block: BlockAnnouncements, id: "ea-announcements" },
  ]);
});
