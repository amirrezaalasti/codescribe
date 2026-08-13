# Reviewing empirical studies and experiments

Use this when the paper reports a controlled experiment, user study, benchmark comparison, or any quantitative evaluation.

## 1. Goal and research questions

- [ ] The goal is stated in a template a reader can check, e.g. **analyze** *object* **for the purpose of** *purpose* **with respect to** *quality focus* **from the perspective of** *stakeholder* **in the context of** *setting*.
- [ ] Research questions follow from the goal and are numbered.
- [ ] Each RQ is answered explicitly in the conclusion, including the ones that came out negative or inconclusive.
- [ ] Nothing is claimed in the abstract that no RQ investigated.

**Common failure:** RQs stated in the introduction and never mentioned again. Ask for an explicit "revisiting the research questions" pass.

## 2. Hypotheses and variables

- [ ] Null and alternative hypotheses are stated per measured construct, with the threshold given *before* the results (e.g. "H0: task time ≥ 5 min", "H1: < 5 min").
- [ ] The threshold is justified — from prior work, a standard, or a stated design intent — not asserted.
- [ ] Independent and dependent variables are tabulated, with objective and subjective measures separated.
- [ ] Multi-dimensional constructs are decomposed rather than reported as one number. Usability, for instance, decomposes into effectiveness, efficiency, and satisfaction (ISO 9241-11); "the tool is usable" is not a measurement.
- [ ] Objective measures (task completion time, success/failure) are recorded independently of self-report, and disagreements between the two are discussed.

**Flag:** a subjective Likert scale used as the sole evidence for an objective claim ("participants felt it was fast" ≠ "it is fast").

## 3. Participants, sample, and materials

- [ ] Sampling strategy named (convenience, random, purposive) and population described.
- [ ] Sample size given; power or the lack of it acknowledged for small n.
- [ ] Prior exposure of participants to the artifact is reported — and its effect tested, not assumed away. Correlating prior exposure against the outcome measures (e.g. Spearman's ρ) and reporting non-significance is the right move.
- [ ] Task order: randomized, or the learning effect acknowledged as a threat when tasks build on one another.
- [ ] Setting differences (in-person vs. remote, own vs. provided hardware) are reported and their impact discussed.
- [ ] Instruments (task sheets, questionnaires, interview guides) are included or linked, not just described.
- [ ] Attention/control items are included in questionnaires, and placed last so they do not prime earlier answers.

## 4. Statistical analysis

- [ ] Normality is checked (e.g. Shapiro-Wilk) **before** a test is chosen, and the check is reported.
- [ ] Test matches the data: parametric (t-test) only for normally distributed data, otherwise non-parametric (Wilcoxon signed-rank, Mann-Whitney).
- [ ] Multiple comparisons are corrected (Bonferroni-Holm or equivalent) whenever the same construct is tested repeatedly, and the adjusted p-values are the ones reported.
- [ ] Effect sizes accompany p-values (Cohen's d, r, ρ) — significance without magnitude is not a result.
- [ ] Descriptive statistics (mean, median, SD, variance, n) are given per group, not only test statistics.
- [ ] Outliers are shown (boxplots) and discussed, not silently dropped.
- [ ] Correlation is not reported as causation, and non-significant correlations are not narrated as trends.

**Flag as Critical:** a "significant" claim where p > α after correction; a test chosen without a normality check; five tests run and one significant result headlined.

## 5. Results reporting

- [ ] Every metric in the table is defined somewhere, with its direction (higher/lower is better).
- [ ] Deltas are reported against a stated baseline, and the baseline is described in enough detail to judge fairness.
- [ ] Metrics that got worse are shown and explained. An honest explanation of *why* a metric declined — e.g. n-gram precision penalizing long, list-valued answers — is worth more than a table with the loss removed.
- [ ] Where multiple metrics disagree, the paper says which one it trusts for the claim and why.
- [ ] Aggregates do not hide per-dataset or per-condition failures; per-condition results are available.
- [ ] Variance across runs is reported for stochastic methods (mean and SD over repeated runs), not a single lucky seed.

## 6. Threats to validity

Expect four categories, each with concrete, paper-specific threats and mitigations. A single paragraph of boilerplate is a **Major** issue.

| Category | Ask |
| --- | --- |
| **Construct** | Do the measures capture the intended construct? Is "success" defined before coding, and are alternative valid solution paths accounted for? Is a single-treatment design acknowledged? |
| **Internal** | Learning/maturation effects, instrumentation problems (tool bugs during the study), experimenter expectancy, selection effects. Is causal direction ambiguous between the treatment and participant skill? |
| **External** | Is the sample representative of the target population? Do the tasks resemble real work, or only demonstrate the tool? What generalization is *not* claimed? |
| **Conclusion** | Assumptions of the statistical tests, fishing / error rate over multiple tests, reliability of measures, standardized treatment implementation across sessions. |

- [ ] Threats the reviewer can find are already listed by the authors.
- [ ] Each threat has a mitigation or an explicit "not mitigated" statement.

## 7. Evaluation plans (tool/demo/registered-report tracks)

When evaluation is planned rather than executed:

- [ ] The plan is staged (short / mid / long term) with the method named per stage.
- [ ] Each stage names what is measured, from whom, and how participants will be recruited.
- [ ] Success criteria are stated in advance.
- [ ] Claims in the abstract are limited to what the *implemented* system does — capabilities, not effectiveness.

**Flag:** an unevaluated tool whose abstract claims improvement in user outcomes.

## Ready-made review phrasings

- "**Critical [Sec. 6.2]** — H1 is accepted for RQ3, but the reported p = .06 after Bonferroni-Holm correction. Either report this as inconclusive or justify the uncorrected value."
- "**Major [Table 5]** — BLEU-4 declines for all three models while the abstract reports 'consistent improvement'. Please reconcile, or scope the claim to EM/F1/ROUGE and explain the n-gram behavior."
- "**Major [Sec. 7.4]** — Participants were drawn from the team that co-designed the tool. Please report prior exposure per participant and test whether it correlates with task success."
- "**Minor [Fig. 3]** — Axis units are missing; state whether lower is better."
