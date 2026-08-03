# Contributing to Skillhub

Thanks for helping improve agent skills for coding and academic writing.

## Quick start

```bash
git clone https://github.com/amirrezaalasti/skillhub.git
cd skillhub
npm run new-skill -- coding my-skill-name
# edit skills/coding/my-skill-name/SKILL.md
npm run check
```

## Skill rules

1. Follow the [Agent Skills](https://agentskills.io) format: folder + `SKILL.md` with `name` and `description`.
2. `name` must match the folder name (`[a-z0-9-]+`, max 64 chars).
3. Write the description in **third person**, include **WHAT** and **WHEN**, and keep it under 1024 characters.
4. Keep `SKILL.md` under ~500 lines. Put checklists, long examples, and deep reference in `references/`.
5. Prefer portable instructions — avoid Cursor/Claude-only features in core skills.
6. Be opinionated: pick defaults instead of listing every option.

## Categories

| Category | Path | Use for |
| --- | --- | --- |
| `coding` | `skills/coding/` | Languages, frameworks, engineering workflows |
| `writing` | `skills/writing/` | Academic papers and section writing |
| `meta` | `skills/meta/` | Hub maintenance (create/revise skills) |

## Revising a skill

1. Open a [skill revision](../../issues/new?template=skill-revision.yml) issue, **or**
2. Edit the skill, run `npm run check`, and open a PR.

Agents can follow the `revise-skill` skill in this repo for the same workflow.

## Pull requests

- One skill (or a tightly related set) per PR when possible.
- Include before/after description if you change discovery triggers.
- CI must pass (`validate` + catalog up to date).

## Install / test locally

```bash
npx skills add ./ --list
npx skills add ./ -s python-best-practices -a cursor
```
