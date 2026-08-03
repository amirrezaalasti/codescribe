# Conclusion: before/after and common failures

## Before/after rewrites

**Padding opener**
- Weak: "In this paper, we have proposed a novel method for addressing the problem of hallucination in retrieval-augmented generation."
- Strong: "We introduced X to address unsupported claims in retrieval-augmented generation."

**Vague future work**
- Weak: "Future work includes more experiments and testing on more datasets."
- Strong: "Future work includes extending calibration to multi-hop questions, where evidence sufficiency is harder to define per-span (Section 5.3), and validating the approach on non-English corpora."

**New claim introduced too late**
- Weak: conclusion states "X generalizes across domains" when Results only tested one domain
- Strong: "Within the QA domain tested, X reduces unsupported claims by 34%; whether this holds for other knowledge-intensive tasks remains open."

**Inspirational but empty ending**
- Weak: "We believe this work paves the way for a new era of trustworthy AI systems."
- Strong: "By making evidence sufficiency explicit before generation, X offers a concrete lever other calibration methods can build on."

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Full recap of every result | Redundant with abstract and results; wastes reader's time | Summarize only the headline finding(s) |
| Claim in conclusion stronger than in discussion | Reads as walking back honesty established earlier | Re-check every conclusion sentence against the discussion's stated scope |
| Future work identical to stated limitations, no added specificity | Feels like filler | Turn each limitation into a concrete next step: what experiment or method change would address it |
| Conclusion introduces a citation or number not seen before | Breaks the "no new claims" rule, surprises the reader | Move any new material to Results/Discussion, or cut it |

## Reader test

Read only the abstract and conclusion back to back. Do they agree on what was shown and how strongly? If the conclusion says anything the abstract doesn't (or vice versa), reconcile them before submission.
