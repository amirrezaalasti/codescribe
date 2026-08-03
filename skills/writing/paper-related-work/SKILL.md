---
name: paper-related-work
description: >-
  Write related-work sections that synthesize prior research into themes and
  clearly position the paper's contribution. Use when drafting related work,
  background comparisons, or positioning against prior methods in a research
  paper.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: writing
---

# Paper Related Work

## Purpose

Show you know the landscape **and** where you sit in it — synthesis, not a paper dump.

## Structure options (pick one)

1. **Thematic groups** — Group A / Group B / … then “Our work differs by …”
2. **Problem dimensions** — along axes (scalability, supervision, guarantees)
3. **Chronological only when history is the point** — rare for systems/ML papers

End the section (or each theme) with an explicit **positioning paragraph**.

## Instructions

1. Organize by **ideas**, not by citation list order.
2. For each theme: what they achieve, what they leave open, how you relate.
3. Compare on **criteria that matter to your claims** (accuracy, cost, assumptions).
4. Be fair: do not strawman; acknowledge strongest baselines.
5. Never invent papers. If a citation is uncertain, write `[CITATION NEEDED: description]`.
6. Keep depth proportional to relevance; move tangential surveys to a short pointer.

## Positioning template

```markdown
### Positioning
Prior work on X primarily addresses Y under assumption Z.
In contrast, we …, which enables … without …
```

## Anti-patterns

- “Smith et al. did A. Jones et al. did B. …” with no synthesis
- Claiming novelty that a cited paper already has
- Related work that never mentions your method’s differences
- Excessive quotes instead of paraphrase + cite

## Checklist

See [references/checklist.md](references/checklist.md).
