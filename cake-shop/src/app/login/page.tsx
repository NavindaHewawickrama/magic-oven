"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/auth-card";
import { setSession } from "@/lib/auth";

const ADMIN_EMAIL = "admin@sweetlayers.lk";
const ADMIN_PASSWORD = "admin123";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
    setSession({ email, isAdmin });
    router.push(isAdmin ? "/admin" : "/account");
  }

  return (
    <AuthCard title="Welcome back" subtitle="Log in to leave reviews, unlock discounts and track your orders.">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1.5 w-full rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick"
          />
        </div>
        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-xs font-medium text-peach-dark">Forgot password?</Link>
        </div>
        <button type="submit" className="w-full rounded-lg border border-brick bg-transparent py-2.5 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream">
          Log in
        </button>
      </form>

      <div className="mt-6 rounded-xl bg-mint px-4 py-3 text-xs text-espresso">
        <p className="font-semibold text-espresso-soft">Demo credentials</p>
        <p className="mt-1">Admin: {ADMIN_EMAIL} / {ADMIN_PASSWORD} → goes to the admin dashboard</p>
        <p>Anything else → goes to the customer dashboard</p>
      </div>

      <p className="mt-6 text-center text-sm text-espresso">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-peach-dark">Register</Link>
      </p>
    </AuthCard>
  );
}
