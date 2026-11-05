---
name: paper-introduction
description: >-
  Write research paper introductions that motivate the problem, identify the
  gap, state contributions, and preview the paper. Use when drafting or revising
  an introduction section, opening, or contribution list for an academic paper.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.1"
  category: writing
---

# Paper Introduction

## Purpose

Orient the reader: why this problem, what is missing, what you contribute, and how the paper is organized.

## Recommended arc

1. **Hook / motivation** — concrete setting, not vague importance
2. **Background** — minimal shared context
3. **Gap** — precise limitation of prior work or open problem
4. **Approach sketch** — high-level idea (not full methods)
5. **Contributions** — numbered, falsifiable bullets
6. **Roadmap** — optional short section preview

## Contribution bullets

Each bullet should be checkable against later sections:

```markdown
We make the following contributions:
1. …
2. …
3. …
```

Prefer “We propose X and show Y on Z” over “We explore the space of …”.

## Before the formalism: the plain-language core idea

By the second paragraph, state the whole idea in ordinary words, using none of
the paper's coined vocabulary. A reader who cannot restate your idea after one
page will not recover it later, and the most common review comment on an opaque
draft is a reviewer paraphrasing the idea back more simply than the author did.
If that happens, their sentence is the better opening — use it.

## Name the problems before elaborating them

If the paper turns on N problems, name all N in one sentence, then take them in
turn. Do not elaborate the first before the reader knows there are three, and do
not call them "properties" or "aspects" when they are problems.

## Instructions

1. Keep motivation **specific** (failure mode, cost, scientific puzzle).
2. Position against prior work briefly; leave deep comparison to related work.
3. Match claims to evidence you actually have (or mark as planned).
4. Define notation/terms the reader needs immediately; defer the rest.
5. Avoid a long historical tour before stating the gap.

## Common failure modes

| Failure | Fix |
| --- | --- |
| “In recent years, AI has…” filler | Start from the concrete problem |
| Contributions = paper outline | State outcomes / artifacts / findings |
| Gap too broad | Name the missing capability or unanswered question |
| Spoiling full methods | Keep approach at idea level |

## Checklist

See [references/checklist.md](references/checklist.md).

## Additional resources

- [references/examples.md](references/examples.md) — before/after rewrites and common failure → fix table
