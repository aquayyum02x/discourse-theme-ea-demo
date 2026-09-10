import React from "react";
import { createRoot } from "react-dom/client";
import "@paloma/core-ui/styles.css";
import AnnouncementGrid from "./components/announcement-grid";

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

export function mountAnnouncements(element, props = {}) {
  mount(element, AnnouncementGrid, props);
}
