---
name: revise-skill
description: >-
  Revise existing Skillhub skills via local edits, validation, and pull requests
  or skill-revision issues. Use when updating an outdated skill, improving
  instructions, fixing discovery descriptions, or when the user wants to propose
  changes to a skill in this catalog.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: meta
---

# Revise Skill (Skillhub)

## Goal

Improve an existing skill without breaking installability or discovery.

## Choose a path

| Situation | Path |
| --- | --- |
| Clear textual fix you can write | Edit → `npm run check` → PR |
| Suggestion / discussion needed | Open a **skill revision** GitHub issue |
| Agent-assisted rewrite | Edit with user approval; keep diffs focused |

## Edit workflow

1. Locate the skill under `skills/**/<name>/SKILL.md`.
2. Preserve `name` unless intentionally renaming (rename folder + frontmatter + catalog together).
3. Improve description triggers if discovery is wrong; keep ≤1024 chars.
4. Move long new material into `references/` instead of bloating `SKILL.md`.
5. Fix any broken relative links.
6. Run:

```bash
npm run check
```

7. Open a PR using the repo template; mention the skill path and motivation.

## Issue workflow

Use `.github/ISSUE_TEMPLATE/skill-revision.yml` (or ask the user to). Include:

- Skill path/name
- What is wrong or outdated
- Proposed wording or intent
- Why agents will behave better

## Revision principles

- Prefer smaller, focused PRs (one skill or a tight set)
- Do not weaken portable wording into tool-specific requirements
- Update examples when defaults change
- Keep severity: correctness of agent guidance > stylistic nits

## Checklist

See [references/checklist.md](references/checklist.md).
