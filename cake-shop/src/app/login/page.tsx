import Link from "next/link";
import AuthCard from "@/components/auth-card";

export const metadata = { title: "Log In — Sweet Layers Cake Studio" };

export default function LoginPage() {
  return (
    <AuthCard title="Welcome back" subtitle="Log in to leave reviews, unlock discounts and track your orders.">
      <form className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Email</label>
          <input type="email" required placeholder="you@example.com" className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Password</label>
          <input type="password" required placeholder="••••••••" className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-xs font-medium text-brick">Forgot password?</Link>
        </div>
        <button type="submit" className="w-full rounded-full bg-brick py-2.5 text-sm font-semibold text-cream hover:brightness-110">
          Log in
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-espresso">
        Don't have an account?{" "}
        <Link href="/register" className="font-semibold text-brick">Register</Link>
      </p>
    </AuthCard>
  );
}
