import { LayoutGrid, MessageSquare, Tag } from "lucide-react";
import DashboardShell, { NavItem } from "@/components/dashboard-shell";
import { generalFeedback } from "@/lib/mock-data";

const nav: NavItem[] = [
  { href: "/account", label: "Dashboard", icon: LayoutGrid },
  { href: "/account/feedback", label: "My Feedback", icon: MessageSquare },
  { href: "/account/discounts", label: "My Discounts", icon: Tag },
];

export const metadata = { title: "My Feedback — Sweet Layers Cake Studio" };

export default function MyFeedbackPage() {
  return (
    <DashboardShell title="My Feedback" subtitle="Customer dashboard" nav={nav} activeHref="/account/feedback">
      <div className="space-y-4">
        {generalFeedback.map((f) => (
          <div key={f.id} className="rounded-2xl border border-line bg-white/70 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{f.date}</p>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${f.approved ? "bg-sage/15 text-sage" : "bg-butter/20 text-espresso-soft"}`}>
                {f.approved ? "Approved" : "Pending review"}
              </span>
            </div>
            <p className="mt-2 text-sm text-espresso-soft">{f.comment}</p>
            {f.reply && (
              <p className="mt-3 rounded-xl bg-cream-dim px-3 py-2 text-xs text-espresso-soft">
                <span className="font-semibold text-brick">Shop reply: </span>{f.reply}
              </p>
            )}
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
