# Reviewing reproducibility, artifacts, and system contributions

Use this for artifact evaluation, ML/LLM papers, dataset/knowledge-graph papers, and tool/demo submissions.

## 1. Artifact availability

- [ ] Data, code, and supplementary material are **available**, not "available on request".
- [ ] Artifacts sit in a **persistent repository with a DOI** (Zenodo, figshare, an institutional repository), not only a GitHub URL that can be force-pushed or deleted.
- [ ] The version used for the reported results is identifiable (tag, commit, DOI version).
- [ ] A license is attached to both code and data, and it permits reuse.
- [ ] The artifact includes what is needed to *run* it: dependencies, entry point, expected runtime, and hardware.
- [ ] Documentation states what each artifact is and how it maps to the paper's tables and figures.

**Grade the claim, not the intent:** "available" means a reviewer clicked it and it resolved. Say so in the review when you did, and say so when you could not.

## 2. Reproducibility of the reported numbers

- [ ] Dataset provenance: source, version, snapshot date, and any filtering, with counts before and after.
- [ ] Dataset statistics table: entities/instances, classes/relations, train/validation/test sizes, and label distribution.
- [ ] Splits are described and, for benchmarks, match the standard splits — or the deviation is justified.
- [ ] Preprocessing is described at the level of "another team could redo it", including deduplication and filtering rules.
- [ ] Hyperparameters and the **search space** are reported, not just the winning values.
- [ ] Optimizer, learning rate, batch size, epochs, and early-stopping criteria are given.
- [ ] Hardware and runtime are reported (GPU type and memory, node/GPU count, wall-clock or GPU-hours).
- [ ] Random seeds and the number of repeated runs are stated; single-run results are labeled as such.
- [ ] Non-obvious algorithmic steps appear as pseudocode or equations, not only prose.

## 3. ML, LLM, and knowledge-graph specifics

- [ ] **Baselines are comparable.** A tuned proposed model versus an untuned baseline is not evidence. Baselines should receive the same data, the same fine-tuning regime, and a comparable budget.
- [ ] Model identity and size are pinned: exact checkpoint name and parameter count, not "GPT-4" or "a 7B model".
- [ ] For hosted LLMs: provider, model version/date, temperature and decoding settings, and prompt templates are given verbatim.
- [ ] Cross-scale comparisons (a 1B model against a 175B model) are framed as cost-effectiveness, not as beating the state of the art.
- [ ] Metric choice fits the output: exact-match and F1 for short factual answers; n-gram metrics degrade on long, list-valued, or reordered outputs — the paper should say so where relevant.
- [ ] Upstream component quality is reported when the pipeline depends on it (e.g. embedding-model MRR/Hits@k feeding a downstream QA model), and its correlation with downstream performance is discussed.
- [ ] Data contamination / leakage between pretraining, fine-tuning, and test sets is addressed.
- [ ] Ablations isolate the contribution of each component, with the same evaluation protocol.
- [ ] For generated artifacts (queries, summaries, labels): validation procedure, who validated, and inter-rater agreement.

## 4. FAIR and semantic-data contributions

For datasets, ontologies, and knowledge graphs:

- [ ] **Findable** — persistent identifier and rich metadata.
- [ ] **Accessible** — retrievable by a standard protocol; access conditions stated for restricted parts.
- [ ] **Interoperable** — a documented schema/vocabulary, reusing established vocabularies where they exist.
- [ ] **Reusable** — license, provenance, and enough documentation to reuse without contacting the authors.
- [ ] Curation and maintenance are addressed: who updates it, how errors are reported, and whether the data is versioned over time.
- [ ] Quality is characterized on more than size — completeness, correctness, and connectivity — with the method for assessing it stated.
- [ ] Where the data was crowdsourced or extracted automatically, the validation of correctness is described.

## 5. Tool and system papers

- [ ] Requirements (functional and non-functional) are stated and traceable into the architecture description.
- [ ] The architecture separates components clearly, and the description says which technology implements which requirement.
- [ ] Deployment is described well enough to install: dependencies, configuration, and how to run it locally.
- [ ] The system is reachable — a live URL, container image, or video demonstration — and the reviewer states whether it worked.
- [ ] Limits are declared (rate limits, cost caps, model defaults, data freshness).
- [ ] Known bugs observed during evaluation are reported rather than hidden; a prototype with documented rough edges is credible, a flawless-sounding prototype is not.
- [ ] The paper distinguishes what the system *does* from what has been *shown to help users*.

## 6. Ethics, human subjects, and disclosure

- [ ] Informed consent, voluntary participation, and withdrawal rights are documented for user studies.
- [ ] Personal data is anonymized or pseudonymized; recordings and their retention are covered by consent.
- [ ] Proprietary or restricted data (industry graphs, clinical data) has its access conditions and anonymization described.
- [ ] Third-party data licenses permit the reported use and redistribution.
- [ ] Generative-AI assistance in producing the manuscript, code, or analysis is disclosed with the scope of use, and the authors take responsibility for the content.
- [ ] Funding and competing interests are declared.

## Ready-made review phrasings

- "**Critical [Sec. 4]** — The contribution is the dataset, but only aggregate statistics are provided. Please deposit the data with a DOI and a license, or scope the contribution to the method."
- "**Major [Sec. 5.1]** — The proposed model is fine-tuned while the baseline is used zero-shot. Please either fine-tune the baseline on the same data or state explicitly that the comparison is not budget-matched."
- "**Major [Sec. 3.3]** — The LLM is identified only as 'GPT'. Please give the exact model version, decoding parameters, and the prompt template used for the reported runs."
- "**Minor [Sec. 6]** — Please state GPU type, memory, and total runtime so readers can estimate the cost of replication."
