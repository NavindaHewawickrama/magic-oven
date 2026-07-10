"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Star } from "lucide-react";

const MOCK_IS_LOGGED_IN = false;

export default function ReviewForm({ productName }: { productName: string }) {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  if (!MOCK_IS_LOGGED_IN) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line bg-white/60 px-6 py-8 text-center">
        <Lock className="text-brick" size={20} />
        <p className="text-sm text-espresso-soft">
          Log in to leave a review for {productName}.
        </p>
        <Link href="/login" className="rounded-full bg-brick px-5 py-2 text-sm font-semibold text-cream">
          Log in to review
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-white/70 px-6 py-6 text-center text-sm text-espresso-soft">
        Thanks for your review! It will appear once approved by our team.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-4 rounded-2xl border border-line bg-white/70 p-6"
    >
      <p className="text-sm font-semibold">Leave a review</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" key={i} onClick={() => setRating(i)}>
            <Star size={22} className={i <= rating ? "fill-butter text-butter" : "text-line"} />
          </button>
        ))}
      </div>
      <textarea
        required
        rows={3}
        placeholder={`What did you think of the ${productName}?`}
        className="w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm outline-none focus:border-brick"
      />
      <button type="submit" className="rounded-full bg-brick px-6 py-2.5 text-sm font-semibold text-cream hover:brightness-110">
        Submit review
      </button>
    </form>
  );
}
