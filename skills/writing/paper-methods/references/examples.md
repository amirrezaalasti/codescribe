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

**Component presented but not motivated**
- Weak: "We introduce a parallel agent execution strategy. A planner decomposes the task and assigns subtasks to isolated agent instances."
- Strong: "Sequential execution of independent subtasks does not increase token cost, but it does add their durations into end-to-end latency (challenge C1). We therefore decompose independent subtasks across isolated agent instances; isolation is required because shared browser state would let one subtask invalidate another's session."

**Equation where a clause would do**
- Weak: two display equations defining $T_{\text{seq}} = \sum_i T_i$ and $T_{\text{par}} = \max_i T_i$, never referenced again.
- Strong: "In sequential execution, the runtime is the sum of the subtask runtimes; under parallel execution it is the runtime of the slowest subtask, so the benefit grows with the number of independent sources."

**Naming drift between text and figure**
- Weak: prose says "adaptive memory mechanism"; the figure labels the same block "Memory Evolution"; the summary calls it "graph memory."
- Strong: pick one name for the prose, and if the figure cannot be redrawn, reconcile it in the caption: "\emph{memory evolution} in the figure refers to the adaptive memory of Sections 4.2.5 and 4.2.6."

**Unjustified threshold**
- Weak: "a similarity above 0.75 retrieves context, while above 0.92 triggers direct replay." (only in a caption)
- Strong: "…the thresholds are asymmetric because the failure costs are: a wrongly retrieved episode costs a few tokens and can be ignored by the model, whereas a wrongly replayed one produces actions in a live environment. Both were fixed empirically during development and are configuration parameters, not learned quantities."

**Defending the organization instead of writing the content**
- Weak: "These limitations are not a restatement of the objectives of Section 1.2, and the two lists should be read as the two halves of Equation 1. … Table 4.1 records, for each challenge, which half of the equation it serves."
- Strong: "Section 1.2 expressed the goal as maximizing task success under a cost budget. The sub-objectives defined there describe what successful execution means, while the cost term was left open. Current systems fall short on both sides of this formulation, in four distinct ways."
- The relationship is asserted through content rather than through commentary about the writing. Signposting a chapter's structure is fine; justifying it is not.

**Abstract pipeline figure where an instance is needed**
- Weak: a diagram of boxes labelled *prune → convert → agent*, captioned as showing the reduction.
- Strong: keep the pipeline diagram for the stages, and add a second figure showing one real fragment before and after — the reader sees the reduction rather than being told it happens.

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Overview skipped, straight into equations | Reader has no map before the details | Add one framing paragraph: problem, high-level idea, what section covers what |
| Symbol reused for two meanings | Silent ambiguity a reviewer will flag | Add a notation table; audit for reuse before submission |
| "We tried several configurations and picked the best" | Not reproducible, invites a-posteriori suspicion | State the search space and selection criterion, or move to an appendix with full grid |
| Compute/hardware omitted but timing is compared | Reader cannot judge if speedup is fair | Report hardware, software versions, and whether numbers are wall-clock or FLOPs |
| Evaluation protocol scattered across Methods and Results | Reader can't find splits when checking a result | Consolidate into one "Evaluation protocol" subsection, referenced from Results |
| Overview box, challenges box, and principles box list the same four items | Reads as padding; the reader stops trusting the boxes | Keep one enumeration as the canonical labelled set, and let the others reference its labels instead of restating them |
| Long list of components with no preceding grouping | Reader cannot tell how many there are or when the list ends | Add a roadmap sentence and a mapping table; order the subsections to match |
| Figure appears before the paragraph that introduces it | Reader meets an unexplained object | Put the figure environment after the first `\ref` in the source; let the float algorithm place it |
| A term is defined in Background and used unexplained in Methods | Reader has to search backwards | One reminder clause plus a cross-reference at first reuse — not a re-explanation |

## Reader test

Before finalizing, ask: could a competent PhD student in an adjacent subfield re-implement the core idea (not the exact code) from this section alone, without contacting the authors? If any step requires "the usual way" without specifying it, expand that step.
