---
name: nextjs-app-router
description: >-
  Build Next.js App Router apps with correct server/client component boundaries,
  routing, layouts, and file conventions. Use when working on Next.js App Router
  projects, app/ directories, RSC, layouts, route handlers, or when the user
  mentions Next.js routing or server components.
license: MIT
metadata:
  author: amirrezaalasti
  version: "1.0"
  category: coding
---

# Next.js App Router

## Defaults

- Use the **App Router** (`app/`) unless the repo is Pages Router
- Default to **Server Components**; add `"use client"` only when needed
- Colocate route UI under `app/` with Next file conventions
- For data fetching details, also apply `nextjs-data-fetching`

## File conventions (common)

```text
app/
  layout.tsx          # Root layout (required)
  page.tsx            # Route UI
  loading.tsx         # Instant loading UI
  error.tsx           # Error boundary
  not-found.tsx
  api/…/route.ts      # Route handlers
  (marketing)/…       # Route groups (no URL segment)
  blog/[slug]/page.tsx
```

## Instructions

1. **Server Components by default.** Fetch data and render on the server when possible. Push `"use client"` to leaves that need state, effects, or browser APIs.
2. **Do not pass non-serializable props** from server to client components (functions, class instances). Pass data; define handlers on the client side.
3. **Layouts nest.** Shared chrome belongs in `layout.tsx`. Keep layouts thin; avoid putting all page logic in the root layout.
4. **Routing.** Prefer file-system routes. Use route groups `(name)` for organization without URL impact. Use dynamic segments `[param]` / `[[...optional]]` as needed.
5. **Metadata.** Export `metadata` or `generateMetadata` from server components/pages for titles and SEO.
6. **Errors & loading.** Provide `error.tsx` and `loading.tsx` for routes with meaningful async work.
7. **Match the Next version.** Prefer patterns from the installed Next.js major; do not mix Pages Router APIs into App Router files.

## Client boundary rule of thumb

Add `"use client"` when the module needs:

- `useState` / `useReducer` / `useEffect`
- Browser-only APIs
- Event handlers on interactive widgets that cannot be isolated lower

Keep data fetching and static structure on the server when possible.

## Anti-patterns

- Marking entire trees `"use client"` unnecessarily
- Importing server-only modules into client components
- Using `getServerSideProps` / `getStaticProps` in App Router
- Huge root layouts with page-specific logic

## Additional resources

- [references/checklist.md](references/checklist.md)
