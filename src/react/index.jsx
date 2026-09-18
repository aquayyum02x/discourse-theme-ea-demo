import { createRoot } from "react-dom/client";
// Discourse's theme_authorized_extensions does not include "css", so Paloma's stylesheet cannot
// ship as a theme asset. It is inlined into this bundle and injected on first mount instead.
import palomaCss from "@paloma/core-ui/styles.css?inline";

import Announcements from "./sections/Announcements";
import PopularCommunities from "./sections/PopularCommunities";
import Recommended from "./sections/Recommended";
import Trending from "./sections/Trending";

const STYLE_ID = "ea-paloma-styles";

function injectStyles() {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = palomaCss;
  document.head.appendChild(style);
}

const SECTIONS = {
  announcements: Announcements,
  communities: PopularCommunities,
  recommended: Recommended,
  trending: Trending,
};

// Keyed by host element so a re-render never creates a second root for the same node.
const roots = new WeakMap();

export function mountSection(element, name, props = {}) {
  const Section = SECTIONS[name];

  if (!Section) {
    throw new Error(`[ea-react] unknown section "${name}"`);
  }

  injectStyles();

  let root = roots.get(element);

  if (!root) {
    root = createRoot(element);
    roots.set(element, root);
  }

  root.render(<Section {...props} />);
  return root;
}

export function unmountSection(element) {
  const root = roots.get(element);

  if (root) {
    root.unmount();
    roots.delete(element);
  }
}

export const sectionNames = Object.keys(SECTIONS);
