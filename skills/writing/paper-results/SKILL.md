---
name: paper-results
description: >-
  Present research results with clear metrics, comparisons, ablations, and
  figure/table narratives that support the paper's claims. Use when writing
  results, evaluation, experiments findings, ablations, or describing tables and
  figures in a research paper.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: writing
---

# Paper Results / Evaluation

## Purpose

Provide evidence for the claims — measured, comparable, and honestly scoped.

## Structure

1. **Evaluation goals** — which claims each experiment supports
2. **Main results** — primary table/figure first
3. **Comparisons** — baselines and SOTA under fair protocol
4. **Ablations / analyses** — what matters in the design
5. **Qualitative examples** — when they add insight (not decoration)

## Instructions

1. Lead each subsection with the **takeaway**, then the evidence.
2. Reference every figure/table in text; explain what to look at.
3. Report uncertainty when available (std, CI, multiple seeds).
4. Use consistent metrics and units; define them once.
5. Do not invent numbers. Use placeholders like `[TABLE: main results]` if data is pending.
6. Keep discussion light here; deep interpretation belongs in `paper-discussion`.
7. Avoid chartjunk; one message per figure when possible.

## Sentence patterns

- “Table 1 shows that X improves M by … relative to B on D.”
- “Ablating C drops performance by …, indicating …”
- “Failure cases concentrate on … (Figure 3).”

## Anti-patterns

- Results that do not map to stated contributions
- Selective reporting without noting limits
- Over-claiming significance without statistical support the venue expects
- Figures never referenced in prose

## Checklist

See [references/checklist.md](references/checklist.md).
