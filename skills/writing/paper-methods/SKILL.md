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
  version: "1.0"
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

## Checklist

See [references/checklist.md](references/checklist.md).
