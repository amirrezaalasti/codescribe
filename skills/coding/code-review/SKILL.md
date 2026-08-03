---
name: code-review
description: >-
  Review code changes for correctness, security, readability, and maintainability
  with severity-tagged feedback. Use when reviewing pull requests, diffs, patches,
  or when the user asks for a code review or second pass on changes.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# Code Review

## Instructions

1. **Understand the intent.** Read the PR description / user goal before nitpicking style.
2. **Prioritize.** Correctness and security first, then API design, then style.
3. **Be specific.** Cite files/lines and suggest a concrete fix when possible.
4. **Tag severity** on every finding:

| Tag | Meaning |
| --- | --- |
| Critical | Must fix before merge (bugs, security, data loss) |
| Suggestion | Should improve (design, clarity, missing tests) |
| Nice-to-have | Optional polish |

5. **Respect project conventions.** Do not demand tools or patterns the repo does not use.
6. **Acknowledge strengths** briefly when something is done well — keep the review balanced and scannable.

## Review checklist

### Correctness

- [ ] Logic matches the stated intent
- [ ] Edge cases and error paths handled
- [ ] Concurrency / async races considered when relevant
- [ ] Migrations / data changes are safe and reversible when needed

### Security

- [ ] Input validated; output encoded as needed
- [ ] AuthZ checks present for sensitive operations
- [ ] No secrets committed; no unsafe deserialization
- [ ] Dependency / supply-chain risk not introduced carelessly

### Maintainability

- [ ] Names and structure are clear
- [ ] No unnecessary complexity or duplication
- [ ] Tests cover meaningful new behavior
- [ ] Docs/comments updated when contracts change

## Feedback format

```markdown
### Critical
- `path/file.ts`: … — suggested fix: …

### Suggestions
- …

### Nice-to-have
- …

### Summary
One short paragraph: merge readiness and top risks.
```

## Anti-patterns

- Style-only drive-bys when Critical issues exist
- Vague “this feels wrong” without an alternative
- Demanding large refactors unrelated to the change

## Additional resources

- [references/checklist.md](references/checklist.md)
