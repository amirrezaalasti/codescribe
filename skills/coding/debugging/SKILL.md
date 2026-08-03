---
name: debugging
description: >-
  Debug software issues with a reproduce-isolate-hypothesize-verify loop and
  evidence-based fixes. Use when hunting bugs, fixing failing tests, diagnosing
  production errors, or when the user reports unexpected behavior or stack traces.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# Debugging

## Loop

```text
Reproduce → Isolate → Hypothesize → Verify → Fix → Regression-proof
```

## Instructions

1. **Reproduce reliably.** Capture exact steps, inputs, environment, and error messages. If you cannot reproduce, gather more evidence before changing code.
2. **Isolate.** Bisect: recent commits, feature flags, input ranges, layers (UI vs API vs DB). Shrink the failing case.
3. **Hypothesize.** State a falsifiable claim (“X is null because Y returns early”). Prefer one hypothesis at a time.
4. **Verify with evidence.** Logs, debugger, failing test, or minimal repro script — not guess-and-spray edits.
5. **Fix the root cause.** Avoid masking with retries/catch-all unless explicitly requested as a temporary mitigation.
6. **Lock it in.** Add or update a regression test when practical. Confirm the original repro no longer fails.
7. **Report briefly.** What broke, why, what changed, how you verified.

## Evidence sources

| Source | Use for |
| --- | --- |
| Stack traces | Locating throw sites |
| Failing tests | Fast, deterministic repro |
| Logs / metrics | Timing, frequency, affected cohort |
| Bisect / git blame | When it started |
| Minimal script | Isolating from framework noise |

## Global comment gate

Follow `tagged-code-comments` globally: temporary mitigations get `🟡 HACK(Pn): … until …`; unfixed related risks get `🔴 FIXME` / `🟠 TODO`; never leave silent workarounds. End with an **Open follow-ups** table the developer must check.

## Anti-patterns

- Changing multiple unrelated things before retesting
- “Fixing” by deleting the assertion or catching all errors
- Ignoring flaky tests instead of finding the race
- Assuming the framework is wrong before checking your code

## Output template

```markdown
## Repro
…

## Root cause
…

## Fix
…

## Verification
…
```

## Additional resources

- [references/checklist.md](references/checklist.md)
