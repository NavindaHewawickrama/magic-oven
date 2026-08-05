// ============================================================================
// middleware.ts (helper) — the actual logic; src/middleware.ts calls this.
//
// What this does, every single time a page is requested:
//   1. Refreshes the user's login session if it's about to expire.
//   2. If they're trying to visit /account or /admin while logged out,
//      redirects them to /login.
//   3. If they're logged in but trying to visit /admin without an admin
//      or manager role, redirects them to /account instead.
// ============================================================================
