# Demo: EA Header + Announcements in plain Ember/Glimmer

> **Purpose of this branch:** show leadership that we can build EA Forums UI
> using Discourse's **native** tooling (Ember + Glimmer) — no React, no extra
> build pipeline. Two small, readable features: a header navigation and the
> announcements section.

## What's in the demo (3 files of real code)

| Feature | Component | Placed by | Styles |
|---|---|---|---|
| **Header nav** ("EA Help", "Browse by Topic") | [header-nav.gjs](../javascripts/discourse/components/header-nav.gjs) | [api-initializers/header-nav.js](../javascripts/discourse/api-initializers/header-nav.js) | [demo-header-nav.scss](../stylesheets/components/demo-header-nav.scss) |
| **Announcements** (hero + grid of cards) | [blocks/block-announcements.gjs](../javascripts/discourse/blocks/block-announcements.gjs) | [api-initializers/homepage-blocks.gjs](../javascripts/discourse/api-initializers/homepage-blocks.gjs) | [block-announcements.scss](../stylesheets/blocks/block-announcements.scss) |

## The three ideas to take away

1. **A component is just HTML + a little JS.** Open
   [header-nav.gjs](../javascripts/discourse/components/header-nav.gjs) — the
   `<template>` is the HTML, and the small class above it feeds it values from
   theme settings. That's the whole framework.

2. **Discourse gives us labeled slots to attach things.** The header nav goes
   into a slot called `before-header-panel`; the announcements go into the
   `homepage-blocks` slot. We never rewrite Discourse's own screens — we add to
   them. That keeps upgrades safe.

3. **Admins control content without code.** The nav labels/URLs and every
   announcement card are edited in **Admin → Customize → Themes → Settings**
   (see [settings.yml](../settings.yml)). Changing text or links needs no deploy.

## See it running

From this branch, with the local Discourse running:

```bash
bash sync-local.sh   # imports this theme into local Discourse
# then open http://localhost:3000 and hard-reload (Cmd+Shift+R)
```

You'll see the two nav pills in the header and the announcements grid on the
homepage.

## Why this matters

- **Same result, less machinery.** Everything here runs inside Discourse's
  normal theme system — no separate frontend build to maintain.
- **Easy to hire for.** Ember/Glimmer components are plain HTML + JS; the
  learning curve is a day, not a migration.
- **Safe to ship.** Each feature is gated by a settings toggle, so anything can
  be switched off without a code change.
