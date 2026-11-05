---
name: paper-abstract
description: >-
  Write and revise academic paper abstracts that state context, gap, method,
  key results, and implications within venue length limits. Use when drafting or
  editing an abstract, summary blurb, or paper synopsis for a research manuscript.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.1"
  category: writing
---

# Paper Abstract

## Purpose

Give a busy reader enough to decide whether to read the paper — and mirror the paper’s actual claims.

## Typical structure (one paragraph unless venue says otherwise)

1. **Context** — domain + why it matters (1 sentence)
2. **Gap / problem** — what is missing or hard (1 sentence)
3. **Approach** — what you did (1–2 sentences)
4. **Results** — specific findings with quantities when available (1–2 sentences)
5. **Conclusion on the stated problem** — not a restatement of results, but
   what they mean for the gap named in step 2 (1–2 sentences)

Step 5 is the one most often missing. Results are not a conclusion: an abstract
that stops at numbers draws *"okay, but these are still results — what are the
conclusions?"* If the paper names two problems, the closing sentences must say
where each now stands, including which one the evidence supports less well.

## Length heuristics

| Venue type | Rough target |
| --- | --- |
| CS conference | ~150–250 words (check CfP) |
| Journal | Often 150–300; may allow structured abstracts |
| Workshop / short | Often shorter — prioritize problem + result |

Always prefer the venue’s stated limit over these heuristics.

## Instructions

1. Write the abstract **last** when possible, or rewrite after results stabilize.
2. Include **concrete outcomes** (metrics, datasets, theorem statement) — not “promising results.”
3. Do not cite others unless the venue requires it; abstracts are usually citation-light.
4. No undefined acronyms **and no coined terms**. If the paper invents
   vocabulary, the abstract describes the mechanism in ordinary words and leaves
   the label for the body. A term the reader meets first in the abstract and
   sees explained only in Section 4 makes the abstract unreadable on first pass.
5. Ensure every claim appears in the body — and that none **contradicts** it.
   Check the abstract against the introduction as a pair after every revision;
   restating one claim in two vocabularies is how contradictions get in.
6. Distinguish near-synonyms the argument depends on (finished vs. successful,
   deployed vs. applied). Pick one word per concept and hold to it.

## Mini example (shape only)

> Retrieval-augmented generators often hallucinate when evidence is incomplete. We introduce X, a calibration method that … On Y benchmarks, X reduces unsupported claims by Z% while preserving answer accuracy. Our analysis shows …

## Checklist

See [references/checklist.md](references/checklist.md).

## Additional resources

- [references/examples.md](references/examples.md) — before/after rewrites and common failure → fix table
