# Paloma CSS delivery for the React homepage

## Purpose

The React homepage loads its JavaScript from a Discourse theme asset, but Discourse does not permit
standalone `.css` files as theme upload assets. The initial proof of concept solved that by inlining
all Paloma CSS in the JavaScript bundle and inserting a `<style>` element when React mounted.

That approach caused Paloma styles to arrive after the page and React runtime. It also made the
React bundle larger than necessary.

## Current pipeline

`src/react/index.jsx` imports `@paloma/core-ui/styles.css` normally. `vite.config.mjs` extracts
the resulting stylesheet during `npm run build:react` and writes it to:

```text
stylesheets/components/ea-paloma-generated.scss
```

`stylesheets/components/_index.scss` imports that generated file. Discourse compiles it as part of
the normal theme stylesheet, so it is available before the React islands mount.

```text
Paloma CSS import
  -> Vite build
  -> stylesheets/components/ea-paloma-generated.scss
  -> Discourse theme CSS

React source
  -> Vite build
  -> assets/ea-react-island.js
  -> Discourse uploaded theme asset
  -> Glimmer dynamic import
```

The generated JavaScript remains in `assets/` because files under `javascripts/` are theme fields
with a roughly 1 MiB limit. The asset upload limit is 8 MiB per file.

## Developer workflow

After changing a React component, Paloma dependency, or Vite configuration, run:

```bash
npm run build:react
```

Commit both generated files when they change:

```text
assets/ea-react-island.js
stylesheets/components/ea-paloma-generated.scss
```

For active development, run the existing theme watcher and a Vite build watcher in separate
terminals:

```bash
npm run watch
npm run build:react -- --watch
```

The theme watcher uploads the updated theme. The Vite watcher keeps the JavaScript asset and
generated Paloma stylesheet current.

## CI requirements

CI must run `npm ci` followed by `npm run build:react` before packaging or uploading the theme.
It should fail if either generated file differs from the committed version. The private registry
credential must be provided through a protected, masked CI variable; do not commit `.npmrc`.

## Guardrails

- `vite.config.mjs` expects exactly one extracted CSS output. A second stylesheet is a build error
  so changes in Paloma/Vite output cannot silently skip the Discourse CSS pipeline.
- Vite removes the generated `.css` asset from `assets/`; otherwise Discourse would reject it as a
  theme asset upload.
- The generated stylesheet is source-controlled to make theme ZIP uploads and Discourse Theme CLI
  deployments deterministic.
