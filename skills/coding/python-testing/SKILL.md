---
name: python-testing
description: >-
  Design and write pytest tests with clear fixtures, parametrization, and
  coverage expectations. Use when writing Python tests, fixing failing tests,
  adding fixtures, or when the user mentions pytest, unit tests, or test
  coverage in Python.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# Python Testing (pytest)

## Defaults

- Framework: **pytest**
- Layout: `tests/` mirroring the package, or colocated `test_*.py` if the repo already does that
- Naming: `test_<behavior>`, files `test_<module>.py`
- Assertions: plain `assert` with readable messages when helpful

## Instructions

1. **Test behavior, not implementation.** Assert outcomes users care about (return values, side effects, errors). Avoid brittle private-API tests.
2. **Arrange → Act → Assert.** Keep each test focused on one behavior.
3. **Use fixtures for shared setup.** Prefer function-scoped fixtures; use `yield` for teardown. Avoid fixture pyramids — extract helpers when fixtures nest deeply.
4. **Parametrize similar cases.** Use `@pytest.mark.parametrize` for input tables instead of copy-pasted tests.
5. **Mark slow / integration tests.** Use markers (`@pytest.mark.slow`, `@pytest.mark.integration`) when the project defines them; keep the default suite fast.
6. **Mock at boundaries.** Mock network, clock, and filesystem edges — not the unit under test. Prefer `unittest.mock` or `pytest-mock` as the project already uses.
7. **Fail loudly.** Prefer raising / expecting exceptions with `pytest.raises` over returning magic error codes in tests.
8. **Tag gaps.** If you skip coverage for a path you touched, leave `🟠 TEST(P1):` via `tagged-code-comments` and list it in **Open follow-ups** so the developer must check before ship.

## Minimal example

```python
import pytest
from mypkg.mathutil import divide

@pytest.mark.parametrize("a,b,expected", [(6, 3, 2), (5, 2, 2.5)])
def test_divide(a, b, expected):
    assert divide(a, b) == expected

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(1, 0)
```

## Coverage expectations

- New logic should have tests unless the user says otherwise
- Prefer critical-path and edge-case coverage over 100% line chasing
- Do not weaken assertions just to make coverage green

## Anti-patterns

- One giant test that asserts everything
- Sleeping for timing instead of controlling time
- Snapshotting entire large objects when a few fields matter
- Tests that depend on run order or shared mutable module state

## Additional resources

- [references/checklist.md](references/checklist.md)
