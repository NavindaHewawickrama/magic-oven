import Link from "next/link";
import AuthCard from "@/components/auth-card";

export const metadata = { title: "Register — Sweet Layers Cake Studio" };

export default function RegisterPage() {
  return (
    <AuthCard title="Create your account" subtitle="Just the essentials — name, contact and a password.">
      <form className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Full name</label>
          <input required placeholder="Amaya Perera" className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Email</label>
          <input type="email" required placeholder="you@example.com" className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Phone</label>
          <input type="tel" placeholder="+94 7X XXX XXXX" className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Password</label>
          <input type="password" required placeholder="••••••••" className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <button type="submit" className="w-full rounded-full bg-brick py-2.5 text-sm font-semibold text-cream hover:brightness-110">
          Create account
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-espresso">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brick">Log in</Link>
      </p>
    </AuthCard>
  );
}
