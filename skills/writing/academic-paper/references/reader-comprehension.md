# Reader comprehension: failure patterns from real supervisor review

Distilled from a full annotation pass by a senior reviewer on a systems paper
draft. Roughly a third of the comments were variants of *"I do not understand
what you mean"* — not a style complaint, a comprehension failure. These are the
patterns that produced them, as failure → rule.

## The governing failure

**You write from inside the work; the reader is outside it.** The verbatim
comment: *"you use a lot of your prior knowledge that a reader lacks."* Every
pattern below is a special case. The test is not "is this sentence true and
precise" but "can a reader who has not built this system parse it on first
pass."

## 1. Terms used before they are defined

The draft's abstract used four coined terms — *compaction*, *projection*,
*coverage manifest*, *terminal claim* — all explained only in Section 4.
Comments: *"What is page capture?"*, *"what is it?"*, *"you also use this term
in the abstract. but here you first explain it. which makes the abstract hard to
understand."*

- A coined term is a promise the reader can cash immediately or not at all.
- In the abstract, describe the mechanism in ordinary words; introduce the label
  in the body where it earns its keep.
- On first use in the body, define in the same sentence, not the next paragraph.

## 2. The core idea arrives too late

*"I need to read almost a page before i really understood what you mean."* The
reviewer then wrote the idea back in two plain sentences and added: *"this
rather simple formulation must be presented earlier."*

- Put a plain-language statement of the whole idea in the first or second
  paragraph, before any formalism, using no coined vocabulary.
- If a reviewer can restate your idea more simply than you did, their sentence
  is the better opening. Use it.

## 3. Near-synonyms left undistinguished

The draft used *complete*, *finish*, and *successful* interchangeably. Comments:
*"finish vs. completed vs. successfully done? i think we must phrase clearly
what we mean"*, and separately *"are you sure that they can complete them? …
the question is if the agent was successful."* Same for *deployment* vs
*application*: *"i think they can be easily deployed, but their application/use
is the problem."*

- Where a distinction carries the argument, define it explicitly and early, then
  hold to it. One sentence naming who decides what is usually enough.
- Check every near-synonym pair the paper leans on. A reader cannot infer that
  two words mean different things unless told.

## 4. Claims that contradict across sections

Abstract said cost and unreliability *block deployment*; the introduction said
such agents *are already deployed commercially*. Comment: *"here is a
contradiction with your abstract."*

- After each revision, reread the abstract against the introduction and the
  conclusion as a set. Contradictions live at section boundaries, where the same
  claim is restated in different words.

## 5. Contributions listed as components

The draft listed five contributions; four were parts of the architecture.
Comments: *"i would not present the individual components as single
contributions"*; *"evaluation is only a means to obtain results that lead to
findings and insights. these findings and insights are the actual
contribution"*; *"your contribution does not provide any information on the
actual presented problem."*

- Contributions are what the field gains, not what the system contains.
- An evaluation is never a contribution; what it established is.
- Every contribution should be traceable to a problem named in the opening. If
  one is not, either the problem statement or the contribution is wrong.
- Three well-chosen items beat five that decompose one idea.

## 6. Named problems that are never answered

The strongest recurring signal: the paper named two problems and then never
closed either. The same objection appeared five times in different sections —
*"while i see the costs. i do not see how you evaluate the accountability
aspect"*, *"it remains unclear how the results provide evidence that the
proposed architecture helps to address the two problems"*, *"what do you
conclude regarding the presented problem"*.

- Whatever the opening names as the problem must be answered by name in the
  evaluation, the discussion, and the conclusion.
- If one named problem has no evidence, say so explicitly and say what evidence
  would settle it. Silence reads as evasion, and reviewers count.
- Where the evidence for two problems differs in strength, mark the difference
  rather than letting both ride on the stronger one.

## 7. Sections that mix several jobs

*"the section is a mixture of setup, metrics, models used and execution. it
would benefit from a better structuring."* And of a results section: *"quite a
long section... maybe some restructuring for improved reading."*

- Split a setup section into named parts: subjects/benchmarks, scoring, models,
  protocol. Labelled paragraphs are enough; new subsections are not always
  needed.
- Structure results by the question each block answers, in the order the
  questions were posed.

## 8. No stated takeaway

*"after all the text i lack some clear finding boxes providing the key takeaways
for me as a reader."*

- Close each results block with one explicit sentence naming what it
  established. An italic *Takeaway.* lead-in costs a line and carries the
  section for a skimming reader.

## 9. Derived numbers without provenance

*"where does this taxonomy come from? how did you do the classification and
analysis?"* and *"where do these numbers come from? how did you determine
them?"*

- Every number that is not read straight off an instrument needs its derivation
  stated where it appears: what was counted, by what rule, over what set.
- Categories need their assignment procedure. "We classified by first match
  against X, which partitions the set exactly" answers it in one clause.

## 10. Unexplained gaps and counts

*"why no hard task? it is not explained why they are skipped"* — a dash in a
table with no note. *"the following list contains five elements"* — where the
text said four.

- A dash, an omitted condition, or a partial subset must carry its reason at the
  point it appears, usually in the caption.
- Count enumerations against the text every revision. Off-by-one in a list is
  read as carelessness about the rest.

## 11. Forward references

*"This is a bit confusing as you refer to the figure in section 1 and so far no
equation has been introduced"*; *"again a reference to something that has not
been presented so far."*

- A float may be referenced before its page, but not before its vocabulary.
- Point forward to sections, not to numbered equations or tables the reader has
  no way to hold in mind yet.

## 12. Figures that do not carry the text's terms

*"capture, compaction und projection are not mentioned in the figure, impeding
the understanding."*

- The words the prose uses must appear as labels in the diagram. If the figure
  cannot be redrawn, the caption must map every term to a visible element — and
  that is a stopgap, not a fix.

## 13. Sections without a roadmap

*"While these topic-wise paragraphs are nice, the section lacks an overview on
what you present and why it is presented."*

- Open a multi-part section with one or two sentences saying what it covers and
  why those parts. This is not filler; it is what lets a reader place each
  paragraph.

## 14. Conclusions that restate results

*"too much repetition of the results section"*, alongside *"what do you conclude
regarding the presented problem."*

- A conclusion answers the question the paper opened with. Numbers appear only
  as support for that answer, not as a second results section.

## 15. Colloquial register

Flagged repeatedly: *"colloquial language"*, and of a title, *"sounds like
colloquial language and not like a scientific paper."*

- Cut conversational hedges and asides: *the part we did not expect*, *worth
  stating plainly*, *barely fires at all*, *says the same thing more directly*.
- State the finding; let it be interesting on its own.
- **percentage points**, not *points*, for a difference between percentages.
- Prefer the field's established term over a coined one: *benchmark*, not
  *corpus* or *suite*, when the object is a benchmark.
