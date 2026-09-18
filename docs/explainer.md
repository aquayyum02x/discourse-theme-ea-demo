# EA Discourse theme — explainer

**Audience:** an engineer who does **not** know Ember.js or Discourse.
**Goal:** understand exactly what was changed, why, and how it works — with no prior Ember knowledge assumed.

Read this top to bottom. Sections 1–4 are the mental model. Section 5 onward is the actual change log.

---

## 1. The single most important idea

**This is not an app. It is a theme that gets injected into someone else's app.**

Discourse is a complete, running forum application:

- Backend: Ruby on Rails
- Frontend: Ember.js (its component language is called **Glimmer**)
- It owns: URLs/routing, login, users, topics, categories, permissions, search, the composer, admin, the build pipeline

We do not fork it, do not change it, and do not run our own server. We ship a **theme**: a folder of
JavaScript, CSS, config, and translation files that Discourse loads and mounts into itself at runtime.

```
┌─────────────────────────────────────────────────┐
│  Discourse (Rails + Ember) — we do not own this │
│                                                 │
│   ┌── slot ──┐   ┌── slot ──┐   ┌── slot ──┐    │
│   │ our code │   │ our code │   │ our code │    │
│   └──────────┘   └──────────┘   └──────────┘    │
└─────────────────────────────────────────────────┘
```

The whole job is: **put the right component in the right slot, and style it.**

If you only remember one thing: we are guests in Discourse's house. We hang pictures on the hooks it
provides. We do not knock down walls.

---

## 2. What a "slot" is

Discourse defines named insertion points in its own templates. There are two kinds we use.

### 2a. Plugin outlets

A named placeholder Discourse renders in its own HTML. Example, from Discourse's real source
(`templates/application.gjs`):

```hbs
<PluginOutlet @name="below-footer" />
```

We fill it from our theme:

```js
api.renderInOutlet("below-footer", EaFooter);
```

Now our `EaFooter` component renders at that exact spot, on every page.

**Why this matters:** the alternative — `document.querySelector(".some-class").appendChild(...)` — breaks
the moment Discourse renames a CSS class. Outlets are a published contract. Selectors are not.

### 2b. Block outlets (newer)

Same idea, but designed for stacking several components in a region, in a defined order:

```js
api.renderBlocks("homepage-blocks", [
  { block: BlockAnnouncements, id: "ea-announcements" },
  { block: BlockStatSlider,    id: "ea-stat-slider" },
]);
```

The four block outlets that exist in this Discourse version:

| Outlet | Where it renders |
| --- | --- |
| `homepage-blocks` | The custom homepage only |
| `hero-blocks` | Site-wide, between header and main content |
| `main-outlet-blocks` | Site-wide, inside the main content area |
| `sidebar-blocks` | Inside the sidebar |

We use `homepage-blocks`. Our homepage is four blocks stacked in that outlet.

> **A trap I hit, so you don't:** `<PluginOutlet @name="footer" />` looks like it exists — but the thing
> at that line is actually `<DCustomHtml @name="footer" />`, which is an *admin-editable HTML box*, not an
> outlet. `api.renderInOutlet("footer", …)` silently renders nothing. The real outlets are
> `above-footer` and `below-footer`. **Lesson: always grep Discourse's source to confirm an outlet is a
> `PluginOutlet`, don't trust the name.**

---

## 3. Ember/Glimmer in 10 minutes (for a JS developer)

Our UI files end in `.gjs`. That is "JavaScript with a template inside" — conceptually the same role
JSX plays for React, different syntax.

A complete component:

```js
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class Counter extends Component {
  @tracked count = 0;                 // reactive state

  get doubled() {                     // derived value, recomputed automatically
    return this.count * 2;
  }

  @action                             // method safely usable as an event handler
  increment() {
    this.count++;                     // plain assignment; the UI re-renders
  }

  <template>
    <button {{on "click" this.increment}}>
      {{this.count}} / {{this.doubled}}
    </button>
  </template>
}
```

### Translation table

| Concept | React | Glimmer (what we use) |
| --- | --- | --- |
| Component | `function Foo()` | `class Foo extends Component` + `<template>` |
| Props | `props.title` | `@title` in template, `this.args.title` in JS |
| State | `useState` | `@tracked someField` |
| Derived value | `useMemo` | a plain `get` getter |
| Event handler | `onClick={fn}` | `{{on "click" this.fn}}` |
| Shared/global state | Context provider | an injected **service** (`@service foo`) |
| "on mount" | `useEffect(fn, [])` | `{{didInsert this.fn}}` modifier |
| Conditional | `{cond && <X/>}` | `{{#if cond}}<X/>{{/if}}` |
| List | `.map()` | `{{#each items as \|item\|}}` |

Key mental shift: **there is no dependency array and no `setState`.** You assign to a `@tracked` field and
anything that read it re-renders. Getters recompute on their own.

### Template syntax you will see in our files

```hbs
{{this.someValue}}                        {{! print a value }}
{{@somePropFromParent}}                   {{! print a passed-in prop }}
{{#if this.x}} … {{else}} … {{/if}}       {{! branch }}
{{#each this.list as |item index|}} … {{/each}}
{{on "click" this.handler}}               {{! event listener }}
<MyComponent @foo={{this.bar}} />         {{! pass a prop — note the @ }}
{{icon "check"}}                          {{! call a helper function }}
{{i18n (themePrefix "some.key")}}         {{! nested call: inner runs first }}
```

`(parens)` mean "call this and use its result as an argument" — it is the equivalent of `i18n(themePrefix("some.key"))`.

### Services = shared state

A service is a singleton object you can inject anywhere. This replaces React Context:

```js
@service site;          // Discourse's: categories, site config
@service currentUser;   // the logged-in user, or null
@service store;         // Discourse's data layer (fetches topics etc.)
@service eaHelpData;    // ours
```

Every component that injects `eaHelpData` gets **the same instance**, so a single fetch serves the whole page.

---

## 4. How the theme folder maps to behaviour

```
about.json          → theme metadata, colour schemes, and the list of icons we're allowed to use
settings.yml        → defines admin-editable settings; becomes a global `settings` object in JS
locales/en.yml      → all user-visible text; read via {{i18n (themePrefix "key")}}
common/common.scss  → the single CSS entry point; imports everything else
javascripts/discourse/
  api-initializers/ → startup scripts. This is where we register things into slots.
  blocks/           → components rendered into a *block* outlet
  components/       → reusable components used by the blocks
  services/         → shared data (the Context equivalent)
stylesheets/        → the SCSS, split by area
```

Two rules that trip people up:

1. **`settings.foo` is a magic global.** Anything in `settings.yml` is available as `settings.foo` in any
   theme JS file. No import. The name is the YAML key verbatim.
2. **Every file must be imported to exist.** A new `.scss` file does nothing until it is added to the
   `_index.scss` of its folder. A new component does nothing until an initializer registers it.

---

## 5. What was changed — overview

Two phases.

**Phase A — stabilisation.** Fixed real defects in the existing theme.
**Phase B — build the Figma homepage** (`node 1378:84453`) plus the side nav and footer.

Totals: **13 files modified**, **14 new source files** (8 JavaScript/Glimmer, 6 SCSS), plus `.gitignore`,
`sync-local.sh`, and the planning docs in this folder.

---

## 6. Phase A — the bug fixes, explained

### Bug 1 — the section that could never load its own data

**File:** `javascripts/discourse/blocks/block-stat-slider.gjs`

The original template:

```hbs
{{#if this.filteredStats.length}}                       ← only render if we HAVE data
  <section {{didInsert this.loadHelpData}}>             ← …but the fetch starts on render
```

`{{didInsert}}` is Glimmer's "run this when the element is added to the page" hook — the `useEffect(fn, [])`
equivalent. The problem is circular:

```
no data  →  {{#if}} is false  →  <section> never renders
         →  didInsert never fires  →  fetch never starts  →  still no data  ↺
```

It only appeared to work because a fallback list happened to be non-empty. Empty that list and the
section is dead forever.

**Fix:** the `<section>` now always renders (so the hook always fires) and the *contents* branch instead.
When there is genuinely nothing to show, a `--empty` class hides it with CSS — the element still exists in
the DOM, so `didInsert` still runs.

```hbs
<section class="… {{if this.isHidden '--empty'}}" {{didInsert this.loadHelpData}}>
  {{#if this.hasStats}}   …cards…
  {{else if this.statusKey}}  …loading / error message…
  {{/if}}
</section>
```

**Proof it was real:** with the fallback list emptied, the old code showed 0 cards forever; the new code
loads and renders 20.

### Bug 2 — the hero card was duplicated

**File:** `javascripts/discourse/blocks/block-announcements.gjs`

```js
get cards() {
  return (settings.announcements || []).map(entry => ({ …new object… }));
}
get bigCard()    { return this.cards.find(c => c.isBig); }
get smallCards() { return this.cards.filter(c => c !== this.bigCard); }
```

A getter in Glimmer is a plain JS getter — it **runs again on every access**. So:

- `this.bigCard` calls `this.cards` → builds array **A**, returns `A[0]`
- `this.smallCards` calls `this.cards` again → builds a brand-new array **B**
- `B[0] !== A[0]` — different object identities, even though they represent the same card

So the `!==` filter never excluded anything and the hero card also appeared in the grid.

**Fix:** cache the built array against the settings array it came from.

```js
get cards() {
  const config = settings.announcements || [];
  if (this.cardCache?.source !== config) {
    this.cardCache = { source: config, cards: this.buildCards(config) };
  }
  return this.cardCache.cards;          // stable identity
}
```

This also fixed a second bug for free: the optional "shuffle" ran inside that getter, so the order changed
on every re-render. Now it is computed once.

> **Transferable lesson:** in Glimmer, a getter that allocates new objects is re-run constantly. Never
> compare identity across two getter calls, and never put randomness or side effects in one.

### Bug 3 — debug logging in production code

Two `console.log` calls dumping entire service and settings objects on every render. Removed.

### Bug 4 — a third-party URL hard-coded in source

`services/ea-help-data.js` fetched `https://dummyjson.com/...`. Replaced with an admin setting
`ea_help_data_endpoint`, validated to `https://` only, and defaulting to empty (so nothing is fetched
unless configured). Also added a 10-second timeout via `AbortController`, plus loading/error states.

### Bug 5 — untraceable build artifact

A built `.zip` sat untracked in the repo, so any stray working-tree file could be swept into an upload.
Added `.gitignore`.

---

## 7. Phase B — building the Figma page

The design has four content sections, a left rail, and a footer. Here is how each was built.

### 7a. First: design tokens

**New file:** `stylesheets/brand/tokens.scss`

The Figma file uses EA's "Paloma" design system variables — `Content/Neutral Bold`, `Radius/Large`,
`Spacing/400`, and so on. I translated them into CSS custom properties:

```scss
:root {
  --ea-content-bold:  rgb(255 255 255 / 0.97);   /* Figma: Content/Neutral Bold  #fffffff7 */
  --ea-border-subtle: rgb(255 255 255 / 0.1);    /* Figma: Border/Neutral Subtle #ffffff1a */
  --ea-radius-lg:     16px;                      /* Figma: Radius/Large */
  --ea-space-400:     16px;                      /* Figma: Spacing/400 */
  --ea-container-max: 1440px;                    /* Figma: Grid/Container Max Width */
}
```

**Why bother?** Components now say `color: var(--ea-content-bold)` instead of `color: #f5f5f5`. When
design changes a token, we change one line instead of hunting hex codes across a dozen files.

The same file also defines shared classes reused by every section: `.ea-section` (the 1440px centred
container), `.ea-stat-pills`, `.ea-badge`, `.ea-carousel-nav`.

**One mistake worth knowing about.** I first wrote these using CSS `light-dark()` so they'd adapt to
Discourse's light and dark colour schemes. That was wrong: these sections always sit on EA's dark brand
gradient regardless of scheme, so in light mode I got near-black text on a near-black background. Fixed by
using the dark values unconditionally. *Lesson: match the surface the component actually sits on, not the
theme setting.*

### 7b. Announcements

**File:** `blocks/block-announcements.gjs` (rebuilt)

One large hero card plus a 2×2 grid. Content is admin-authored in `settings.yml`.

Note this pattern, which you'll see repeatedly:

```js
const CardBody = <template> … </template>;      // a template-only component, no class
```

That is a component with markup but no state or logic — the equivalent of a plain function component.
It exists so the linked and non-linked card variants share one body without duplication.

### 7c. Popular Communities (the box-art carousel)

**File:** `blocks/block-stat-slider.gjs`

A horizontally scrolling strip of 236px portrait game tiles. Scrolling uses **native CSS overflow**, not a
JS animation library:

```scss
overflow-x: auto;
scroll-snap-type: x mandatory;   /* cards snap into place */
scrollbar-width: none;           /* hide the scrollbar, arrows do the work */
```

JavaScript only tracks whether we're at the start/end so the arrow buttons can disable:

```js
@action
updateScrollState() {
  this.isAtStart = this.scroller.scrollLeft <= 1;
  this.isAtEnd = this.scroller.scrollLeft + this.scroller.clientWidth
                 >= this.scroller.scrollWidth - 1;
}
```

`this.scroller` is captured by `{{didInsert this.setupScroller}}` — that hook receives the DOM element as
its first argument, which is Glimmer's equivalent of a React ref.

### 7d. Recommended For You

**New file:** `blocks/block-recommended.gjs`

The first section driven by **real Discourse data**. Two things to understand:

**The store** is Discourse's data layer:

```js
@service store;

const list = await this.store.findFiltered("topicList", {
  filter: "latest",
  params: { per_page: 5 },
});
```

**`AsyncContent`** is a Discourse-provided component that handles promise states for you, so you never
write loading booleans:

```hbs
<AsyncContent @asyncData={{this.loadTopics}}>
  <:loading>…spinner text…</:loading>
  <:error>…error message…</:error>
  <:content as |topics|>…the real UI…</:content>
</AsyncContent>
```

`<:loading>` / `<:error>` / `<:content>` are **named blocks** — slots the component fills in depending on
promise state. `as |topics|` is how the resolved value is handed back to your markup.

`@bind` on `loadTopics` guarantees `this` is correct when Discourse calls the function later — the
decorator version of `fn.bind(this)`.

### 7e. Trending Discussions

**New file:** `blocks/block-trending.gjs` — the largest piece.

**Filter chips.** A config array maps each chip to real Discourse query parameters:

```js
const FILTERS = [
  { id: "trending",  filter: "top",    params: { period: "weekly" } },
  { id: "recent",    filter: "latest", params: { order: "created" } },
  { id: "solutions", filter: "latest", params: { solved: "yes" } },
];
```

Clicking a chip sets `@tracked activeFilter`. Because the `AsyncContent` is given
`@context={{this.activeFilter}}`, changing it **automatically re-runs the fetch**. No manual refetch call.

**Card ⇄ Compact.** `@tracked activeView` switches between our card markup and a semantic `<table>`.
The table is real `<table>/<thead>/<th scope="col">` markup so screen readers and sorting behave properly.

**Accessibility.** Chips are `<button aria-pressed="true|false">` rather than styled `<div>`s, so they're
keyboard-operable and announced correctly for free.

Two data bugs surfaced here:

1. `topic.tags` returns **objects**, not strings, so tags rendered as `[object Object]`.
   Fix: `tags: (topic.tags || []).map(tag => tag?.name ?? tag)`.
2. Titles rendered as `Welcome! <img src="emoji.png">` — visible raw HTML. Discourse's `fancyTitle` field
   contains server-sanitised HTML for emoji. Fix: render with `{{htmlSafe topic.title}}`, which is what
   Discourse's own components do. *`htmlSafe` disables escaping, so only ever use it on
   server-sanitised values — never on raw user input.*

### 7f. The two sidebar widgets

**`components/ea-quests.gjs`** — a small carousel. Quests have **no equivalent in Discourse** (no data
model, no API, no owner), so they are authored in theme settings. This is flagged as an open question
rather than invented.

**`components/ea-community-heroes.gjs`** — a leaderboard. The obvious source would be Discourse's
gamification plugin, but that may not be installed on every environment. It instead uses the **core**
endpoint `/directory_items.json`, so it works everywhere:

```js
const data = await ajax("/directory_items.json", {
  data: { period: "monthly", order: "post_count" },
});
```

`ajax` is Discourse's fetch wrapper — it adds CSRF tokens and auth headers automatically. **Use it for
Discourse endpoints; use plain `fetch` only for external URLs.**

### 7g. The side nav (the interesting one)

The design wants a 92px icon rail down the left: nav glyphs, then game tiles, then a round message button.

**Discourse has no outlet for that.** Every sidebar extension point renders *inside* Discourse's own
sidebar component. So there were three options:

| Option | Verdict |
| --- | --- |
| Absolutely position our own rail and shift the page | Rejected — depends on Discourse's layout internals, breaks on upgrade |
| Give up | Rejected — it's core to the design |
| **Re-express the rail as Discourse's sidebar** | **Chosen** |

That last option works because the rail *is* structurally a sidebar: same position, same page region, and
Discourse already handles its mobile drawer behaviour, route awareness, and keyboard support.

**Content** uses the documented API, `api.addSidebarSection`:

```js
api.addSidebarSection((BaseCustomSidebarSection, BaseCustomSidebarSectionLink) => {
  class GameLink extends BaseCustomSidebarSectionLink {
    get name()        { return `ea-game-${this.index}`; }
    get href()        { return …category url…; }
    get title()       { return this.config.title; }  // tooltip + accessible name
    get prefixType()  { return "image"; }            // icon | image | text | emoji | square
    get prefixValue() { return this.config.image; }  // the box art URL
  }
  return class extends BaseCustomSidebarSection {
    get name()  { return "ea-games"; }
    get links() { return settings.side_nav_games.map(…); }
  };
});
```

You implement getters on a base class Discourse hands you; it does the rendering. `prefixType: "image"`
is what lets game box art appear instead of a generic icon.

**Presentation** is CSS narrowing Discourse's sidebar to 92px and hiding the text labels:

```scss
html.ea-side-nav-rail {
  --d-sidebar-width: 92px;

  .sidebar-section-link-content-text {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip-path: inset(50%);     /* visually hidden, still read aloud */
  }
}
```

That `clip-path` pattern is important: `display: none` would **delete the label from the accessibility
tree**, leaving 12 unlabelled icons. This hides it visually while screen readers still announce it, and the
`title` getter above supplies a hover tooltip for sighted users. Verified: 12/12 links keep an accessible name.

The `html.ea-side-nav-rail` class is toggled from JS based on a setting, so the whole rail can be switched
off from admin without a code change:

```js
root.classList.toggle("ea-side-nav-rail", !!settings.side_nav_icon_rail);
```

**A CSS specificity lesson.** Game tiles kept rendering 32×46 instead of square. Discourse's own rule is:

```scss
.sidebar-section-link-prefix.image img {
  aspect-ratio: auto 20 / 20;
  width:  calc(var(--d-sidebar-section-link-prefix-width) - 2px);
  height: calc(var(--d-sidebar-section-link-prefix-width) - 2px);
}
```

Writing a competing `width`/`height` rule lost the specificity fight. The fix was to stop fighting and
**override the variable Discourse's own rule reads**:

```scss
--d-sidebar-section-link-prefix-width: 46px;   /* 46 − 2px border = the 44px design tile */
```

*Transferable lesson: when overriding a third-party stylesheet, look for the custom property it depends on
before escalating selector weight or reaching for `!important`.*

### 7h. The footer

**Files:** `components/ea-footer.gjs`, `api-initializers/footer.js`, `stylesheets/components/ea-footer.scss`

Three link columns, a language pill, social icons, copyright — all admin-editable.

The links setting is deliberately **flat**, not nested:

```yaml
footer_links:
  - { column: "Company", text: "EA App",  url: "…" }
  - { column: "Legal",   text: "Privacy", url: "…" }
```

Nested object schemas in Discourse settings are fiddly and version-sensitive. A flat list is simple for
admins to edit, and the component groups it at render time:

```js
get columns() {
  const grouped = new Map();
  for (const link of settings.footer_links || []) {
    if (!grouped.has(link.column)) grouped.set(link.column, []);
    grouped.get(link.column).push(link);
  }
  return [...grouped.entries()].map(([title, links]) => ({ title, links }));
}
```

This is also where the `footer` vs `below-footer` trap from §2b bit — worth re-reading if you skipped it.

---

## 8. How the pieces connect at runtime

```
Page load
   │
   ├─ Discourse boots (Ember app starts)
   │
   ├─ Our api-initializers run:
   │     homepage-blocks.gjs → registers 4 blocks into the "homepage-blocks" outlet
   │     side-nav.js         → registers 2 sidebar sections + sets html classes
   │     footer.js           → registers EaFooter into the "below-footer" outlet
   │     breadcrumbs.js, category-search.js, … (pre-existing)
   │
   ├─ Discourse renders the homepage and reaches the homepage-blocks outlet
   │     → Announcements        reads settings.announcements          (sync)
   │     → Popular Communities  reads the eaHelpData service          (async fetch)
   │     → Recommended          reads store.findFiltered("topicList") (async)
   │     → Trending             reads store.findFiltered + widgets    (async)
   │
   └─ CSS from common.scss applies to all of it
```

### Where each section's data comes from

| Section | Source | Notes |
| --- | --- | --- |
| Announcements | theme settings | Fully admin-authored |
| Popular Communities | `ea-help-data` service, falls back to settings | External API, endpoint is a setting |
| Recommended For You | Discourse topic list | Real forum data |
| Trending Discussions | Discourse topic list | Filter chips map to query params |
| Community Heroes | `/directory_items.json` | Core endpoint, no plugin needed |
| Quests | theme settings | No Discourse equivalent exists |
| Footer / Side nav | theme settings | Admin-editable |

---

## 9. Running and verifying it yourself

```bash
# 1. start your local Discourse checkout
<discourse-local>/start-local.sh

# 2. after any theme edit, push it into the local instance
./sync-local.sh

# 3. hard-refresh http://localhost:3000
```

`sync-local.sh` is a local-only helper (not committed — it hardcodes machine paths). It imports the
working directory straight into the local Discourse database. There is **no build step** — Discourse
compiles the theme itself. If the import prints an error, your JS or YAML is invalid; that command is
effectively your compiler.

Local demo content (topics, users, categories, images, quests) was seeded with a throwaway Rails script.
That is **local only** and not part of the theme.

### What was verified, and how

Screenshots of a page this tall proved unreliable, so layout was checked by measuring the live DOM:

| Property | Figma | Measured |
| --- | ---: | ---: |
| Section container | 1440 | 1440 |
| Page margin | 24 | 24 |
| Widgets column | 355 | 355 |
| Box-art card | 236 | 236 |
| Sidebar rail | 92 | 92 |
| Game tile | 44 (+2 border) | 46 |

Also confirmed: correct column counts at 1440/1024/393 with no horizontal overflow; filter chips re-query;
Card⇄Compact swaps to a real table; quest carousel advances; 12/12 rail links keep accessible names;
zero console errors; zero broken images.

---

## 10. What was deliberately **not** built

**The header.** The design wants a custom EA header. Doing that means CSS-hiding Discourse's real
header and rendering a replacement — which breaks search, notifications, the user menu, the mobile
hamburger, and all their keyboard and screen-reader behaviour. The recommendation is to *restyle*
Discourse's real header and add EA-specific items through the outlets that exist
(`home-logo`, `before-header-panel`, `header-categories-wrapper`). Needs a design decision on the
residual visual gap.

**React + a shared design system.** The design originates in a React-based component library, and there
was a proposal to embed React inside the theme. Two verified blockers:

1. The design-system package **cannot currently be installed** — the private registry rejects the
   available credentials, so none of the components can even be resolved.
2. The Figma file has **no Code Connect mapping**, so every design-to-component mapping would be manual
   anyway, removing much of the claimed saving.

Everything here is therefore native Glimmer. The full reasoning, decision gates, and the conditions under
which React would be permitted are recorded in the architecture decision record kept with the project
planning documents.

---

## 11. Full file inventory

### New — components and logic

| File | Purpose |
| --- | --- |
| `blocks/block-recommended.gjs` | "Recommended For You" row |
| `blocks/block-trending.gjs` | Trending list, filters, view toggle, widget column |
| `components/ea-quests.gjs` | Quest carousel |
| `components/ea-community-heroes.gjs` | Leaderboard |
| `components/ea-stat-pills.gjs` | Shared likes/replies/views pills |
| `components/ea-footer.gjs` | EA footer |
| `api-initializers/side-nav.js` | Registers the two sidebar sections |
| `api-initializers/footer.js` | Registers the footer into `below-footer` |

### New — styles

| File | Purpose |
| --- | --- |
| `stylesheets/brand/tokens.scss` | Paloma tokens + shared section/badge/pill classes |
| `stylesheets/blocks/block-recommended.scss` | Recommended tiles |
| `stylesheets/blocks/block-trending.scss` | Filters, cards, compact table |
| `stylesheets/components/ea-widgets.scss` | Quests + Community Heroes |
| `stylesheets/components/ea-footer.scss` | Footer |
| `stylesheets/app/side-nav.scss` | 92px icon rail |

### Modified

| File | Change |
| --- | --- |
| `blocks/block-stat-slider.gjs` | Load-trigger fix, logging removed, states added, redesigned as box-art carousel |
| `blocks/block-announcements.gjs` | Identity/shuffle fix, rebuilt to the Figma layout |
| `services/ea-help-data.js` | Configurable HTTPS endpoint, timeout, abort, error state |
| `api-initializers/homepage-blocks.gjs` | Registers all four blocks in design order |
| `about.json` | Added the icons the new UI uses |
| `settings.yml` | Settings for all new sections |
| `locales/en.yml` | All new user-visible strings |
| `stylesheets/**/_index.scss` | Import the new stylesheets |
| `.gitignore` | New — stop committing build artifacts |

---

## 12. The five rules to keep

1. **Render through outlets and documented APIs.** Never `querySelector` into Discourse's DOM.
2. **No user-visible text in components.** It goes in `locales/en.yml`.
3. **No hard-coded content or URLs.** It goes in `settings.yml`.
4. **Style with tokens** (`var(--ea-*)`), not raw hex values.
5. **Hiding something visually is not the same as removing it.** Use the `clip-path` pattern so assistive
   technology still sees labels.

## Where to go deeper

The project planning documents — the Figma-to-Discourse mapping, delivery estimate, architecture decision
record, bundle/deployment validation, and the open-questions register — are held outside this repository
because they reference internal infrastructure. Ask the project lead for access.
