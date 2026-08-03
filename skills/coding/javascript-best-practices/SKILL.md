---
name: javascript-best-practices
description: >-
  Write modern JavaScript with ESM, clear async flows, and solid module
  boundaries for Node and the browser. Use when writing or reviewing JavaScript,
  Node scripts, frontend JS without TypeScript, or when the user asks for JS
  style, async/await, or module structure.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# JavaScript Best Practices

## Defaults

| Concern | Default |
| --- | --- |
| Modules | ESM (`import`/`export`) unless the repo is CommonJS |
| Async | `async`/`await`; avoid mixed callback + promise styles |
| Equality | `===` / `!==` |
| Lint/format | Project ESLint + Prettier (or whatever is already configured) |
| Runtime | Match `engines` / Node LTS used by the repo |

## Instructions

1. **Follow the repo.** Respect existing module system, bundler, and lint rules.
2. **Small modules with clear exports.** One primary responsibility per file; named exports for libraries, default export only when the project convention requires it.
3. **Async done right.** Prefer `async`/`await`. Use `Promise.all` for independent work; never leave floating promises without handling. Propagate errors or handle at the boundary.
4. **Immutability by default.** Prefer `const`; avoid mutating shared objects unexpectedly. Use structured cloning / spreads when updating state-like data.
5. **Validate at edges.** Parse and validate external input (HTTP, CLI, env) before use.
6. **Avoid magic.** Named constants over unexplained numbers/strings; no deep optional chaining chains that hide bugs (`a?.b?.c?.d`).
7. **Node vs browser.** Do not import Node-only APIs into browser bundles (and vice versa) without an explicit boundary.

## Error handling

```javascript
async function loadUser(id) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) {
    throw new Error(`loadUser failed: ${res.status}`);
  }
  return res.json();
}
```

## Anti-patterns

- Mixing `then` chains with `async`/`await` in the same flow without reason
- Swallowing errors in empty `catch`
- Relying on `==` coercion
- Giant god-files with unrelated helpers
- Silent `console.log` debugging left in production paths

## Additional resources

- [references/checklist.md](references/checklist.md)
