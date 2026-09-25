---
description: "Rules for Discourse API initializers, Glimmer island hosts, theme libraries, data loading, routing, session access, and teardown."
applyTo: "javascripts/**"
---

# Discourse integration and Glimmer hosts

## Host responsibility

A React-island host should contain the Discourse-specific work:

- inject services such as `router`, `store`, `currentUser`, `siteSettings`, or `appEvents`;
- load data through supported Discourse APIs;
- translate models into plain view data;
- translate React callbacks into Discourse navigation or actions;
- resolve theme settings and localized strings;
- cancel requests and remove listeners during teardown.

Keep presentation markup in React for EA custom surfaces. A Glimmer host may render a small
loading/error fallback needed before or when the bundle loads.

## Verify routes, outlets, and APIs

Do not copy outlet names from planning documents. Confirm the outlet in the installed Discourse
version or reuse an outlet already proven by this branch. Current working examples include:

| Outlet/API | Current use |
|---|---|
| `homepage-blocks` through `api.renderBlocks` | Custom homepage sections |
| `before-header-panel` | Header search and breadcrumbs |
| `after-sidebar-sections` | EA side navigation |
| `below-footer` | Footer |
| `below-site-header` | News feed |
| `above-category-heading`, `category-heading`, `before-topic-list` | Category customization |

`footer` in core may be a custom HTML slot rather than a plugin outlet. `api.addSidebarSection`
accepts link data and does not provide arbitrary React markup.

Search the installed Discourse source with `rg` before relying on an unfamiliar API or outlet.
Record the Discourse commit/version when the integration depends on an experimental API.

## Strict-mode naming trap

In `.gjs`, an in-scope binding can shadow a lowercase HTML tag. Avoid block parameter names such
as `section`, `form`, `button`, `label`, `header`, `footer`, `nav`, `main`, or `table`.

```hbs
{{#each this.sections as |group|}}
  <section>...</section>
{{/each}}
```

Shadowing produces a misleading dynamic-component error.

## Data and session rules

- Use `currentUser` for the authenticated user. Do not create a second client session store.
- Use Discourse models/services for categories, topics, users, and permissions.
- Never infer authorization from hidden UI; the server must enforce access.
- Convert model values into new plain arrays/objects before passing them to React.
- Do not expose API keys, CSRF tokens, cookies, or protected service responses in props.
- Use the browser/theme only for public external APIs. Protected or transformed integrations
  require an approved server plugin or BFF.

Example topic-list loading:

```js
this.store.findFiltered("topicList", {
  filter: "top",
  params: { period: "weekly" },
});
```

For category-scoped filters, derive the path from the category model and verify the request in the
browser network panel. Do not concatenate an unvalidated user-provided path.

## Props and updates

`EaReactIsland` updates when the `@props` identity changes. Return a fresh props object from a
getter when tracked values should cause React to re-render.

Callbacks should express intent, such as `onNavigate`, `onFilterChange`, or `onSubmit`, rather than
exposing a service. Keep high-frequency display state in React and send only meaningful changes
back across the boundary.

## Navigation

Use `DiscourseURL.routeTo(path)` for ordinary internal navigation. Preserve native browser
behavior for modifier-click, middle-click, downloads, and external links. Validate stored or
remote URLs before using them.

## Async work and teardown

Every registration must have a matching cleanup. Cancel debounces and requests, unsubscribe event
handlers with the same function reference, and prevent an older response from overwriting a newer
one.

```js
willDestroy() {
  this.router.off("routeDidChange", this.onRouteChange);
  this.appEvents.off("header:keyboard-trigger", this.onKeyboardTrigger);
  cancel(this._debounce);
  this._request?.abort?.();
  super.willDestroy(...arguments);
}
```

When using `on`/`off`, bind the handler with the Discourse `@bind` decorator or otherwise preserve
its reference. Verify cleanup by navigating away and back repeatedly.

## Settings, locales, and icons

- Put tunable behavior/content in `settings.yml` only when an administrator should control it.
- Put every user-facing string in `locales/en.yml` and resolve it with `themePrefix`.
- Add new Discourse `d-icon` names to `modifiers.svg_icons` in `about.json`.
- Give settings safe defaults and validate object-setting fields before consuming them.

Before completion, confirm every referenced setting and locale key exists. A missing theme setting
can prevent an initializer from loading and can break global routes, including Admin.
