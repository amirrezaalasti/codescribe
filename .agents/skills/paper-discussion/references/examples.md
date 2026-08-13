# Discussion: before/after and common failures

## Before/after rewrites

**Restating results instead of interpreting**
- Weak: "X achieved 84% accuracy, higher than baseline B's 78%."
- Strong: "X's 6-point gain over B concentrates on examples requiring multi-hop reasoning (Table 3); we attribute this to the retrieval step surfacing intermediate facts B's single-pass retriever misses."

**Fake-humility limitations**
- Weak: "Our study has some limitations and future work should address them."
- Strong: "Our evaluation covers English-language QA only; the calibration step relies on span-level confidence scores that have not been validated for morphologically richer languages, where span boundaries are less well-defined."

**Speculation unlabeled**
- Weak: "This suggests the method will generalize to other domains." (stated as fact)
- Strong: "We hypothesize this generalizes to other knowledge-intensive tasks, though we have only tested open-domain QA; validating this is future work."

**Ignoring a contradiction with prior work**
- Weak: silently reports a result opposite to a well-known prior finding, without comment
- Strong: "This contradicts [X], who found the opposite trend; the difference may stem from their use of a smaller retrieval corpus, which we test directly in Appendix C."

## Common failure → fix

| Failure | Why it hurts | Fix |
| --- | --- | --- |
| Discussion is Results reworded | Adds no value, wastes reader's time | Every paragraph must answer "why" or "so what," not "what" |
| Limitations only mention what wasn't tested, not what would break | Reader can't judge risk of misapplying the method | State the assumption and the failure mode if it's violated |
| Alternative explanations not considered | Reviewer raises the obvious confound the authors missed | Explicitly rule out or acknowledge the most likely alternative explanation |
| Marketing language ("this changes how the field...") | Reads as overreach relative to the evidence | Scope implications to what was actually shown |

## Reader test

For each paragraph, ask: does this sentence exist in the Results section already? If yes and it isn't adding a "why," cut it. Does every limitation name a concrete condition under which the method would fail, rather than a vague disclaimer? If not, sharpen it.
