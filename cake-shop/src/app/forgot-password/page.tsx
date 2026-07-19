import Link from "next/link";
import AuthCard from "@/components/auth-card";

export const metadata = { title: "Reset Password — Sweet Layers Cake Studio" };

export default function ForgotPasswordPage() {
  return (
    <AuthCard title="Reset your password" subtitle="We'll send a reset link to your email.">
      <form className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Email</label>
          <input type="email" required placeholder="you@example.com" className="mt-1.5 w-full rounded-xl border border-line bg-cream-dim px-4 py-2.5 text-sm outline-none focus:border-brick" />
        </div>
        <button type="submit" className="w-full rounded-full bg-brick py-2.5 text-sm font-semibold text-cream hover:brightness-110">
          Send reset link
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-espresso">
        <Link href="/login" className="font-semibold text-brick">Back to login</Link>
      </p>
    </AuthCard>
  );
}
