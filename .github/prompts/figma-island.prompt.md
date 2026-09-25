---
description: "Implement a supplied Figma design as a React + Paloma island using the repository workflow and measured verification."
---

# Implement a Figma design as a Discourse island

Figma node or URL: `${input:figmaNode:Figma node ID or URL}`

Target route/outlet: `${input:target:Route and verified outlet}`

Required user-visible behavior: `${input:behavior:Describe interactions and states}`

Follow `.github/copilot-instructions.md`, all matching `.github/instructions/*.instructions.md`,
and `.github/DEVELOPMENT-WORKFLOW.md`. Preserve unrelated working-tree changes.

## 1. Inspect before coding

Read the complete design context and screenshot for the supplied node using the available Figma
integration. Record desktop, tablet, mobile, hover, focus, loading, empty, and error states that the
design supplies. Extract measurable values: dimensions, spacing, typography, radii, colors, and
breakpoint behavior.

If Figma provides a Code Connect mapping, verify that its package and component exist in this
repository's installed Paloma version before using it. Treat generated Figma JSX/CSS as design
evidence, not as trusted architecture or production code.

Inspect the current route, initializer, Glimmer host, React registry, relevant theme settings,
locales, styles, and the installed Discourse outlet/API. Reuse existing integration paths where
possible.

## 2. Propose the vertical slice

Before editing, state:

- verified route and extension point;
- Discourse data source and permission behavior;
- plain props and callbacks at the Glimmer/React boundary;
- local React state;
- Paloma components that fit and gaps requiring semantic HTML;
- loading, empty, error, and React-load failure behavior;
- files expected to change.

Do not introduce a client-side credential, duplicate Discourse session state, or invent a backend.
If protected external data is required, identify the BFF/plugin dependency.

## 3. Implement

Build the smallest complete vertical slice. Register the React section, add or update its Glimmer
host, mount it through the verified extension point, add scoped authored SCSS, locales/settings,
and icons as needed, then rebuild the committed JS and generated Paloma stylesheet.

Use Paloma only where the installed runtime meets the requirement. Preserve native link behavior,
keyboard access, visible focus, semantics, and route-transition cleanup.

## 4. Validate

Run `npm run build:react` and only additional scripts that actually exist. Import/sync the theme
into local Discourse and test the acceptance matrix from the task brief.

For design parity, return a table containing:

| Property | Figma | Measured | Difference/status |
|---|---:|---:|---|
| [example: container width] | | | |

Check browser console/page errors, requests, accessibility names, keyboard behavior, modifier-click,
responsive overflow, loading/empty/error states, repeated route transitions, and unmount. Record JS
and generated CSS raw/gzip sizes before and after.

## 5. Handoff

Use the handoff format in `DEVELOPMENT-WORKFLOW.md`. Name every Paloma component used, every place
semantic HTML was required, and every state or viewport that could not be verified. Do not claim
visual parity based only on a screenshot.
