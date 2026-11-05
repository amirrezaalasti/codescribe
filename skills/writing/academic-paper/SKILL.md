---
name: academic-paper
description: >-
  Plan and write academic papers by choosing venue tone, outlining structure, and
  routing work to the correct section skill. Use when starting a research paper,
  thesis chapter, conference/journal manuscript, or when the user asks for help
  with overall paper structure, outline, or which section to write next.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.1"
  category: writing
---

# Academic Paper (orchestrator)

## Goal

Help the author produce a coherent manuscript: clear contribution, sound structure, and section text that matches venue norms — without generic AI filler.

## First clarify (ask if unknown)

1. **Venue** — CS conference, journal, workshop, thesis, preprint
2. **Field / audience** — what readers already know
3. **Contribution type** — method, system, empirics, theory, survey, position
4. **Constraints** — page/word limits, anonymity, template (LaTeX/Word)
5. **Artifacts** — figures, tables, code, data availability

## Default IMRaD-ish outline (CS / STEM)

| Section | Skill to load |
| --- | --- |
| Abstract | `paper-abstract` |
| Introduction | `paper-introduction` |
| Related work | `paper-related-work` |
| Methods / approach | `paper-methods` |
| Results / evaluation | `paper-results` |
| Discussion | `paper-discussion` |
| Conclusion | `paper-conclusion` |
| Literature review (survey-heavy) | `paper-literature-review` |
| LaTeX mechanics | `latex-scientific-writing` |
| Revision pass | `paper-peer-review` |

## Workflow

1. **One-sentence contribution.** If this cannot be stated crisply, draft that before long prose.
2. **Outline with claims.** Each section should advance a claim or necessary context — cut ornamental subsections.
3. **Write in dependency order.** Often: methods/results spine → introduction → related work → abstract → conclusion. Adjust if the user prefers linear order.
4. **Load the section skill** for the active section; keep global voice consistent (tense, we/I, notation).
5. **Cross-check.** Claims in intro/abstract must appear in results; limitations belong in discussion; citations must support statements.
6. **Revise** with `paper-peer-review` before submission polish.

## Voice rules

- Prefer precise, concrete language over marketing adjectives
- Define acronyms **and coined terms** on first use, in the same sentence
- Separate facts, claims, and speculation
- Never invent citations, numbers, or quotes — mark placeholders as `[CITATION NEEDED]` / `[RESULT NEEDED]`
- No colloquial register; "percentage points" for differences between percentages
- Use the field's established term rather than a coined one where both fit

## The problem spine (check every revision)

Whatever the opening names as the problem is a promise. Trace each named problem
through the whole paper: it must be **named again** in the evaluation, the
discussion, and the conclusion, and answered or explicitly declared unanswered.
A named problem the paper never returns to is the single most repeated complaint
in real review, and reviewers raise it once per section until it is fixed.

Where evidence for two named problems differs in strength, say so rather than
letting the weaker ride on the stronger.

## Anti-patterns

- Writing the abstract before the contribution is stable
- Related work as an annotated bibliography with no synthesis
- Methods that cannot support the claimed evaluation
- Inflated novelty claims without comparison points
- Listing system components as contributions; an evaluation as a contribution
- Coined vocabulary in the abstract, explained only in the body
- A named problem that the evaluation and conclusion never mention again

## Additional resources

- [references/outline-template.md](references/outline-template.md)
- [references/reader-comprehension.md](references/reader-comprehension.md) —
  failure patterns from a real supervisor review, where a third of comments were
  "I do not understand what you mean". **Read before drafting front matter.**
