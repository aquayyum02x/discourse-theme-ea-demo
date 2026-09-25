# Agent-generated task contract

The development agent creates this contract after reading the Jira ticket and/or Figma node. The
requester does not need to complete it. Keep it in the agent's work log or handoff; create a
repository file only when the project specifically asks for one.

Every requirement should cite its source, such as `Jira description`, `Jira comment YYYY-MM-DD`,
or `Figma node 1378:107913`. Label inferred behavior as an assumption.

## Objective

[Describe the user-visible outcome in one paragraph.]

## Context

- Repository: `discourse-theme-ea-demo`
- Branch/base: [branch or commit]
- Target environment: [local / sandbox / development]
- Routes: [exact routes]
- Users: [logged out / member / moderator / admin]
- Figma/design references: [node IDs or links]
- Related issue/WBS item: [identifier]
- Source evidence: [ticket fields/comments, attachments, Figma nodes]

## Current behavior

[Describe what happens now, including reproducible steps and any console/network evidence.]

## Required behavior

1. [Observable acceptance criterion]
2. [Loading, empty, and error behavior]
3. [Responsive behavior]
4. [Keyboard/accessibility behavior]
5. [Session/permission behavior]

## Architecture constraints

- Discourse owns routing, session, permissions, and server data.
- Glimmer owns Discourse services/data adaptation and teardown.
- React owns the EA surface and local interaction state.
- Props must be plain data plus callbacks.
- Reuse installed Paloma components where they satisfy the requirement.
- [Any task-specific API, outlet, backend, or package constraint]

## Data contract

- Source: [Discourse service/API, theme settings, public endpoint, approved BFF]
- Inputs: [parameters]
- Plain props: [shape]
- Callbacks: [shape]
- Permission rules: [rules]
- Caching/refresh: [behavior]
- Failure fallback: [behavior]

## Scope

Included:

- [item]

Excluded:

- [item]

## Required workflow

Follow `.github/copilot-instructions.md`, all matching `.github/instructions/*.instructions.md`,
and `.github/DEVELOPMENT-WORKFLOW.md`. Preserve unrelated worktree changes.

Before coding, inspect the current implementation and verify any new Discourse outlet/API against
the installed core source. Before completion, rebuild generated assets and use
`.github/REVIEW-CHECKLIST.md`.

## Required validation and evidence

- Commands: `npm run build:react` plus any scripts that actually exist in `package.json`.
- Routes: [list]
- Viewports: [widths]
- Session roles: [roles]
- Data states: loading, populated, empty, error.
- Browser: no relevant console/page errors; expected requests only.
- Lifecycle: repeated route transitions without duplicate roots/listeners.
- Accessibility: keyboard path, focus, names, landmarks, contrast/reduced motion as applicable.
- Performance: raw/gzip JS and CSS before/after; cold-load timing when requested.
- Design parity: table of Figma values versus measured values.

## Deliverables

- Source and generated artifacts needed for the feature.
- A concise handoff using the format in `DEVELOPMENT-WORKFLOW.md`.
- No deployment to a shared environment unless the task explicitly authorizes it.
