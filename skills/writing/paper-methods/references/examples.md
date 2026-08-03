# Methods: before/after and common failures

## Before/after rewrites

**Vague design choice**
- Weak: "We use a standard transformer architecture for the encoder."
- Strong: "We use a 6-layer transformer encoder (d_model=512, 8 heads), replacing LayerNorm with RMSNorm because standard LayerNorm destabilized training at our batch size of 4k (Appendix B.2)."

**Unmotivated assumption**
- Weak: "Our method requires labeled data."
- Strong: "We assume access to a small labeled set (≥500 examples per class); Section 5.4 studies degradation as this shrinks toward zero."

**Hyperparameters buried or missing**
- Weak: "We train with standard hyperparameters until convergence."
- Strong: "We train with Adam (lr=3e-4, cosine decay), batch size 256, for 100 epochs with early stopping on validation loss (patience=10); 3 seeds per configuration."

**Method bleeding into results**
- Weak: "We apply pruning at each layer, which improves inference speed by 2.3x over the baseline."
- Strong (method): "We apply magnitude-based pruning at each layer with a target sparsity of 60%." — then move "improves inference speed by 2.3x" to Results.

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Overview skipped, straight into equations | Reader has no map before the details | Add one framing paragraph: problem, high-level idea, what section covers what |
| Symbol reused for two meanings | Silent ambiguity a reviewer will flag | Add a notation table; audit for reuse before submission |
| "We tried several configurations and picked the best" | Not reproducible, invites a-posteriori suspicion | State the search space and selection criterion, or move to an appendix with full grid |
| Compute/hardware omitted but timing is compared | Reader cannot judge if speedup is fair | Report hardware, software versions, and whether numbers are wall-clock or FLOPs |
| Evaluation protocol scattered across Methods and Results | Reader can't find splits when checking a result | Consolidate into one "Evaluation protocol" subsection, referenced from Results |

## Reader test

Before finalizing, ask: could a competent PhD student in an adjacent subfield re-implement the core idea (not the exact code) from this section alone, without contacting the authors? If any step requires "the usual way" without specifying it, expand that step.
