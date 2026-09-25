# EA Forums Discourse theme — repository instructions

## Read this first

This repository is a Discourse **theme** with React + Paloma islands. Discourse remains the
application platform: it owns routes, sessions, permissions, categories, topics, posts, search,
moderation, and the Ember/Glimmer lifecycle.

The current product decision is to implement EA-owned custom surfaces as React + Paloma islands.
Glimmer components host those islands and adapt Discourse data and services. Existing native
Discourse UI and legacy comparison components are not a reason to rewrite core UI in React.

Before editing, read:

1. This file.
2. The matching file under `.github/instructions/`.
3. `.github/DEVELOPMENT-WORKFLOW.md`.
4. The relevant source, route, outlet, settings, and locale entries.

The requester may provide only a Jira ticket key/link or a Figma URL. In that case, use
`.github/prompts/develop-from-jira-or-figma.prompt.md` as the intake procedure. Retrieve the source
material, inspect linked artifacts, and derive the task contract yourself. Do not require the
requester to rewrite the ticket into a second template.

Never assume an instruction is true merely because it is written here. If code, the installed
Discourse version, or the installed Paloma package contradicts it, report the evidence and update
the instruction in the same change.

## Layer ownership

| Layer | Responsibility |
|---|---|
| Discourse | Routes, authentication/session, authorization, persistence, core models and APIs |
| API initializer/Glimmer host | Outlet registration, Discourse services, data loading, i18n, settings, route adaptation, cleanup |
| `EaReactIsland` | Lazy-load boundary, one React root per host element, render/update/unmount |
| React section | Presentation and local interaction state, keyboard and focus behavior |
| Paloma | Reusable design-system components and tokens where the installed package supports the design |
| Theme SCSS | Page composition, responsive layout, EA surfaces, and narrowly scoped core overrides |

Props crossing from Glimmer to React must be plain data and callbacks. Do not pass Ember models,
services, controllers, tracked objects, or promises into React.

React may own short-lived UI state such as an open menu, active item, or input value. Discourse
owns server state and session state. Glimmer hosts translate between the two.

## Choose the right extension

- Use native Discourse configuration for categories, tags, navigation, permissions, and enabled
  core/plugin features.
- Use this theme for presentation and client-side integration through supported theme APIs.
- Use a server plugin only for server-side behavior, protected credentials, new endpoints,
  persistence, or model changes. Do not add plugin code to this theme repository.
- Put protected third-party API calls behind an approved same-origin backend/BFF. Never ship
  service credentials in the theme.

## Island contract

`src/react/index.jsx` owns the section registry and the single Paloma `ThemeProvider`. Do not add
providers per section. The current implementation uses Paloma dark mode for EA islands; if a
design needs another mode, treat that as an architecture change and verify every affected island.

Each new island normally needs:

1. `src/react/sections/<Name>.jsx`
2. An entry in `SECTIONS` in `src/react/index.jsx`
3. `javascripts/discourse/components/ea-<name>.gjs`
4. An API initializer or homepage block that mounts the host at a verified extension point
5. `stylesheets/components/ea-<name>.scss` and an import in the matching `_index.scss`
6. Settings in `settings.yml`, locale strings in `locales/en.yml`, and icons in `about.json`

Do not invent an outlet. Confirm it in the installed Discourse source or an existing working
initializer. Do not replace a native Discourse page when an outlet or supported API is sufficient.

## Build artifacts and local loop

`src/react/**` is source. Vite generates both:

- `assets/ea-react-island.js`
- `stylesheets/components/ea-paloma-generated.scss`

Both are required theme files and are committed. Never edit either generated file by hand.

Use the repository scripts:

```bash
npm ci
npm run build:react
```

For continuous local work, run these in separate terminals:

```bash
npm run build:react -- --watch
npm run watch
```

`npm run watch` requires the `discourse_theme` Ruby gem and a locally configured Discourse API
key. `sync-local.sh` is a machine-specific helper and is not the portable or CI workflow.

After any React change, rebuild before evaluating the browser. A stale generated bundle means the
running theme does not represent the source.

## Required validation

The repository currently has a React build, but no committed lint, unit-test, or browser-test
scripts. Do not claim those checks passed until the scripts exist. At minimum:

1. Run `npm run build:react`.
2. Import or sync the theme into the target local Discourse instance.
3. Check every affected route, plus `/`, `/latest`, one category, one topic, and `/admin` when
   global chrome changed.
4. Test logged-out and logged-in behavior when session state matters.
5. Check browser console errors, page errors, keyboard access, focus, and horizontal overflow.
6. Verify mount, update, route transition, and unmount. Confirm no duplicate React roots or event
   listeners remain.
7. Record raw and gzip sizes for the generated JavaScript and Paloma stylesheet, including the
   change from the previous baseline.

Screenshots support review but do not prove geometry, behavior, or accessibility. Compare computed
styles and bounding boxes with the design values when exact Figma parity is requested.

## Security and repository hygiene

- Never commit `.npmrc`, API keys, cookies, tokens, exported production data, `.jira-token`, or
  `.confluence-token`.
- Never print credential contents in logs or summaries.
- Treat browser storage as untrusted input. Validate values before using them in `href`, `src`,
  HTML, selectors, or API parameters.
- Preserve modifier-click/new-tab behavior and use Discourse SPA navigation for normal internal
  navigation.
- Do not modify or discard unrelated working-tree changes.
- `docs/` is mostly ignored because it can contain internal planning details. Do not force-add it
  to the public remote.

## Size and performance

The JS bundle is stored under `assets/` and declared in `about.json`, so Discourse stores it as an
Upload rather than a theme field. This avoids the theme-field character limit; it does not make a
large bundle free to download, parse, or execute.

Keep the single-file output unless a tested asset-URL strategy is approved. For every dependency
or significant component addition, measure the generated JS and CSS delta. Do not use the 8 MB
upload capacity as a performance budget.

## Completion report

Every agent handoff must state:

- behavior delivered and affected routes;
- files changed and architecture boundary used;
- data source and loading/error/empty behavior;
- Paloma components used and justified custom elements;
- commands actually run and their results;
- measured bundle delta and relevant UI measurements;
- remaining risks, assumptions, and work not verified.
