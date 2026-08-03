---
name: tagged-code-comments
description: >-
  Global coding hygiene: every incomplete path, risk, workaround, or follow-up
  MUST be marked with emoji + tag + priority (🔴 FIXME(P0), 🟠 TODO(P1), …) so
  developers are forced to review open items before shipping. Use whenever
  writing, editing, reviewing, debugging, or finishing code in any language;
  when leaving TODOs/FIXMEs; when work is partial; or when the user asks for
  tagged, prioritized, or emoji comments. Default for all Codescribe coding work.
license: MIT
metadata:
  author: amirrezaalasti
  version: "2.0"
  category: coding
---

# Tagged Code Comments (global gate)

## Goal

This is the **default comment convention for all coding work**. Agents must leave
greppable, prioritized markers in source whenever something is unfinished, risky,
or non-obvious — then surface those markers so the **developer must check them**
before treating the work as done.

Not a substitute for a PR description. Not optional style polish.

## Canonical format

```text
<comment-syntax> <emoji> <TAG[(priority)]>: <message>[ — <owner|ticket>]
```

Examples:

```javascript
// 🔴 FIXME(P0): null check missing for session before write — #412
// 🟠 TODO(P1): extract rate limiter into shared middleware
// 🟡 HACK(P2): works around upstream SDK bug until v3.2
// 🔵 NOTE: invariant — callers must pass sorted ids
// 🟢 PERF(P3): N+1 query here; fine under 100 rows
```

```python
# 🔴 SECURITY(P0): user input reaches SQL without parameterization
# 🟣 REFACTOR(P2): split this 200-line function after the feature lands
```

```tsx
{/* 🟡 UX(P2): empty state copy is placeholder */}
```

## Priority scale

| Priority | Emoji cue | Meaning | When to use |
| --- | --- | --- | --- |
| **P0** | 🔴 | Blocker — must fix or explicitly accept before merge/ship | Correctness, data loss, security on the path being touched |
| **P1** | 🟠 | High — fix soon; call out in the wrap-up | Edge bugs, missing validation, hot-path debt, missing tests for new behavior |
| **P2** | 🟡 | Medium — plan it | Cleanup, incomplete UX, known limitation |
| **P3** | 🟢 | Low — nice to have | Micro-opts, optional polish |
| *(none)* | 🔵 | Informational | Invariants, non-actionable context |

Always include `(P0)`–`(P3)` on actionable tags. Omit priority on pure `NOTE` / `WHY`.

## Tag vocabulary

| Tag | Emoji | Type of change / intent |
| --- | --- | --- |
| `FIXME` | 🔴 default | Broken or incorrect behavior to fix |
| `TODO` | 🟠 default | Planned work not done yet |
| `HACK` | 🟡 | Intentional ugly workaround; explain *why* and exit condition |
| `SECURITY` | 🔴 | Auth, injection, secrets, trust-boundary issue |
| `BUG` | 🔴 | Confirmed defect (prefer `FIXME` if fixing in-tree) |
| `PERF` | 🟢 | Performance concern or planned optimization |
| `REFACTOR` | 🟣 | Structure/design cleanup without behavior change |
| `UX` | 🟡 | Product/UI copy or interaction debt |
| `TEST` | 🟠 | Missing or weak coverage for this path |
| `API` | 🟠 | Public contract change needed / deprecated usage |
| `MIGRATE` | 🟠 | Temporary bridge during a migration |
| `NOTE` | 🔵 | Context for readers; not a task |
| `WHY` | 🔵 | Non-obvious rationale (prefer over clever silence) |
| `REVIEW` | 🟣 | Question for the developer/reviewer (resolve or ticket before merge) |

Default emoji follows the table; if priority and tag disagree, **priority emoji wins** (e.g. `PERF(P0)` → 🔴).

## Mandatory agent rules (global)

Apply on **every** coding change, in any language, unless the user explicitly disables it:

1. **Never leave silent debt.** If you skip a check, leave a stub, hardcode, omit tests, or ship a workaround — add a tagged comment at the exact line/block.
2. **Never invent free-form TODO/FIXME.** Always use `emoji + TAG(Pn): message`.
3. **One concern per comment.** Specific message. Bad: `// TODO: fix later`. Good: `// 🟠 TODO(P1): handle 429 with retry-after from API`.
4. **`HACK` / `MIGRATE` need an exit.** Version, ticket, or date that removes them.
5. **Remove resolved markers** in the same change when you fix the issue.
6. **Do not spam P3.** Prefer actionable P0–P2 unless the user asks for a full annotation pass.
7. **Owners/tickets preferred** when the repo uses issues: `— #123` or `— @handle`.
8. **Never put secrets** in comments.
9. **Prefer chat/PR comments** for feedback on someone else’s untouched code; use in-code tags when the marker must travel with the code.

## Developer gate (force a check)

Before saying work is done, the agent **must**:

1. Scan the touched files (and summarize any pre-existing open tags in the same paths).
2. Ensure every incomplete/risky spot introduced or left behind has a tagged comment.
3. End the reply with an **Open follow-ups** table the developer must acknowledge:

```markdown
### Open follow-ups (check before ship)

| Pri | Tag | Location | Message |
| --- | --- | --- | --- |
| P0 | SECURITY | `src/api.ts:42` | … |
| P1 | TODO | `src/api.ts:88` | … |

- [ ] Developer reviewed P0/P1 (fix or accept risk)
- [ ] No untagged stubs / hardcoded shortcuts remain
```

4. If there are **any P0** items, say clearly: **not merge-ready** until fixed or explicitly accepted.
5. If there are **no** open actionable tags, say so in one line: `Open follow-ups: none.`

This gate is what forces the human to look — do not bury tags only in source.

## Language comment syntax

| Language | Line | Block |
| --- | --- | --- |
| JS/TS | `// …` | `/* … */` |
| Python | `# …` | N/A (or docstrings for `NOTE`/`WHY` only) |
| Go | `// …` | `/* … */` |
| Java/Kotlin/C# | `// …` | `/* … */` |
| CSS | | `/* … */` |
| HTML / JSX | | `{/* … */}` or `<!-- … -->` |
| SQL | `-- …` | `/* … */` |
| Shell | `# …` | |

Match the file’s existing comment style. If the repo already documents a convention, **map** their tags to this vocabulary.

## Bulk annotation pass

When the user asks to “mark priorities” / “tag this file/diff”:

1. Scan for bugs, security, missing tests, hacks, and unclear WHY.
2. Add tagged comments only at the relevant line/block.
3. Return the **Open follow-ups** table (same gate as above).

## Grepping

```bash
rg -n '🔴|🟠|🟡|🟢|🟣|🔵|(FIXME|TODO|HACK|SECURITY|PERF|REFACTOR|TEST|UX|API|MIGRATE)\(P[0-3]\)'
```

## Anti-patterns

- Shipping incomplete work with no tag and no gate table
- Emoji-only comments with no tag (`// 🔴 oops`)
- Priority without a message
- Using `TODO` for production-breaking bugs (use `FIXME`/`SECURITY`)
- Leaving `REVIEW` on main without a ticket
- Changing behavior silently while only updating a comment

## Additional resources

- [references/cheatsheet.md](references/cheatsheet.md)
- [references/examples.md](references/examples.md)
