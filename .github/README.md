# Agent documentation map

These files form one workflow. Give an agent the task brief plus the repository; the path-specific
instructions apply while it edits matching files.

| File | Purpose |
|---|---|
| `copilot-instructions.md` | Repository architecture, non-negotiable boundaries, security, and completion rules |
| `instructions/glimmer-hosts.instructions.md` | Discourse/Glimmer data, session, routing, outlet, and lifecycle rules |
| `instructions/react-paloma.instructions.md` | React state, Paloma constraints, accessibility, and dependency rules |
| `instructions/theme-styles.instructions.md` | SCSS ownership, responsive behavior, generated CSS, and core override rules |
| `DEVELOPMENT-WORKFLOW.md` | End-to-end discovery, implementation, validation, self-review, and handoff process |
| `AGENT-TASK-TEMPLATE.md` | Internal contract the agent derives from Jira/Figma before coding |
| `REVIEW-CHECKLIST.md` | Author/reviewer completion checklist |
| `prompts/figma-island.prompt.md` | Reusable prompt for a Figma-to-island task |
| `prompts/implement-feature.prompt.md` | Reusable prompt for a feature or bug-fix task |
| `prompts/develop-from-jira-or-figma.prompt.md` | Default zero-preparation entry point: ticket key/link or Figma URL only |

## Recommended use

1. Give the agent a Jira key/link or a Figma URL/node and tell it to run
   `prompts/develop-from-jira-or-figma.prompt.md`.
2. Agent retrieves the source material and derives its own task contract using
   `AGENT-TASK-TEMPLATE.md`; the requester does not fill it in.
3. Agent reads the repository-wide and matching path instructions.
4. Agent follows `DEVELOPMENT-WORKFLOW.md` and implements a small vertical slice.
5. Agent self-reviews with `REVIEW-CHECKLIST.md`.
6. Reviewer checks both authored source and rebuilt generated artifacts.
7. Deployment proceeds through the separately approved CI/CD environment workflow.

The documents intentionally do not grant permission to deploy to shared environments, change
backend architecture, add credentials, or rewrite native Discourse behavior.
