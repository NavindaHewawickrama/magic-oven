"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/auth-card";
import { setSession } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSession({ email, name, isAdmin: false });
    router.push("/account");
  }

  return (
    <AuthCard title="Create your account" subtitle="Just the essentials — name, contact and a password.">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Full name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Amaya Perera" className="mt-1.5 w-full rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1.5 w-full rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Phone</label>
          <input type="tel" placeholder="+94 7X XXX XXXX" className="mt-1.5 w-full rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Password</label>
          <input type="password" required placeholder="••••••••" className="mt-1.5 w-full rounded-lg border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <button type="submit" className="w-full rounded-lg border border-brick bg-transparent py-2.5 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream">
          Create account
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-espresso">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-peach-dark">Log in</Link>
      </p>
    </AuthCard>
  );
}
