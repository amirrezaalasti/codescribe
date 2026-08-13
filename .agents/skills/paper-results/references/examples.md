# Results: before/after and common failures

## Before/after rewrites

**Figure dumped without a takeaway**
- Weak: "Figure 3 shows the results across datasets."
- Strong: "Table 1 shows that X improves F1 by 4.2 points over the strongest baseline B on D, with the gap widening on the low-resource subset (Figure 3)."

**Declining metric hidden**
- Weak: table reports only BLEU, omits that ROUGE-L declined for the same model, mentioned nowhere in text
- Strong: "BLEU-4 improves by 2.1 while ROUGE-L declines by 0.8; we attribute this to n-gram precision penalizing our longer, list-formatted answers (Section 5.2 shows example outputs)."

**Unfair baseline comparison**
- Weak: "Our method (fine-tuned on 50k examples) outperforms the zero-shot baseline by 12 points."
- Strong: "We compare against a fine-tuned baseline trained on the same 50k examples (Table 2) as well as a zero-shot baseline, to separate the effect of fine-tuning from our method's contribution."

**Ablation that doesn't isolate the claim**
- Weak: "Removing component C and simplifying the loss both at once drops accuracy by 5%."
- Strong: "Removing only component C (loss unchanged) drops accuracy by 3.1% (Table 4, row 2); simplifying the loss alone drops it by 1.4% (row 3) — the two effects are roughly additive."

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Results section reads as raw tables with no prose takeaway | Reader has to do the interpretation the authors should have done | Lead every subsection with one sentence stating what the evidence shows |
| Single-seed number presented as the result | Can't distinguish signal from noise | Report mean ± std (or CI) over ≥3 seeds for stochastic methods |
| Ablation changes two things at once | Can't attribute the effect to either component | Change one factor at a time; if interaction matters, report it explicitly as an interaction |
| Metric declines omitted from the narrative | Looks like selective reporting when a reviewer finds it in the table | State the decline and give the best available explanation |
| Figure never mentioned in text | Reader doesn't know what to look for | Reference every figure/table by number and state its takeaway |

## Reader test

For each table/figure, could a reader state the one-sentence takeaway without reading the caption twice or cross-referencing another section? If not, add the missing framing sentence before the table.
