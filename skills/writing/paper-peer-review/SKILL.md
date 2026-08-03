---
name: paper-peer-review
description: >-
  Review academic drafts with constructive, severity-tagged feedback on claims,
  structure, clarity, and evidence. Use when peer-reviewing a paper, revising a
  manuscript from critique, or when the user asks for a review pass on research
  writing.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: writing
---

# Paper Peer Review

## Goal

Help the authors improve the paper — clear, actionable, fair feedback.

## Review dimensions

1. **Contribution** — is the claim clear and significant for the venue?
2. **Soundness** — methods and evaluation support claims?
3. **Related work** — fair positioning?
4. **Clarity** — structure, writing, figures?
5. **Reproducibility** — enough detail / artifacts?
6. **Ethics / limitations** — acknowledged?

## Severity tags

| Tag | Meaning |
| --- | --- |
| Critical | Blocks acceptance / trust (unsound claims, missing eval, ethics) |
| Major | Should fix for a strong paper |
| Minor | Clarity, typos, small structure |

## Output format

```markdown
## Summary
2–4 sentences: what the paper does and the overall recommendation tone.

## Strengths
- …

## Critical
- …

## Major
- …

## Minor
- …

## Questions for authors
1. …

## Verdict (optional)
Accept / Weak accept / Borderline / Weak reject / Reject — with one justification line.
```

## Instructions

1. Read abstract, intro contributions, and main results before deep prose nits.
2. Check claim–evidence alignment across abstract/intro/results/conclusion.
3. Prefer specific fixes (“move X to related work”, “add baseline Y”) over vague dislike.
4. Do not invent missing papers or results; ask authors instead.
5. Separate writing polish from scientific issues.

## For revision mode

When the user wants help applying a review: map each Critical/Major item to an edit plan, then draft section patches using the relevant section skills.

## Checklist

See [references/checklist.md](references/checklist.md).
