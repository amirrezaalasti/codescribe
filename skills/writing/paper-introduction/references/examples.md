# Introduction: before/after and common failures

## Before/after rewrites

**Filler opening**
- Weak: "In recent years, machine learning has transformed many fields, including natural language processing."
- Strong: "Retrieval-augmented generators cite passages that do not support their answers in up to 30% of responses on open-domain QA — a gap that blocks their use in settings that require verifiable answers."

**Gap too broad**
- Weak: "Prior work on calibration has several limitations."
- Strong: "Existing calibration methods assume the evidence set is complete; none address the common case where retrieval returns partial or conflicting passages."

**Contributions as table of contents**
- Weak:
  ```
  1. We describe our method.
  2. We present experiments.
  3. We discuss the results.
  ```
- Strong:
  ```
  1. We introduce X, a calibration step that flags low-evidence spans before generation.
  2. We show X reduces unsupported claims by 34% on TruthfulQA without hurting answer accuracy.
  3. We analyze failure cases and show they concentrate on multi-hop questions (Section 5.3).
  ```

**Approach sketch spoiling methods**
- Weak: "We compute a confidence score using a 3-layer MLP trained with binary cross-entropy on human-annotated spans, with dropout 0.3 and..."
- Strong: "We introduce a lightweight scoring step that estimates evidence sufficiency before generation; Section 3 details the model and training."

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Long historical tour before the gap | Buries the actual contribution under context the reader doesn't need yet | Start from the concrete problem; move history to Related Work |
| Contributions unfalsifiable ("we explore the space of...") | Reader can't check whether the paper delivered | Rewrite as "we show/propose/prove X", each checkable against a section |
| Gap named but never revisited | Reviewer wonders if the paper actually addresses it | Make sure Discussion/Conclusion explicitly closes the loop on the stated gap |
| Roadmap missing on a long or nonstandard paper | Reader loses track of structure | Add one short paragraph previewing section order |

## Reader test

Cover the rest of the paper. From the introduction alone, could a reader state the paper's contribution in one sentence and predict roughly what Section 3 and Section 5 will contain? If not, the introduction is doing too little (or too much) work.
