# Peer review checklist

Work top to bottom. Stop and write the review as soon as a Critical gate fails — do not spend the pass on typos.

## Pass 1 — Claim

- [ ] Contribution list is explicit and each item is traceable to a section, result, or artifact
- [ ] Research goal and questions are stated, and every RQ is answered in the conclusion
- [ ] Abstract, introduction, results, and conclusion claim the *same* thing
- [ ] Novelty is expressed as a delta over named prior work
- [ ] Claim scope matches the evidence (no "in general" from one dataset or one domain)

## Pass 2 — Method and evaluation

- [ ] The design can answer the RQs
- [ ] Hypotheses, thresholds, and success criteria were fixed before the results
- [ ] Baselines are matched in data, tuning, and budget; their setup is described
- [ ] Metrics are defined, directional, and appropriate to the output format
- [ ] Datasets/participants described with counts, provenance, and splits
- [ ] Ablations isolate the claimed components

## Pass 3 — Statistics

- [ ] Distribution checked before test selection; the check is reported
- [ ] Test matches the data type and design
- [ ] Multiple comparisons corrected; adjusted values reported
- [ ] Effect sizes reported alongside p-values
- [ ] Descriptives (n, mean/median, SD) present per group
- [ ] Negative and declining results reported and explained

See [empirical-study-review.md](empirical-study-review.md).

## Pass 4 — Validity and limitations

- [ ] Construct, internal, external, and conclusion validity each addressed concretely
- [ ] Each threat has a mitigation or an explicit acknowledgement
- [ ] Limitations section does not quietly retract an abstract-level claim
- [ ] Generalization boundaries stated

## Pass 5 — Reproducibility and ethics

- [ ] Code, data, and supplementary artifacts available in a persistent repository with DOI and license
- [ ] Hyperparameters, search space, hardware, runtime, seeds, and repetitions reported
- [ ] Model versions and prompts pinned for LLM-based work
- [ ] Consent, anonymization, and data licensing documented
- [ ] Generative-AI assistance disclosed

See [reproducibility-review.md](reproducibility-review.md).

## Pass 6 — Positioning and presentation

- [ ] Related work synthesized into themes with an explicit differentiation statement
- [ ] Citations support the specific sentences they are attached to
- [ ] Every figure and table is referenced and interpreted in the text
- [ ] Figures legible at print size; axes labeled with units and direction
- [ ] Terminology, acronyms, and notation consistent throughout
- [ ] Structure follows the venue's expectations and length limits

## Before sending

- [ ] Every item anchored to a section, table, figure, or line
- [ ] Every Critical/Major item has a concrete fix or a named piece of missing evidence
- [ ] Strengths section is specific, not ceremonial
- [ ] No invented references, baselines, or results
- [ ] Tone addresses the work, never the authors
- [ ] Severity assignments re-checked: nothing inflated, nothing buried
