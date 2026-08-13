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
  version: "1.0"
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

4. **Tables.** Prefer `booktabs` rules when the template allows; align numbers; define abbreviations in the caption or a footnote.
5. **Citations.** One BibTeX entry per work; fix keys to stable ids (`authorYEARkeyword`). Cite with context — not “(Smith, 2020)” alone as a sentence.
6. **Math.** Define symbols once; prefer `align`/`equation` over arrays of `$$` if amsmath is available.
7. **Prose quality.** Cut stock AI phrases (“delve”, “landscape”, “robust suite”, “underscore the importance”) unless the author’s voice already uses them. Prefer concrete verbs.

## BibTeX hygiene

- Verify titles, years, venues, DOIs
- Consistent capitalization with venue style (`title` case protection `{CNN}`)
- Remove unused entries before camera-ready if required
- Never invent `.bib` entries

## Anti-patterns

- Hard-coded “Figure 3” instead of `\ref`
- Huge figures without `\linewidth` scaling
- Manual bibliography lists when `.bib` exists
- Copy-pasting Unicode dashes/quotes that break latex

## Additional resources

- [references/checklist.md](references/checklist.md)
- [assets/section-stubs.tex](assets/section-stubs.tex)
