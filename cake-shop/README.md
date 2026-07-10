# Sweet Layers Cake Studio — Frontend UI

This is the **UI-only** Next.js project described in `Cake_Shop_Architecture_Documentation.docx`.
No backend/database logic is wired up — all data comes from `src/lib/mock-data.ts` so every
page is fully browsable and interactive out of the box.

## Stack
Next.js 15 (App Router) · React 19 · TypeScript · TailwindCSS v4 · Three.js / React Three Fiber · Framer Motion-ready

## Run it
```bash
npm install
npm run dev
```
Open http://localhost:3000

## What's real vs. mocked
- **Real & interactive:** the 3D Cake Builder (`/builder`) — shape/levels/layers/flavor/cream/
  color/decoration/topping all actually change the Three.js scene; screenshot + WhatsApp
  deep-link works end-to-end in the browser.
- **Real:** search/filter/pagination on `/products`, WhatsApp order links (uses your number in
  `src/lib/mock-data.ts` → `businessSettings.whatsapp`), responsive nav, forms with client-side
  validation.
- **Mocked (no backend):** login/register forms don't call an API yet; feedback/review forms are
  gated behind a `MOCK_IS_LOGGED_IN` flag you can flip in `feedback-form.tsx` / `review-form.tsx`;
  admin CRUD tables render mock data and log actions to the console instead of writing to a DB.

## Where to wire up your backend
- `src/lib/mock-data.ts` — swap for Supabase queries (matches the schema in the docx, Section 21)
- `src/lib/builder-types.ts` — cake builder option lists, used by `/builder`
- `src/app/**/page.tsx` — replace mock arrays with `fetch`/Supabase calls; forms already have
  `onSubmit` handlers ready to call your API routes
- `src/components/feedback-form.tsx`, `review-form.tsx` — replace `MOCK_IS_LOGGED_IN` with your
  real Supabase Auth session check

## Folder structure
Matches Section 23 of the architecture doc, adapted to Next.js App Router conventions:
```
src/
 app/            route segments (pages)
 components/     shared UI components
 lib/            mock data + shared types
```
