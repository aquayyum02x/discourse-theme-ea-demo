# Change review checklist

Use the applicable checks. Mark non-applicable items explicitly rather than ignoring them.

## Scope and architecture

- [ ] The diff implements the stated acceptance criteria without unrelated changes.
- [ ] Native Discourse behavior is reused where it already satisfies the requirement.
- [ ] The chosen outlet/API exists in the installed Discourse version.
- [ ] Glimmer owns Discourse services, server data adaptation, routing callbacks, and teardown.
- [ ] React receives only plain data and callbacks and owns only local interaction state.
- [ ] A backend/plugin requirement has not been hidden in browser code.

## Data, session, and security

- [ ] Server authorization remains authoritative.
- [ ] Logged-out and role-specific behavior is defined.
- [ ] Async work handles loading, empty, error, cancellation, and stale responses.
- [ ] URLs and browser-storage values are validated before use.
- [ ] No key, token, cookie, `.npmrc`, private export, or internal incident detail enters the diff.
- [ ] External protected APIs are called through an approved same-origin backend/BFF.

## React, Paloma, and accessibility

- [ ] The installed Paloma implementation was checked, not guessed from a component name.
- [ ] Custom HTML is justified where Paloma cannot satisfy the design.
- [ ] Hooks are unconditional and list keys are stable.
- [ ] Links preserve modifier-click and internal navigation uses the Discourse router callback.
- [ ] Controls have semantic roles, accessible names, visible focus, and keyboard behavior.
- [ ] Loading/error changes are announced when necessary.
- [ ] No accessible name resolves to `[object Object]`.

## Glimmer lifecycle

- [ ] Props are fresh when tracked changes must re-render React.
- [ ] Event subscriptions are paired with unsubscriptions using the same handler reference.
- [ ] Timers, debounces, and pending requests are cancelled or ignored during teardown.
- [ ] Repeated route transitions do not accumulate roots, handlers, or DOM nodes.

## Styles and responsive behavior

- [ ] Authored SCSS is registered in the correct `_index.scss`.
- [ ] Generated Paloma SCSS was rebuilt and not manually edited.
- [ ] Core overrides are narrowly scoped and do not rely on `!important` without an approved reason.
- [ ] Global changes were checked in Admin, composer, modal, sidebar/drawer, topic, and category UI.
- [ ] Desktop, tablet, mobile, breakpoint edges, zoom, and horizontal overflow were checked.
- [ ] Async content reserves appropriate space without clipping translated/wrapped content.

## Build, performance, and evidence

- [ ] `npm run build:react` succeeds.
- [ ] Only checks that exist and were run are reported as passed.
- [ ] The theme imports/syncs successfully into the test Discourse instance.
- [ ] Browser console/page errors and network failures were checked.
- [ ] Raw/gzip JS and CSS before/after are reported.
- [ ] Figma parity claims include measured values, not only screenshots.
- [ ] Source and committed generated artifacts match.

## Handoff

- [ ] Changed behavior, routes, files, data source, and architecture boundary are stated.
- [ ] Commands and manual checks are listed with results.
- [ ] Assumptions, unavailable validation, and remaining risks are explicit.
- [ ] Deployment is left to the authorized workflow unless this task explicitly includes it.
