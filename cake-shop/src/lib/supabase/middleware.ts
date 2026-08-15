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

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Checks the session cookie and auto-refreshes it if it's about to expire.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isAccountRoute = pathname.startsWith("/account");
  const isAdminRoute = pathname.startsWith("/admin");

  // Not logged in but trying to visit a protected route -> bounce to /login
  if (!user && (isAccountRoute || isAdminRoute)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Logged in, but not an admin/manager, trying to hit /admin
  if (user && isAdminRoute) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    const isAdmin = profile?.role === "admin" || profile?.role === "manager";
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/account", request.url));
    }
  }

  return supabaseResponse;
}