"use client";

import { useState } from "react";
import { Add01Icon, Delete01Icon } from "hugeicons-react";
import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";
import { notices as initialNotices } from "@/lib/mock-data";

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState(initialNotices.map((n) => ({ ...n })));
  const [text, setText] = useState("");

  const add = () => {
    if (!text.trim()) return;
    setNotices((n) => [...n, { id: `n${Date.now()}`, message: text, active: true }]);
    setText("");
  };
  const toggle = (id: string) =>
    setNotices((n) => n.map((x) => (x.id === id ? { ...x, active: !x.active } : x)));
  const remove = (id: string) => setNotices((n) => n.filter((x) => x.id !== id));

  return (
    <DashboardShell title="Special Notices" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/notices">
      <div className="mb-6 flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g. Closed for the New Year holiday, back on Jan 3rd"
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-brick"
        />
        <button onClick={add} className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-brick bg-transparent px-5 py-2.5 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream">
          <Add01Icon size={16} /> Add
        </button>
      </div>

      <div className="space-y-3">
        {notices.map((n) => (
          <div key={n.id} className="flex items-center justify-between rounded-2xl border border-line bg-white/80 p-4">
            <p className="text-sm">{n.message}</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggle(n.id)}
                className={`rounded-lg px-3 py-1 text-xs font-medium ${n.active ? "bg-sage/15 text-sage" : "bg-line text-espresso-soft"}`}
              >
                {n.active ? "Active" : "Hidden"}
              </button>
              <button onClick={() => remove(n.id)}><Delete01Icon size={16} className="text-espresso-soft hover:text-brick" /></button>
            </div>
          </div>
        ))}
        {notices.length === 0 && <p className="text-sm text-espresso-soft">No notices yet.</p>}
      </div>
    </DashboardShell>
  );
}