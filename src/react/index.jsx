import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@paloma/core-ui";
// Vite extracts this import to stylesheets/components/ea-paloma-generated.scss. Discourse then
// compiles it with the theme before React mounts, avoiding runtime <style> injection and FOUC.
import "@paloma/core-ui/styles.css";

import Announcements from "./sections/Announcements";
import Breadcrumbs from "./sections/Breadcrumbs";
import Footer from "./sections/Footer";
import HeaderSearch from "./sections/HeaderSearch";
import PopularCommunities from "./sections/PopularCommunities";
import Recommended from "./sections/Recommended";
import SideNav from "./sections/SideNav";
import Trending from "./sections/Trending";
import ApexCategoryHub from "./sections/ApexCategoryHub";

const SECTIONS = {
  announcements: Announcements,
  communities: PopularCommunities,
  recommended: Recommended,
  trending: Trending,
  "apex-category": ApexCategoryHub,
  "header-search": HeaderSearch,
  breadcrumbs: Breadcrumbs,
  footer: Footer,
  "side-nav": SideNav,
};

// Keyed by host element so a re-render never creates a second root for the same node.
const roots = new WeakMap();

export function mountSection(element, name, props = {}) {
  const Section = SECTIONS[name];

  if (!Section) {
    throw new Error(`[ea-react] unknown section "${name}"`);
  }

  let root = roots.get(element);

  if (!root) {
    root = createRoot(element);
    roots.set(element, root);
  }

  // Paloma defaults to light mode; every EA surface in this theme is dark.
  root.render(
    <ThemeProvider mode="dark">
      <Section {...props} />
    </ThemeProvider>
  );
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
