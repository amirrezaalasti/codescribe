# Related work: before/after and common failures

## Before/after rewrites

**Citation dump (no synthesis)**
- Weak: "Smith et al. [1] proposed method A. Jones et al. [2] proposed method B. Lee et al. [3] extended A with C."
- Strong: "Methods following the retrieval-then-rerank paradigm [1,3] improve precision but assume a single relevant passage exists; [2] relaxes this by aggregating over multiple passages, at the cost of higher latency. Our method targets the case both leave open: conflicting, not just multiple, passages."

**Missing positioning**
- Weak: "...Table 1 summarizes these approaches." (section ends, no relation stated)
- Strong: "...Table 1 summarizes these approaches. In contrast, we do not require passage-level labels at training time, which lets our method scale to unlabeled corpora (Section 3)."

**Strawmanning a baseline**
- Weak: "Unlike [4], which naively concatenates all passages, we..."
- Strong (if [4] made a deliberate design choice): "Unlike [4], which concatenates passages to preserve cross-passage attention at the cost of context length, we use a two-stage filter that keeps this benefit while reducing input size."

**Overclaiming novelty**
- Weak: "We are the first to apply calibration to retrieval-augmented generation."
- Fix: verify against the literature first; if [5] did this for a narrower setting, write "[5] applies calibration to single-passage RAG; we extend this to the multi-passage, conflicting-evidence setting."

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Chronological history when it isn't the point | Reads as a survey, not positioning | Reorganize by theme/dimension unless the history itself is the contribution |
| Related work never mentions this paper's differences | Reader has to infer novelty themselves | Add an explicit "in contrast, we..." at the end of each theme |
| Only weak baselines discussed | Reviewer assumes the strong ones were avoided on purpose | Include and fairly characterize the strongest comparable work, even if it's uncomfortable |
| Quotes instead of paraphrase | Reads as padding, risks misrepresenting nuance | Paraphrase the specific claim being compared, cite for attribution |

## Reader test

For each theme, could a reader state — without reading the rest of the paper — what this work does differently and why that difference matters? If the answer requires reading Methods first, add the missing positioning sentence here.
