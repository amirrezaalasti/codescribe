---
name: python-best-practices
description: >-
  Write idiomatic, typed Python with clear packaging, ruff/pytest defaults, and
  practical error handling. Use when writing or refactoring Python code, modules,
  scripts, packages, or APIs, or when the user mentions Python style, typing, or
  project layout.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# Python Best Practices

## Defaults

| Concern | Default |
| --- | --- |
| Style / lint | [Ruff](https://docs.astral.sh/ruff/) (format + lint) |
| Types | Type hints on public APIs; `mypy` or `pyright` in CI when the project already uses them |
| Tests | pytest (see `python-testing` skill) |
| Package layout | `src/<package>/` for libraries; flat modules OK for small scripts |
| Python version | Match `requires-python` / `.python-version`; prefer 3.11+ |

## Instructions

1. **Match the repo first.** Follow existing layout, tooling, and import style before introducing new conventions.
2. **Prefer clarity over cleverness.** Explicit names, small functions, early returns. Avoid deep nesting and clever one-liners.
3. **Type public surfaces.** Annotate function parameters and return types for APIs, shared helpers, and data models. Use `TypedDict` / dataclasses / Pydantic when the project already does.
4. **Handle errors at the boundary.** Catch specific exceptions; convert to domain errors or HTTP responses at edges. Do not bare `except:` or swallow errors silently.
5. **Use pathlib and context managers.** Prefer `pathlib.Path` over string paths; always close resources with `with`.
6. **Dependencies.** Prefer the stdlib. Add third-party libs only when they clearly reduce complexity; pin in the project's lockfile/tooling.
7. **Do not over-abstract.** Wait for a second real use before extracting shared helpers or base classes.

## Project layout (libraries)

```text
src/mypkg/
  __init__.py
  api.py
  models.py
tests/
  test_api.py
pyproject.toml
```

## Anti-patterns

- Untyped public APIs in typed codebases
- Mutable default arguments (`def f(x=[])`)
- Broad `except Exception` without re-raise or logging
- Circular imports fixed by hacks instead of restructuring
- Mixing business logic into CLI/`__main__` without a callable core

## Checklist

See [references/checklist.md](references/checklist.md).
