"use client";

import { useState } from "react";
import { Check, X, Reply } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";
import { reviews as initialReviews, generalFeedback as initialGeneral } from "@/lib/mock-data";
import StarRating from "@/components/star-rating";

export default function AdminFeedbackPage() {
  const [tab, setTab] = useState<"reviews" | "general">("general");
  const [reviews, setReviews] = useState(initialReviews.map((r) => ({ ...r })));
  const [general, setGeneral] = useState(initialGeneral.map((g) => ({ ...g })));

  return (
    <DashboardShell title="Feedback Moderation" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/feedback">
      <div className="mb-6 flex gap-2">
        {(["general", "reviews"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${tab === t ? "bg-brick text-cream" : "border border-line text-espresso-soft"}`}
          >
            {t === "general" ? "General Feedback" : "Product Reviews"}
          </button>
        ))}
      </div>

      {tab === "general" ? (
        <div className="space-y-4">
          {general.map((g) => (
            <div key={g.id} className="rounded-2xl border border-line bg-white/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{g.author} · {g.date}</p>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${g.approved ? "bg-sage/15 text-sage" : "bg-peach/30 text-espresso-soft"}`}>
                  {g.approved ? "Approved" : "Pending"}
                </span>
              </div>
              <p className="mt-2 text-sm text-espresso">{g.comment}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <button onClick={() => setGeneral((arr) => arr.map((x) => x.id === g.id ? { ...x, approved: true } : x))} className="inline-flex items-center gap-1 rounded-lg bg-sage/15 px-3 py-1.5 text-xs font-medium text-sage"><Check size={12} /> Approve</button>
                <button onClick={() => setGeneral((arr) => arr.filter((x) => x.id !== g.id))} className="inline-flex items-center gap-1 rounded-lg bg-brick/10 px-3 py-1.5 text-xs font-medium text-brick"><X size={12} /> Reject</button>
                <button className="inline-flex items-center gap-1 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-espresso-soft"><Reply size={12} /> Reply</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="rounded-2xl border border-line bg-white/80 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{r.author}</p>
                  <p className="text-xs text-espresso-soft">on {r.productSlug} · {r.date}</p>
                </div>
                <StarRating rating={r.rating} />
              </div>
              <p className="mt-2 text-sm text-espresso">{r.comment}</p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => setReviews((arr) => arr.map((x) => x.id === r.id ? { ...x, approved: true } : x))} className="inline-flex items-center gap-1 rounded-lg bg-sage/15 px-3 py-1.5 text-xs font-medium text-sage"><Check size={12} /> Approve</button>
                <button onClick={() => setReviews((arr) => arr.filter((x) => x.id !== r.id))} className="inline-flex items-center gap-1 rounded-lg bg-brick/10 px-3 py-1.5 text-xs font-medium text-brick"><X size={12} /> Reject</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}
