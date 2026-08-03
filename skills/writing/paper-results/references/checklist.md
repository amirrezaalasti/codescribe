# Results checklist

## Pass 1 — Claim mapping

- [ ] Each experiment is traceable to a specific claim from the introduction/contributions
- [ ] The main result is presented first, before secondary analyses
- [ ] Every subsection opens with the takeaway sentence, then the supporting evidence

## Pass 2 — Fairness and rigor

- [ ] Baselines are described in enough detail to judge fairness (same data, tuning budget, model scale)
- [ ] Metrics are defined once, with direction stated (higher/lower is better)
- [ ] Uncertainty is reported when available: std, confidence interval, or multiple seeds — not a single run presented as definitive
- [ ] No numbers are invented; pending data uses an explicit placeholder like `[TABLE: main results]`

## Pass 3 — Honesty about the full picture

- [ ] Metrics that got worse, or results that are mixed, are shown and not quietly dropped
- [ ] Aggregates don't hide per-dataset or per-condition failures — per-condition numbers are available somewhere
- [ ] Statistical significance is not claimed where the test doesn't support it

## Pass 4 — Presentation

- [ ] Every figure/table is referenced in text and its key takeaway is spelled out, not left for the reader to infer
- [ ] Ablations isolate the components they claim to test (one change at a time, or the interaction is explicitly discussed)
- [ ] Qualitative examples add insight (an interesting failure/success), not just decoration
- [ ] Deep interpretation is deferred to Discussion — this section stays evidence-focused

See [examples.md](examples.md) for before/after rewrites and common failure patterns.
