import React from "react";
import { createRoot } from "react-dom/client";
import palomaStyles from "@paloma/core-ui/styles.css?inline";
import HomepageLayout from "./components/homepage-layout";
import SiteHeader from "./components/site-header"

if (typeof document !== "undefined" && !document.querySelector("[data-ea-paloma-styles]")) {
  const style = document.createElement("style");
  style.dataset.eaPalomaStyles = "true";
  style.textContent = palomaStyles;
  document.head.appendChild(style);
}

const roots = new WeakMap();

export function mount(element, Component, props = {}) {
  if (!element || !Component) {
    return;
  }

  let root = roots.get(element);

  if (!root) {
    root = createRoot(element);
    roots.set(element, root);
  }

  root.render(React.createElement(Component, props));
}

export function unmount(element) {
  const root = roots.get(element);

  if (!root) {
    return;
  }

  root.unmount();
  roots.delete(element);
}

// Each feature loads its own chunk on demand instead of bloating the shared entry bundle.
export async function mountHomepage(element, props = {}) {
  mount(element, HomepageLayout, props);
}

export async function mountSiteHeader(element, props = {}) {
  mount(element, SiteHeader, props);
}
