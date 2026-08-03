---
name: paper-literature-review
description: >-
  Write literature reviews that synthesize sources into arguments, themes, and
  research gaps rather than summarizing paper-by-paper. Use when writing a
  survey section, thesis literature review, related-work-heavy chapter, or when
  the user asks to synthesize papers into a review.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: writing
---

# Paper Literature Review

## Purpose

Build an **argument about the state of knowledge** — themes, agreements, conflicts, and gaps — not an annotated bibliography.

## Workflow

1. **Scope** — question, inclusion criteria, time range, venues
2. **Collect & triage** — core vs peripheral sources
3. **Code themes** — methods, datasets, claims, limitations
4. **Synthesize** — write by theme; compare across papers
5. **Gap statement** — what remains open and why it matters
6. **Bridge** — how the present work (if any) addresses a gap

## Section patterns

```markdown
## Theme: …
Prior approaches fall into A and B.
A achieves … but assumes …
B relaxes … at the cost of …
Across both lines, … remains unresolved.
```

## Instructions

1. Prefer **synthesis sentences** that cite multiple works.
2. Compare on shared criteria (task, supervision, guarantees, scale).
3. Call out conflicting findings and possible reasons.
4. Keep quotation rare; paraphrase accurately.
5. Never invent citations or results from memory — verify or mark `[CITATION NEEDED]`.
6. For surveys: consider a taxonomy figure/table.

## Summary vs synthesis

| Summary (avoid as default) | Synthesis (prefer) |
| --- | --- |
| “Paper A did X.” | “Methods that do X share assumption Y; they fail when Z.” |
| One paper per paragraph | Multiple papers per claim |

## Checklist

See [references/checklist.md](references/checklist.md).

## Additional resources

- [references/examples.md](references/examples.md) — before/after rewrites and common failure → fix table
