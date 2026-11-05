---
name: latex-scientific-writing
description: >-
  Author scientific LaTeX cleanly with solid sectioning, figures/tables,
  cross-references, and BibTeX hygiene while avoiding AI-slop phrasing. Use when
  writing or editing LaTeX papers, .tex/.bib files, Overleaf projects, figures,
  tables, or bibliography issues in academic manuscripts.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.1"
  category: writing
---

# LaTeX Scientific Writing

## Defaults

- Match the venue class/style file (`acmart`, `IEEEtran`, `article`, …)
- Prefer `\label`/`\ref`/`\cref` (if cleveref is used) over hard-coded numbers
- Bibliography via BibTeX/BibLaTeX as the project already does
- Figures: PDF/PNG as required; always include captions and labels

## Instructions

1. **Respect the template.** Do not fight class options; put macros in a small `macros.tex` if the project allows.
2. **Semantic structure.** Use `\section` hierarchy consistently; avoid manual spacing hacks (`\vspace`) unless fixing a known template issue.
3. **Floats.**

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\linewidth]{fig/overview.pdf}
  \caption{Overview of the proposed method.}
  \label{fig:overview}
\end{figure}
```

**Float ordering.** Place the `figure`/`table` environment *after* the paragraph containing its first `\ref`, never before. Floats migrate at typeset time, but the source order is what a reviewer reading a draft experiences, and a figure met before its introduction reads as an interruption. Every float must also be referenced at least once in the running text — an unreferenced float is invisible to the argument, however good the caption is.

**Caption discipline.** A caption describes what is shown; the running text says what the reader should conclude from it. If the figure is an overview of a system, the text should walk the blocks in the order data flows through them. If a figure's internal labels do not match the terminology of the prose (common with reused or externally produced diagrams), reconcile them explicitly in the caption — "\emph{X} in the figure corresponds to Y of Section~\ref{...}" — rather than leaving the reader to guess.

4. **Tables.** Prefer `booktabs` rules when the template allows; align numbers; define abbreviations in the caption or a footnote. A mapping table (`tabularx` + `booktabs`, `X` columns for prose cells, `\multirow` for grouped keys) is often the clearest way to tie problems, principles, components, and sections together in one place.
5. **Citations.** One BibTeX entry per work; fix keys to stable ids (`authorYEARkeyword`). Cite with context — not “(Smith, 2020)” alone as a sentence.
6. **Math.** Define symbols once; prefer `align`/`equation` over arrays of `$$` if amsmath is available. Reserve display math for relations that are referenced again or that define reused notation — a two-line `equation` block that states what a clause states is a net loss of space and attention. Use `\label` on the equations you will refer back to, and refer back to them.
7. **Show, don't only schematize.** When a section claims a transformation (pruning, compression, normalization, rewriting), a `lstlisting` pair inside `subfigure` environments showing one real input and its output is worth more than another box-and-arrow diagram, and costs half a page.
8. **Prose quality.** Cut stock AI phrases (“delve”, “landscape”, “robust suite”, “underscore the importance”) unless the author’s voice already uses them. Prefer concrete verbs.

## BibTeX hygiene

- Verify titles, years, venues, DOIs
- Consistent capitalization with venue style (`title` case protection `{CNN}`)
- Remove unused entries before camera-ready if required
- Never invent `.bib` entries

## Anti-patterns

- A float placed in the source before the text that first references it
- Floats never referenced from the running text
- Figure-internal labels that contradict the prose terminology, left unreconciled
- Display equations that are never referenced and define nothing reused
- Hard-coded “Figure 3” instead of `\ref`
- Huge figures without `\linewidth` scaling
- Manual bibliography lists when `.bib` exists
- Copy-pasting Unicode dashes/quotes that break latex

## Figures must carry the prose's vocabulary

Every term the text uses for a stage, component, or quantity must appear as a
label in the diagram. If the figure cannot be redrawn, the caption must map each
term to a visible element — treat that as a stopgap and record a TODO to fix the
source. *"X and Y are not mentioned in the figure, impeding the understanding"*
is a comprehension failure, not a cosmetic one.

## Forward references

A float may be referenced before the page it lands on, but never before its
vocabulary exists. Do not point forward to a numbered equation or table from a
caption or an early section; point to the section instead. Readers cannot hold
"Equation 4" in mind before Section 3.

## Unexplained gaps

A dash in a table, an omitted condition, a partial subset: each carries its
reason at the point it appears, normally in the caption. Otherwise it reads as
an oversight and draws *"why is this missing? it is not explained."*

## Count enumerations against the text

"It is invoked in four states" followed by a list of five is caught by every
careful reader and taken as evidence of carelessness elsewhere. Recount every
enumeration after each revision.

## Additional resources

- [references/checklist.md](references/checklist.md)
- [assets/section-stubs.tex](assets/section-stubs.tex)
