---
name: paper-methods
description: >-
  Write methods and approach sections that specify the design clearly enough for
  skilled readers to understand and reproduce the core idea. Use when drafting
  methodology, approach, system design, experimental setup, or algorithm
  sections of a research paper.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.1"
  category: writing
---

# Paper Methods / Approach

## Purpose

Explain **what you did** and **why those choices** — with enough detail for reproduction of the main idea (and pointers to appendices/code for full detail).

## Recommended structure

1. **Overview** — one paragraph + optional diagram reference
2. **Problem setup / notation** — inputs, outputs, assumptions
3. **Core method** — algorithms, architecture, protocol, proof sketch
4. **Implementation details** — only what affects interpretation
5. **Experimental setup** (if combined) — datasets, baselines, metrics, splits, compute

If the venue separates “Method” and “Experiments,” put setup with results or a dedicated setup subsection — match the template.

## Instructions

1. Define symbols before use; keep a consistent notation table if dense.
2. Prefer precise procedural description over metaphors.
3. Justify non-obvious design choices in one sentence each.
4. Separate **method** (your contribution) from **evaluation protocol**.
5. Call out assumptions and scope limits early.
6. For human/animal/user studies: ethics, recruitment, and consent as required.
7. Point to code/data availability statements when artifacts exist.

## Section-level coherence (the most common reviewer complaint)

A methods section is judged as a chain, not as a set of parts. Reviewers rarely object to a component; they object to not knowing **why it is there**.

1. **One spine, named once.** Establish a chain of the form *challenge → design principle → component → section*, give each element a stable label (`C1`–`Cn`, `P1`–`Pn`), and reuse those labels verbatim everywhere afterwards. Never introduce a synonym for a component you have already named — "adaptive memory" in the prose and "memory evolution" in the figure reads as two different things.
2. **Make the spine visible as a table.** When a section presents more than ~4 components, a mapping table (challenge | principle | component | section) does more for the reader than any amount of connective prose, and it converts a flat enumeration into a structure.
3. **No orphan boxes or lists.** Every highlighted box, bullet list, or callout must be referenced by the running text and must have a distinct job. Four overlapping lists — key components, challenges, principles, contributions — that each restate the same four items is the classic failure. Merge them or delete all but one.
4. **Transition before you switch mode.** When moving from motivation to problem statement, or from problem to solution, one sentence must say *why this comes next*. A reader who does not know why a problem statement follows the overview stops reading it as an argument.
5. **Roadmap before a long list.** Before a run of subsections, state how many there are, how they group, and what each group discharges. Present the components in that stated order.
6. **Justify every design choice at the point it appears** — one sentence: why this, not the obvious alternative. Presenting a mechanism is not motivating it.
7. **Uniform depth across parallel subsections.** If one component ends with a benefits list, all comparable components need one; a missing one reads as an omission, not as brevity.
8. **Magic numbers are justified where they first appear.** Any threshold, top-*k*, or weight stated in prose, a figure, or a caption needs its rationale and its provenance (tuned, taken from prior work, or a configuration default) at first mention.

## Math with a job

Display equations are expensive: they break the reading flow and claim significance. Include one only when it does something a sentence cannot.

- **Keep** when it defines notation reused later, states a non-obvious relation, or fixes a quantity the evaluation will measure.
- **Cut** when the sentence is shorter than the equation. "In sequential execution the runtime is the sum of the subtask runtimes; in parallel execution it is the maximum" beats three display lines defining $T_{\text{seq}}$ and $T_{\text{par}}$ that are never referenced again.
- **Consistency rule:** if a section formalizes three of its four claims, formalize the fourth or drop the formalism from all — a lone unformalized claim reads as disconnected from the rest.
- Every equation that survives should either be referenced later or define a symbol used later.

## Reproducibility minimum

Readers should learn:

- Inputs and preprocessing
- Model/algorithm hyperparameters that matter
- Train/val/test splits or evaluation protocol
- Hardware/software when performance claims depend on them

## Anti-patterns

- Pseudo-methods that only restate the intro
- Hiding critical parameters
- Mixing results into methods
- Unreadable walls of equations without intuition
- The same four items restated as a components box, a challenges box, a principles box, and a summary paragraph
- Component names that drift between prose, figures, and captions
- A schematic of a pipeline offered where a concrete before/after example is what the reader needs
- A long enumeration of mechanisms with no preceding overview of how many there are or how they group
- Figures placed before the text that first refers to them
- Prose that defends the section's own organization — "this is not a restatement of", "these are not an unordered collection of", "the two lists should be read as" — which argues with an imagined reviewer instead of writing for a reader

## Checklist

See [references/checklist.md](references/checklist.md).

## Additional resources

- [references/examples.md](references/examples.md) — before/after rewrites and common failure → fix table
