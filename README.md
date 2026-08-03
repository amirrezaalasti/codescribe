# Skillhub

Multi-agent skill catalog for **coding** (Python, JavaScript, TypeScript, React, Next.js) and **academic writing** (paper sections, LaTeX, peer review).

Skills follow the open [Agent Skills](https://agentskills.io) format and install into Cursor, Claude Code, Codex, GitHub Copilot, and 30+ other agents via the [`skills` CLI](https://skills.sh).

[![skills.sh](https://skills.sh/b/amirrezaalasti/skillhub)](https://skills.sh/amirrezaalasti/skillhub)

> **Note:** The skills.sh badge activates after this repo is public on GitHub as `amirrezaalasti/skillhub`. Change the owner/name in links if your fork differs.

## Install (universal)

```bash
# All skills into detected agents (interactive)
npx skills add amirrezaalasti/skillhub

# Global (all your projects)
npx skills add amirrezaalasti/skillhub -g

# Specific skills
npx skills add amirrezaalasti/skillhub -s python-best-practices -s paper-abstract

# Target an agent
npx skills add amirrezaalasti/skillhub -a cursor
npx skills add amirrezaalasti/skillhub -a claude-code
npx skills add amirrezaalasti/skillhub -a codex

# Update later
npx skills update
```

List without installing:

```bash
npx skills add amirrezaalasti/skillhub --list
```

## One-click: Cursor

Click a button to open Cursor’s install flow for that skill (requires Cursor installed).

### Coding

| Skill | Install |
| --- | --- |
| python-best-practices | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/python-best-practices) |
| python-testing | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/python-testing) |
| javascript-best-practices | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/javascript-best-practices) |
| typescript-best-practices | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/typescript-best-practices) |
| react-best-practices | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/react-best-practices) |
| nextjs-app-router | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/nextjs-app-router) |
| nextjs-data-fetching | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/nextjs-data-fetching) |
| code-review | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/code-review) |
| debugging | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/coding/debugging) |

### Writing

| Skill | Install |
| --- | --- |
| academic-paper | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/academic-paper) |
| paper-abstract | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-abstract) |
| paper-introduction | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-introduction) |
| paper-related-work | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-related-work) |
| paper-methods | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-methods) |
| paper-results | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-results) |
| paper-discussion | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-discussion) |
| paper-conclusion | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-conclusion) |
| paper-literature-review | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-literature-review) |
| latex-scientific-writing | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/latex-scientific-writing) |
| paper-peer-review | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/writing/paper-peer-review) |

### Meta

| Skill | Install |
| --- | --- |
| create-skill | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/meta/create-skill) |
| revise-skill | [Install in Cursor](cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/amirrezaalasti/skillhub/tree/main/skills/meta/revise-skill) |

### Cursor (manual)

1. Open **Customize → Rules → Add Rule → Remote Rule (GitHub)**
2. Paste: `https://github.com/amirrezaalasti/skillhub`

Or: **Settings → Skills → Add skill** and paste a skill folder URL from the tables above.

## Other agents

| Agent | How |
| --- | --- |
| Claude Code | `npx skills add amirrezaalasti/skillhub -a claude-code` or `claude skill add <skill-url>` |
| Codex | `npx skills add amirrezaalasti/skillhub -a codex` (skills land under `.agents/skills/`) |
| GitHub Copilot / VS Code | `npx skills add amirrezaalasti/skillhub -a github-copilot` |
| Any supported agent | `npx skills add amirrezaalasti/skillhub` (auto-detects) |

## Catalog

Full generated index: **[CATALOG.md](CATALOG.md)**

### Coding

- `python-best-practices`, `python-testing`
- `javascript-best-practices`, `typescript-best-practices`
- `react-best-practices`, `nextjs-app-router`, `nextjs-data-fetching`
- `code-review`, `debugging`

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
git clone https://github.com/amirrezaalasti/skillhub.git
cd skillhub
npm run validate
npm run catalog
npx skills add ./ --list
```

## License

MIT — see [LICENSE](LICENSE).
