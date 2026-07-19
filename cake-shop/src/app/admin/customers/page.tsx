import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";

const customers = [
  { name: "Amaya Perera", email: "amaya@example.com", joined: "2026-02-11", orders: 4 },
  { name: "Nadeesha P.", email: "nadeesha@example.com", joined: "2026-03-04", orders: 2 },
  { name: "Kasun W.", email: "kasun@example.com", joined: "2026-04-19", orders: 1 },
  { name: "Ishara D.", email: "ishara@example.com", joined: "2026-05-30", orders: 3 },
  { name: "Ruwani K.", email: "ruwani@example.com", joined: "2026-06-08", orders: 6 },
];

export const metadata = { title: "Customers — Admin" };

export default function AdminCustomersPage() {
  return (
    <DashboardShell title="Customers" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/customers">
      <div className="overflow-x-auto rounded-2xl border border-line bg-white/80">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="border-b border-line bg-cream-dim/70 text-xs uppercase tracking-wide text-espresso-soft">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3">Feedback given</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.email} className="border-b border-line last:border-0">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3 text-espresso">{c.email}</td>
                <td className="px-4 py-3 text-espresso">{c.joined}</td>
                <td className="px-4 py-3 text-espresso">{c.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
