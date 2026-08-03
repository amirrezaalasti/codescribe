# Examples by language

## TypeScript

```ts
// 🔴 SECURITY(P0): sanitize html before dangerouslySetInnerHTML
// 🟠 TODO(P1): wire real auth; mock user is for local only — #881
// 🟡 HACK(P2): duplicate parse to avoid circular import; remove after package split
// 🔵 WHY: debounce 300ms matches search analytics cohort study
```

## Python

```python
# 🔴 FIXME(P0): race on shared cache without lock under threaded workers
# 🟣 REFACTOR(P2): move CSV parsing into mypkg.io.csv
# 🟢 PERF(P3): batch inserts when rows > 1000
```

## JSX

```tsx
{/* 🟡 UX(P2): error toast lacks retry action */}
{/* 🟠 TEST(P1): no RTL coverage for empty catalog state */}
```

## SQL

```sql
-- 🟠 MIGRATE(P1): drop legacy_status column after 2026-09 dual-write — #902
```

## Review summary table (chat)

| Pri | Tag | Where | Message |
| --- | --- | --- | --- |
| P0 | SECURITY | `auth.ts:42` | token compared with `==` |
| P1 | TODO | `api/route.ts:18` | missing pagination |
