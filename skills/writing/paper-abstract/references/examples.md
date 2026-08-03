# Abstract: before/after and common failures

## Before/after rewrites

**Vague result**
- Weak: "Our method achieves promising results on several benchmarks."
- Strong: "Our method reduces unsupported claims by 34% on TruthfulQA while preserving answer accuracy within 1 point of the baseline."

**Hype without substance**
- Weak: "We propose a novel and groundbreaking approach to retrieval-augmented generation."
- Strong: "We propose a calibration step that flags low-evidence spans before generation, addressing hallucination in retrieval-augmented generation."

**Gap stated too broadly**
- Weak: "Prior work on X has several limitations."
- Strong: "Prior calibration methods assume complete evidence; they degrade sharply when retrieval returns partial or conflicting passages."

**Claim stronger than the body supports**
- Weak abstract: "X consistently outperforms all baselines."
- Body actually shows: wins on 3/4 datasets, ties on the 4th.
- Fix: "X outperforms baselines on 3 of 4 benchmarks and matches the strongest baseline on the fourth."

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Abstract written first and never revisited | Drifts from what the paper ends up showing | Draft last, or add a final "does every sentence still match the body?" pass |
| One overloaded sentence covers method + results + implication | Reader can't parse what actually happened | Split into separate sentences, one job each |
| Scope silently widens ("improves reasoning" from one math benchmark) | Reviewers flag overclaiming immediately | Name the actual benchmark/domain tested |
| Numbers present in body but abstract stays qualitative | Undersells a paper that has real evidence | Pull the single most important number into the abstract |

## Reader test

Read only the abstract, then only the body. Could you predict every abstract sentence from the body? If a sentence in the abstract surprises you after reading the body, either the abstract overclaims or the body underdelivers — fix whichever is true.
