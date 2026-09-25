---
description: "Implement or fix a feature in the EA Discourse theme using the repository's architecture, verification, and handoff workflow."
---

# Implement a theme feature

Objective: `${input:objective:Describe the observable user outcome}`

Target routes: `${input:routes:List exact routes}`

Acceptance criteria: `${input:criteria:List behavior, states, viewports, and roles}`

Follow `.github/copilot-instructions.md`, matching `.github/instructions/*.instructions.md`, and
`.github/DEVELOPMENT-WORKFLOW.md`. Preserve unrelated working-tree changes.

Start by reproducing or tracing the current behavior. Identify the existing route/outlet, Glimmer
host, React section, data source, settings, locales, and styles. Verify any new Discourse API or
outlet against the installed core source and inspect any proposed Paloma component in the installed
package.

Before editing, give a short implementation contract containing:

- chosen layer and why;
- plain props/callbacks crossing the island boundary;
- server data, session, and permission ownership;
- loading, empty, error, and fallback states;
- files expected to change;
- risks or missing external decisions.

Implement the smallest complete vertical slice. Do not add client-side secrets, duplicate the
Discourse session, rebuild native forum behavior, or add dependencies without measuring and
justifying them. Rebuild generated assets after React or Paloma changes.

Validate with the task's route/session/viewport/data matrix. Run `npm run build:react` plus only
checks that exist in `package.json`; sync/import into local Discourse; check console, network,
accessibility, keyboard, navigation, lifecycle, and responsive behavior; and report raw/gzip JS and
CSS before/after.

Self-review with `.github/REVIEW-CHECKLIST.md` and finish with the handoff format in
`.github/DEVELOPMENT-WORKFLOW.md`. Explicitly list anything that was not verified.
