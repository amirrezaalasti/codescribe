# Literature review: before/after and common failures

## Before/after rewrites

**Summary instead of synthesis**
- Weak: "Paper A studied X in domain D1. Paper B studied X in domain D2. Paper C proposed a variant of X."
- Strong: "Studies of X converge on domains with abundant labeled data (A, C); B is the exception, showing X degrades sharply under label scarcity — suggesting the field has not tested X's core assumption outside its comfort zone."

**Vague gap statement**
- Weak: "More research is needed on this topic."
- Strong: "No reviewed study measures X under concept drift, despite drift being common in the deployment settings these papers target (D3, D4)."

**Conflicting findings ignored**
- Weak: "Some studies report gains from X, while others do not." (left unexplained)
- Strong: "Gains from X appear only in studies using metric M1 (A, C); studies using M2 (B, D) report no effect — consistent with M1 rewarding exactly the behavior X optimizes for, a known confound noted by [E]."

**Annotated bibliography structure**
- Weak: one paragraph per paper, ordered by publication year, no cross-references
- Strong: organized by theme (e.g., "Approaches assuming full supervision," "Approaches under weak supervision"), each theme synthesizing 3-6 papers with an explicit shared-assumption sentence

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Search strategy unstated | Reader can't judge coverage or replicate the review | Name databases/venues, search terms or snowballing seed set, and inclusion criteria |
| Every paper gets equal space regardless of relevance | Buries the important sources in noise | Scale space to relevance; group peripheral work into one summarizing sentence |
| Gap already addressed by a cited paper | Undermines the review's credibility | Re-check the strongest sources before finalizing the gap claim |
| Taxonomy implied but not shown | Reader has to reconstruct the classification themselves | Add a table or figure mapping papers to the stated themes/dimensions |

## Reader test

Pick any two sources in the same theme. Does the review state, in one sentence, what they share and where they diverge? If you can only say what each did separately, it is a summary, not a synthesis — rewrite the paragraph around the shared claim.
