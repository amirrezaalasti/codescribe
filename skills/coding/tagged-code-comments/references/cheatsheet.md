# Tagged comments cheatsheet

## Global rule

Every incomplete, risky, or non-obvious spot gets a tagged comment. End coding work with an **Open follow-ups** table so the developer must check P0/P1 before ship.

## Line template

```text
EMOJI TAG(Pn): message — optional ref
```

## Priority

- P0 🔴 blocker — not merge-ready until fixed or accepted
- P1 🟠 high — must appear in wrap-up checklist
- P2 🟡 medium
- P3 🟢 low
- NOTE/WHY 🔵 info (no Pn)

## Tags

`FIXME` `TODO` `HACK` `SECURITY` `BUG` `PERF` `REFACTOR` `UX` `TEST` `API` `MIGRATE` `NOTE` `WHY` `REVIEW`

## Quick picker

| Situation | Comment |
| --- | --- |
| Will crash / corrupt / leak | `🔴 FIXME(P0):` or `🔴 SECURITY(P0):` |
| Must finish before release | `🟠 TODO(P1):` |
| Missing tests for new path | `🟠 TEST(P1):` |
| Ugly but shipped with reason | `🟡 HACK(P2): … until …` |
| Slow but acceptable | `🟢 PERF(P3):` |
| Explain weird code | `🔵 WHY:` |

## Developer gate (copy into replies)

```markdown
### Open follow-ups (check before ship)

| Pri | Tag | Location | Message |
| --- | --- | --- | --- |
| … | … | `file:line` | … |

- [ ] Developer reviewed P0/P1 (fix or accept risk)
- [ ] No untagged stubs remain
```
