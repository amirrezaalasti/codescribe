---
name: paper-peer-review
description: >-
  Review academic papers, theses, and tool/demo submissions with constructive,
  severity-tagged feedback on contribution, method rigor, statistics, validity
  threats, and artifact availability. Use when peer-reviewing a manuscript or
  thesis chapter, assessing an empirical study, experiment, or evaluation plan,
  checking reproducibility, open-science artifacts, or research questions, or
  when revising a manuscript from reviewer critique.
license: MIT
metadata:
  author: amirrezaalasti
  version: "2.0"
  category: writing
---

# Paper Peer Review

## Goal

Help the authors improve the work. Every comment names the problem, points at a location, and proposes a concrete fix.

## Read in this order

Judge the science before the prose. Deep prose nits on a paper with an unsound evaluation waste everyone's time.

1. **Abstract + contribution list** — what is claimed?
2. **Research goal / questions** — is the claim operationalized into answerable questions?
3. **Method and evaluation design** — could this design answer those questions?
4. **Results tables and figures** — do the numbers support the claims, including the unflattering ones?
5. **Threats to validity / limitations** — did the authors find the holes you found?
6. **Artifacts and data availability** — can anyone replicate this?
7. **Related work positioning**, then writing, structure, and figures.

## Review dimensions

| # | Dimension | What "good" looks like |
| --- | --- | --- |
| 1 | **Contribution** | Contributions are enumerated and each is traceable to a section, result, or artifact. Novelty is a stated delta over named prior work, not "to the best of our knowledge". |
| 2 | **Goal & questions** | A goal statement (analyze X / for the purpose of Y / with respect to Z / from the perspective of W / in the context of V) and RQs that are explicitly revisited and answered in the conclusion. |
| 3 | **Method soundness** | The design can answer the RQs; hypotheses, variables, and metrics are fixed before the data, not after. Baselines are matched in knowledge and budget. |
| 4 | **Results & statistics** | Correct test for the data, effect sizes, multiple-comparison correction, and negative results reported rather than buried. |
| 5 | **Validity** | Construct, internal, external, and conclusion validity discussed with mitigations — not one generic paragraph. |
| 6 | **Reproducibility** | Data, code, prompts, hyperparameters, and hardware documented; artifacts in a persistent repository with a DOI. |
| 7 | **Related work** | Synthesized into themes with an explicit "we go beyond this by …", not a list of paper summaries. |
| 8 | **Clarity** | Every figure/table is referenced, interpreted in the text, and legible at print size; terminology and acronyms are consistent. |
| 9 | **Ethics & disclosure** | Human-subject consent, anonymization, data licensing, and any generative-AI assistance are declared. |

## Non-negotiable rigor gates

Flag as **Critical** when any of these fails:

- **Claim–evidence mismatch.** Abstract or conclusion claims more than the results show — "significant improvement" where the paired test was not significant, or where a reported metric declined.
- **A-posteriori hypotheses.** Thresholds, cutoffs, or success criteria that appear chosen after seeing the results.
- **Unfair baselines.** The proposed system gets fine-tuning, extra data, or a larger budget the baseline did not — or the comparison silently mixes model sizes and calls it a win.
- **Missing statistics.** Point estimates compared without variance, sample size, a named test, or an effect size; repeated testing without correction.
- **Untestable evaluation.** No stated success criterion, so no result could have falsified the claim.
- **Unavailable artifacts** when the contribution *is* the dataset, graph, or tool.

## Severity tags

| Tag | Meaning |
| --- | --- |
| **Critical** | Blocks acceptance or trust — unsound claims, missing or invalid evaluation, ethics, undisclosed conflicts |
| **Major** | Should be fixed for a strong paper — weak baseline, missing threat, unexplained metric drop, unsupported generalization |
| **Minor** | Clarity, structure, figure legibility, terminology, typos |

Do not upgrade a Minor to Major to look thorough, and do not bury a Critical among nits.

## Output format

```markdown
## Summary
2–4 sentences: what the paper does, its main claim, and the overall tone of the recommendation.

## Strengths
- Concrete: "the paired t-test per dataset makes the gains credible", not "well written".

## Critical
- [Section 5.2 / Table 4] <problem> — <why it breaks the claim> — <concrete fix or the evidence needed>

## Major
- …

## Minor
- …

## Questions for authors
1. …

## Verdict (optional)
Accept / Weak accept / Borderline / Weak reject / Reject — one justification line.
```

Anchor every item to a section, table, figure, or line. An unlocatable comment cannot be acted on.

## Reviewer rules

1. Review the paper that was written, not the one you would have written.
2. Never invent citations, baselines, or results. If you believe prior work exists, name it or ask the authors.
3. Ask for an experiment only when it is feasible in a revision cycle and would change the conclusion.
4. Keep scientific problems and writing polish in separate bullets.
5. Credit honesty. A reported negative result or a metric that declined is a strength — ask for the explanation, not for its removal.
6. Judge against the venue: a tools/demo track owes a system design, workflows, availability, and an evaluation *plan*; a full paper owes an executed evaluation.
7. State your own uncertainty instead of asserting a weakness you cannot support.

## Revision mode

When the user is applying a review instead of writing one:

1. Table every review item: severity, reviewer, section, and required change (new experiment / new analysis / rewrite / response-letter only).
2. Split into **must-fix before resubmission** and **argue in the response letter**.
3. Where you disagree with a reviewer, draft a polite response backed by evidence already in the paper — never silently drop the item.
4. Draft the section patches with the matching skill: `paper-abstract`, `paper-introduction`, `paper-methods`, `paper-results`, `paper-discussion`, `paper-conclusion`, `paper-related-work`.

## Additional resources

- [references/checklist.md](references/checklist.md) — pass-by-pass review checklist
- [references/empirical-study-review.md](references/empirical-study-review.md) — hypotheses, statistical tests, effect sizes, validity threats
- [references/reproducibility-review.md](references/reproducibility-review.md) — artifacts, FAIR data, ML/LLM reporting, tool-paper criteria
