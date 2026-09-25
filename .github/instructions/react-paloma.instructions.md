---
description: "Rules for React sections and the installed Paloma component packages, including state, accessibility, navigation, and known runtime constraints."
applyTo: "src/react/**"
---

# React + Paloma islands

## Confirm the installed API

Use the installed package as the source of truth. Before choosing a component, inspect its exports,
types, implementation, and existing usage:

```bash
ls node_modules/@paloma/core-ui/dist/components
ls node_modules/@paloma/icons/dist/components
rg "ComponentName" node_modules/@paloma/core-ui/dist src/react
```

Prefer a Paloma component when it meets the design and accessibility requirements. Use semantic
HTML plus theme SCSS when Paloma has no suitable primitive or its runtime constraint conflicts with
the design. Document that decision in the handoff.

Do not assume component or icon names. Do not work around a missing component with an unrelated
Paloma component simply to increase reuse.

## Current verified constraints

Re-check these after any Paloma upgrade:

| Component | Installed-package behavior |
|---|---|
| `ListItem` | `title` must be a plain string because it becomes the accessible label |
| `ListItem`, `Tile`, `QuickLink` | `onClick` receives a react-aria `PressEvent`, not a DOM event |
| `SegmentedControl` | Requires `SegmentedControlOptionList` as its first child |
| `Carousel` | Accepts only 2–5 items; it is unsuitable for a 7+ item game strip |
| `Breadcrumb` | Supports 2–8 items and changes its mobile presentation |
| `Text` | Does not establish a text color by itself |

Known icon mappings include `LikeIcon`, `DashboardGridIcon`, `UserIcon`, `TrendUpIcon`, and
`SearchRecentIcon`/`ClockIcon`. Confirm exports rather than relying on this list.

## State ownership

- Keep local interaction state in React: open/closed state, active index, input text, temporary
  selection, and focus management.
- Receive server-derived data and session-derived capabilities through props.
- Notify the Glimmer host through callbacks for navigation, searches, filters that trigger server
  loads, and mutations.
- Do not duplicate Discourse user/session state in React Context, Redux, Zustand, or browser
  storage.
- Do not fetch protected server data directly from React when a Discourse service or host adapter
  already exists.

Use `useMemo` only for meaningful derived work. Use stable keys from Discourse IDs. All hooks must
run before conditional returns.

## Navigation and links

Render real links when the destination is a link. Because react-aria `PressEvent` cannot cancel a
DOM anchor navigation, intercept internal navigation at a DOM wrapper only when needed. Preserve
modifier-click and middle-click behavior, then call the host's `onNavigate` callback.

Never use an index as a trusted URL lookup without bounds checking. Treat URLs from settings,
storage, and external responses as untrusted.

## Accessibility

- Use semantic headings, lists, buttons, links, labels, and landmarks.
- Give icon-only controls an accessible name.
- Ensure list-item titles resolve to strings; check for `[object Object]` in the accessibility tree.
- Support keyboard open/close, movement, selection, Escape, and focus return where applicable.
- Do not rely on color alone for state.
- Keep visible focus styles and respect reduced motion.
- Announce loading and error states when the interaction requires it.

## Loading, empty, and failure behavior

Every data-backed section must define:

1. initial/loading state;
2. empty state;
3. recoverable error state;
4. stale or superseded request behavior;
5. what remains usable if the React asset fails to load.

Do not let a failed optional island break Discourse navigation or the rest of the page.

## Theming

The shared `ThemeProvider mode="dark"` lives in `src/react/index.jsx`. Do not add a provider to an
individual section. Paloma supplies component styling; theme SCSS owns the layout and EA-specific
composition.

The direct child of `.ea-react-island` is currently removed from layout with `display: contents`.
If an island collapses or fails to participate in its parent flex/grid layout, inspect that wrapper
before adding width hacks.

## Dependency discipline

Do not add a package until the existing browser, Discourse, React, and Paloma APIs have been
checked. Explain why it is needed and report its raw/gzip bundle cost. Paloma packages should use
one compatible, reproducible version policy; do not independently upgrade only one Paloma package.
