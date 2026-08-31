# Agent instructions — Codescribe

Read this before editing anything in this repository.

## What's source and what's generated

- **Source of truth:** `skills/<category>/<name>/SKILL.md` (+ `references/`, `assets/`). Edit only here.
- **Generated, do not hand-edit:** `CATALOG.md` (`npm run catalog` regenerates it), `skills-lock.json`.
- **Never commit:** `.agents/skills/` and `.claude/skills/`. These are local install targets created by `npx skills add ./ -a <agent>` for testing — full copies (or symlinks) of `skills/`, not source. They are gitignored; if `git status` shows them as untracked-but-present, that's expected, leave them alone. If a diff ever proposes adding files under those paths, drop them from the commit instead of staging them.

## Before treating a change as done

```bash
npm run check   # validate + regenerate CATALOG.md
git status      # confirm nothing under .agents/skills/ or .claude/skills/ is staged
```

## Authoring or revising a skill

Follow [CONTRIBUTING.md](CONTRIBUTING.md):

- `name` matches the folder name (`[a-z0-9-]+`).
- `description` is third person, states **WHAT** and **WHEN**, under 1024 chars.
- Keep `SKILL.md` under ~500 lines; push checklists/long examples to `references/`.
- One skill (or a tightly related set) per PR.

Use the `create-skill` / `revise-skill` skills under `skills/meta/` for the scaffolding and revision workflow itself.

## Comment convention (mandatory for all code in this repo)

Every incomplete path, risk, workaround, or follow-up in `scripts/*.mjs` or any other code touched in this repo gets a tagged comment — this is the `tagged-code-comments` skill (`skills/coding/tagged-code-comments/SKILL.md`), and it applies to work on Codescribe's own codebase too, not just to skills it teaches to others.

Format: `<comment-syntax> <emoji> <TAG[(priority)]>: <message>`

| Priority | Emoji | Meaning |
| --- | --- | --- |
| P0 | 🔴 | Blocker — fix or explicitly accept before merge |
| P1 | 🟠 | High — fix soon |
| P2 | 🟡 | Medium — plan it |
| P3 | 🟢 | Low — nice to have |
| *(none)* | 🔵 | Informational (`NOTE` / `WHY`) |

```js
// 🟠 TODO(P1): generate-catalog.mjs doesn't sort categories deterministically yet
// 🔵 NOTE: walkSkillDirs stops descending once it finds a SKILL.md
```

Full tag vocabulary, anti-patterns, and the required **Open follow-ups** wrap-up table: see [skills/coding/tagged-code-comments/SKILL.md](skills/coding/tagged-code-comments/SKILL.md). Do not invent free-form `TODO`/`FIXME` — always `emoji + TAG(Pn): message`.
