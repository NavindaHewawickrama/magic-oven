"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import Link from "next/link";

// NOTE: UI-only demo. Replace with real Supabase session check.
const MOCK_IS_LOGGED_IN = false;

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  if (!MOCK_IS_LOGGED_IN) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line bg-white/70 px-6 py-10 text-center">
        <Lock className="text-brick" size={22} />
        <p className="text-sm text-espresso-soft">
          Please log in to leave feedback. This helps us keep reviews trustworthy.
        </p>
        <div className="mt-1 flex gap-3">
          <Link href="/login" className="rounded-full bg-brick px-5 py-2 text-sm font-semibold text-cream">
            Log in
          </Link>
          <Link href="/register" className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-espresso">
            Register
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-white/80 px-6 py-8 text-center text-sm text-espresso-soft">
        Thank you! Your feedback has been sent for review and will appear once approved.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-white/80 p-6"
    >
      <textarea
        required
        placeholder="Share your experience with Sweet Layers..."
        rows={4}
        className="w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-brick"
      />
      <button
        type="submit"
        className="self-start rounded-full bg-brick px-6 py-2.5 text-sm font-semibold text-cream hover:brightness-110"
      >
        Submit feedback
      </button>
    </form>
  );
}
