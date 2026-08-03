---
name: nextjs-data-fetching
description: >-
  Fetch and mutate data in Next.js App Router with correct caching, Server
  Actions boundaries, and loading/error UX. Use when implementing Next.js data
  fetching, caching, revalidation, Server Actions, route handlers, or fixing
  stale/over-fetched data in Next apps.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# Next.js Data Fetching

## Defaults

- Fetch in **Server Components** when data is needed for render
- Use **Server Actions** for mutations from the client when the project uses them
- Prefer explicit cache/revalidate choices over accidental defaults
- Pair slow fetches with `loading.tsx` / Suspense

## Instructions

1. **Read on the server.** In Server Components, `fetch` (or the project's data client) during render. Avoid waterfalls: fetch in parallel when requests are independent.
2. **Be explicit about caching.** Know whether a `fetch` is cached or dynamic for the Next version in use. Set `cache: 'no-store'` or `next: { revalidate: N }` intentionally — do not guess.
3. **Mutations via Server Actions or route handlers.** Validate input on the server. Revalidate tags/paths after successful writes (`revalidatePath` / `revalidateTag` as appropriate).
4. **Do not leak secrets.** Server-only env vars and privileged clients stay on the server. Never expose service keys to client bundles.
5. **Loading and errors.** Use `loading.tsx`, route-level `error.tsx`, or Suspense boundaries so users see progress and recoverable failures.
6. **Client fetching only when needed.** Use client SWR/React Query (if present) for highly interactive, frequently updating client state — not as the default for initial page data.
7. **Match auth boundaries.** Check session/permissions before returning sensitive data or performing mutations.

## Patterns

```tsx
// Server Component — intentional revalidation
async function Products() {
  const res = await fetch("https://api.example.com/products", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to load products");
  const products = await res.json();
  return <ProductList products={products} />;
}
```

```ts
"use server";

import { revalidatePath } from "next/cache";

export async function createItem(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) throw new Error("Title required");
  // await db.insert...
  revalidatePath("/items");
}
```

## Anti-patterns

- Fetching the same data in many nested clients instead of once on the server
- Ignoring auth on Server Actions
- Returning large unneeded payloads to the client
- Mixing Pages Router data APIs into App Router

## Additional resources

- [references/checklist.md](references/checklist.md)
