"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSession, clearSession } from "@/lib/auth";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "New" },
  { href: "/about", label: "Why Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { session, ready } = useSession();

  function handleLogout() {
    clearSession();
    setOpen(false);
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-display text-2xl italic font-semibold tracking-tight text-brick">
            Sweet
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-espresso-soft">
            Cake
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition hover:text-brick ${
                pathname === l.href ? "text-brick" : "text-espresso-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          {ready && session ? (
            <>
              <Link
                href={session.isAdmin ? "/admin" : "/account"}
                className="text-sm font-medium text-espresso-soft hover:text-brick"
              >
                {session.isAdmin ? "Admin" : "My Account"}
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-espresso-soft hover:text-brick"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="text-sm font-medium text-espresso-soft hover:text-brick"
              >
                SignUp
              </Link>
              <Link
                href="/login"
                className="text-sm font-medium text-espresso-soft hover:text-brick"
              >
                SignIn
              </Link>
            </>
          )}
        </div>

        <button
          className="text-espresso-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-cream px-5 pb-5 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-espresso-soft"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <hr className="border-line" />
            {ready && session ? (
              <>
                <Link
                  href={session.isAdmin ? "/admin" : "/account"}
                  className="text-sm font-medium text-espresso-soft"
                  onClick={() => setOpen(false)}
                >
                  {session.isAdmin ? "Admin dashboard" : "My Account"}
                </Link>
                <button onClick={handleLogout} className="text-left text-sm font-medium text-brick">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/register" className="text-sm font-medium text-espresso-soft" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
                <Link href="/login" className="text-sm font-medium text-espresso-soft" onClick={() => setOpen(false)}>
                  Sign In
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
