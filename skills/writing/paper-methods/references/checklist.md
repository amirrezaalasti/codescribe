# Methods checklist

Work top to bottom. A method a skilled reader cannot redraw or reimplement from the prose alone fails Pass 2 regardless of how polished Pass 1 reads.

## Pass 1 — Framing and scope

- [ ] The opening paragraph states, in one sentence a non-specialist in the subfield could follow, what problem the method solves
- [ ] Assumptions (data availability, i.i.d., access to gradients, compute budget, etc.) are stated before they are relied on, not discovered mid-derivation
- [ ] Scope limits are explicit — what the method does *not* claim to handle
- [ ] A diagram or algorithm box is referenced if the design has more than ~3 moving parts

## Pass 2 — Notation and problem setup

- [ ] Every symbol is defined at or before first use
- [ ] A notation table exists if the section uses more than ~8 symbols
- [ ] Inputs, outputs, and the objective/loss are stated precisely enough to distinguish this method from a superficially similar one

## Pass 3 — Core method

- [ ] A reader could redraw the architecture/algorithm from the prose without seeing the figure
- [ ] Every non-obvious design choice is justified in one sentence: why this and not the standard alternative
- [ ] Steps are described in the order they execute, not the order they were discovered
- [ ] Edge cases the algorithm must handle (empty input, ties, non-convergence) are addressed or explicitly out of scope

## Pass 4 — Implementation and reproducibility

- [ ] Hyperparameters that change the result if perturbed are listed with values, not "standard settings"
- [ ] Hardware/software versions are documented if performance or timing claims depend on them
- [ ] Randomness sources (seeds, initialization, sampling) are named if results are stochastic
- [ ] Code/data availability is pointed to, or its absence is acknowledged

## Pass 5 — Separation from evaluation

- [ ] Train/val/test protocol is described here (or clearly deferred to a named subsection/section)
- [ ] No results, comparisons, or interpretive claims have leaked into the method description
- [ ] Method and evaluation protocol are distinguishable by a reader skimming section headers alone

See [examples.md](examples.md) for before/after rewrites and common failure patterns.
