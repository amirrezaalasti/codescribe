---
name: create-skill
description: >-
  Scaffold and author new Agent Skills for this skillhub catalog with correct
  frontmatter, descriptions, and progressive disclosure. Use when adding a new
  skill to skillhub, running npm run new-skill, or when the user asks to create
  an agent skill for coding or writing.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: meta
---

# Create Skill (Skillhub)

## Goal

Add a portable [agentskills.io](https://agentskills.io)-compatible skill under `skills/<category>/<name>/` that installs via `npx skills add`.

## Categories

| Category | Path |
| --- | --- |
| coding | `skills/coding/` |
| writing | `skills/writing/` |
| meta | `skills/meta/` |

## Workflow

1. **Name it.** Lowercase, hyphens, max 64 chars, matches folder (`python-async`).
2. **Scaffold:**

```bash
npm run new-skill -- <category> <skill-name>
```

3. **Write the description (critical).** Third person; WHAT + WHEN; trigger keywords; ≤1024 chars.
4. **Write concise instructions** in `SKILL.md` (< ~500 lines). Put long checklists/examples in `references/`.
5. **Validate:**

```bash
npm run check
```

6. **Open a PR** with the skill path and why it helps agents.

## Description template

```yaml
description: >-
  <What it does>. Use when <trigger scenarios>, or when the user mentions
  <keywords>.
```

## Authoring rules

- Prefer opinionated defaults over option lists
- Link references one level deep from `SKILL.md`
- Keep core skills tool-agnostic (no Cursor-only hooks required)
- Do not invent time-sensitive version claims without need
- `name` in frontmatter **must** equal the folder name

## Anti-patterns

- Vague names (`helper`, `utils`)
- Descriptions without triggers
- Giant SKILL.md dumping entire textbooks
- README inside the skill folder (keep docs at repo root)

## Additional resources

- [references/description-examples.md](references/description-examples.md)
- Repo [CONTRIBUTING.md](../../../CONTRIBUTING.md)
