---
name: react-best-practices
description: >-
  Build React UIs with clear composition, correct state placement, disciplined
  effects, and basic accessibility. Use when writing React components, hooks,
  fixing re-renders or effect bugs, or when the user mentions React, JSX, or
  client UI state.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# React Best Practices

## Defaults

- Function components + hooks
- Colocate state with the nearest common consumer
- Prefer deriving state over syncing with effects
- Accessibility: semantic HTML first; labels for inputs; keyboard reachability

## Instructions

1. **Composition over configuration.** Split UI into small components with clear props. Prefer children/slots over boolean prop sprawl (`isHeader && …`).
2. **State placement.** Keep state as local as possible. Lift only when siblings must share. Prefer URL/search params for shareable UI state when the app already does.
3. **Effects are escape hatches.** Use `useEffect` for synchronizing with external systems (DOM, network subscriptions), not for computing renderable values. Prefer event handlers for user-driven updates.
4. **Lists need stable keys.** Use stable IDs, not array indexes, when order can change.
5. **Controlled vs uncontrolled.** Pick one per input; do not flip-flop. For forms, follow the project's form library if present.
6. **Performance.** Do not add `useMemo`/`useCallback` by default. Add them when profiling or when referential stability is required by a child/effect dep. Follow React Compiler guidance if the project uses it.
7. **Accessibility baseline.** Use button/link correctly; associate `<label htmlFor>`; manage focus for dialogs; do not rely on color alone.

## Effect anti-pattern

```tsx
// Bad: syncing derived state
const [fullName, setFullName] = useState("");
useEffect(() => {
  setFullName(first + " " + last);
}, [first, last]);

// Good: derive during render
const fullName = `${first} ${last}`;
```

## Component sketch

```tsx
type UserCardProps = {
  name: string;
  onSelect: (id: string) => void;
  id: string;
};

export function UserCard({ id, name, onSelect }: UserCardProps) {
  return (
    <button type="button" onClick={() => onSelect(id)}>
      {name}
    </button>
  );
}
```

## Anti-patterns

- Prop drilling deep trees when context or composition would clarify
- Effects that set state solely to mirror props
- `key={index}` on reorderable lists
- Div soup for interactive elements (`div onClick` instead of `button`)

## Additional resources

- [references/checklist.md](references/checklist.md)
