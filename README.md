# Codescribe

Multi-agent skill catalog for **coding** (Python, JavaScript, TypeScript, React, Next.js) and **academic writing** (paper sections, LaTeX, peer review).

Skills follow the open [Agent Skills](https://agentskills.io) format and install into Cursor, Claude Code, VS Code (GitHub Copilot), Codex, and 30+ other agents via the [`skills` CLI](https://skills.sh).

[![skills.sh](https://skills.sh/b/amirrezaalasti/codescribe)](https://skills.sh/amirrezaalasti/codescribe)

> **Note:** The skills.sh badge activates after this repo is public on GitHub as `amirrezaalasti/codescribe`. Change the owner/name in links if your fork differs.

## Install (universal)

The recommended way for **all agents** — Cursor, Claude Code, VS Code / Copilot, Codex, and more:

```bash
# All skills into detected agents (interactive)
npx skills add amirrezaalasti/codescribe

# Global (all your projects)
npx skills add amirrezaalasti/codescribe -g

# Specific skills
npx skills add amirrezaalasti/codescribe -s python-best-practices -s paper-abstract

# Target one or more agents
npx skills add amirrezaalasti/codescribe -a cursor
npx skills add amirrezaalasti/codescribe -a claude-code
npx skills add amirrezaalasti/codescribe -a github-copilot
npx skills add amirrezaalasti/codescribe -a codex

# Multiple agents at once
npx skills add amirrezaalasti/codescribe -a cursor -a claude-code -a github-copilot

# Update later
npx skills update
```

List without installing:

```bash
npx skills add amirrezaalasti/codescribe --list
```

## Install by agent

### Cursor

```bash
npx skills add amirrezaalasti/codescribe -a cursor
# or globally:
npx skills add amirrezaalasti/codescribe -g -a cursor
```

**Manual:** Open **Settings → Skills → Add skill**, or **Customize → Rules → Add Rule → Remote Rule (GitHub)** and paste:

```text
https://github.com/amirrezaalasti/codescribe
```

Skills land in `.agents/skills/` (project) or `~/.cursor/skills/` (global).

### VS Code (GitHub Copilot)

```bash
npx skills add amirrezaalasti/codescribe -a github-copilot
# or globally:
npx skills add amirrezaalasti/codescribe -g -a github-copilot
```

Skills land in `.agents/skills/` / `.github/skills/` (project) or `~/.copilot/skills/` (global). In VS Code Chat, open **Configure Chat → Skills** (or type `/skills`) to confirm they loaded.

**Optional UI:** install the [Skills.sh](https://marketplace.visualstudio.com/items?itemName=AbelMak.skills-sh) VS Code extension to browse and install from the sidebar.

### Claude Code

```bash
npx skills add amirrezaalasti/codescribe -a claude-code
# or:
claude skill add https://github.com/amirrezaalasti/codescribe
```

Skills land in `.claude/skills/` (project) or `~/.claude/skills/` (global).

### Codex

```bash
npx skills add amirrezaalasti/codescribe -a codex
```

Skills land under `.agents/skills/` (project) or `~/.codex/skills/` (global).

### Any other supported agent

```bash
npx skills add amirrezaalasti/codescribe
```

The CLI auto-detects installed agents. Pass `-a <agent>` to target one explicitly (see [supported agents](https://github.com/vercel-labs/skills#supported-agents)).

## Install one skill

```bash
npx skills add amirrezaalasti/codescribe -s <skill-name>
```

| Category | Skills |
| --- | --- |
| Coding | `tagged-code-comments` (global gate), `python-best-practices`, `python-testing`, `javascript-best-practices`, `typescript-best-practices`, `react-best-practices`, `nextjs-app-router`, `nextjs-data-fetching`, `code-review`, `debugging` |
| Writing | `academic-paper`, `paper-abstract`, `paper-introduction`, `paper-related-work`, `paper-methods`, `paper-results`, `paper-discussion`, `paper-conclusion`, `paper-literature-review`, `latex-scientific-writing`, `paper-peer-review` |
| Meta | `create-skill`, `revise-skill` |

Example — install a coding skill into Cursor and Claude:

```bash
npx skills add amirrezaalasti/codescribe -s code-review -a cursor -a claude-code
```

Or point at a skill folder URL:

```bash
npx skills add https://github.com/amirrezaalasti/codescribe/tree/main/skills/coding/code-review
```

## Catalog

Full generated index: **[CATALOG.md](CATALOG.md)**

### Coding

- `python-best-practices`, `python-testing`
- `javascript-best-practices`, `typescript-best-practices`
- `react-best-practices`, `nextjs-app-router`, `nextjs-data-fetching`
- `code-review`, `debugging`
- `tagged-code-comments` — **global** emoji/tag/priority gate; forces an Open follow-ups checklist before ship

### Writing

- `academic-paper` (orchestrator)
- Section skills: `paper-abstract`, `paper-introduction`, `paper-related-work`, `paper-methods`, `paper-results`, `paper-discussion`, `paper-conclusion`
- `paper-literature-review`, `latex-scientific-writing`, `paper-peer-review`

### Meta

- `create-skill`, `revise-skill`

## Maintain / revise

```bash
npm run new-skill -- coding my-skill-name   # scaffold
npm run check                               # validate + regenerate CATALOG.md
```

- Contributors: see [CONTRIBUTING.md](CONTRIBUTING.md)
- Request a skill: GitHub issue template **Skill request**
- Propose an edit: issue template **Skill revision**, or open a PR
- Agents: use the `create-skill` / `revise-skill` skills in this repo

CI validates skills on every PR and regenerates `CATALOG.md` on `main` when skill metadata changes.

## Local development

```bash
git clone https://github.com/amirrezaalasti/codescribe.git
cd codescribe
npm run validate
npm run catalog
npx skills add ./ --list
```

## License

MIT — see [LICENSE](LICENSE).
