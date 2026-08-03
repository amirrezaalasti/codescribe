---
name: typescript-best-practices
description: >-
  Write strict, idiomatic TypeScript with sound types, narrowing, and clear API
  contracts. Use when writing or refactoring TypeScript, adding types to JS,
  designing interfaces, fixing type errors, or when the user mentions tsconfig,
  generics, or typed APIs.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# TypeScript Best Practices

## Defaults

| Concern | Default |
| --- | --- |
| Strictness | Prefer `strict: true` (and project-equivalent flags) |
| Modules | ESM + project `moduleResolution` (often `bundler` or `NodeNext`) |
| Types vs interfaces | `type` for unions/intersections/aliases; `interface` for object shapes meant to be extended |
| `any` | Avoid; use `unknown` + narrowing instead |
| Assertion | Prefer narrowing over `as` casts; never `as any` unless escaping a known lib bug |

## Instructions

1. **Match existing tsconfig and patterns.** Do not loosen strictness to silence errors; fix types or narrow correctly.
2. **Model the domain.** Prefer precise union types and discriminated unions over optional soup (`status: 'ok' | 'error'`).
3. **Narrow before use.** Use type guards, `in` checks, and exhaustiveness (`switch` + `never`) for unions.
4. **Type public APIs thoroughly.** Exported functions, hooks, and components should not rely on inference alone when the contract matters to callers.
5. **Generics when they remove duplication.** Add type parameters for reusable containers/helpers; do not invent complex generics for one-off code.
6. **Avoid unsafe escapes.** Limit `!` non-null assertions; document why if unavoidable.
7. **Keep runtime and types aligned.** Zod/Valibot (or similar) at boundaries when the project uses them — types alone do not validate external data.
8. **Tag unfinished or risky work.** Use the global `tagged-code-comments` convention (`🔴 FIXME(P0):`, `🟠 TODO(P1):`, …). Never leave silent stubs or `as any` escapes without a tag. End with an **Open follow-ups** table so the developer must check P0/P1 before ship.

## Patterns

```typescript
type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function unwrap<T>(r: Result<T>): T {
  if (!r.ok) throw new Error(r.error);
  return r.value;
}
```

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "rect":
      return s.width * s.height;
    default: {
      const _exhaustive: never = s;
      return _exhaustive;
    }
  }
}
```

## Anti-patterns

- Widespread `any` / `as unknown as T`
- Optional fields for mutually exclusive states instead of discriminated unions
- Overly wide types (`string` where a literal union works)
- Duplicating runtime validation and types that drift apart

## Additional resources

- [references/checklist.md](references/checklist.md)
