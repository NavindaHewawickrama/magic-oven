import { Upload, Trash2, Crop } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";
import { products } from "@/lib/mock-data";

export const metadata = { title: "Media Library — Admin" };

export default function MediaLibraryPage() {
  return (
    <DashboardShell title="Media Library" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/media-library">
      <div className="flex items-center justify-between rounded-2xl border border-dashed border-line bg-white/60 p-6">
        <div>
          <p className="text-sm font-semibold">Upload new images</p>
          <p className="text-xs text-espresso-soft">PNG, JPG or WebP up to 5MB. Images are auto-compressed on upload.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-brick px-4 py-2 text-sm font-semibold text-cream">
          <Upload size={15} /> Upload
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {products.map((p) => (
          <div key={p.id} className="group relative flex aspect-square items-center justify-center rounded-2xl border border-line bg-cream-dim text-4xl">
            {p.thumbnail}
            <div className="absolute inset-0 hidden items-center justify-center gap-2 rounded-2xl bg-espresso/60 group-hover:flex">
              <button className="rounded-full bg-white/90 p-1.5"><Crop size={13} /></button>
              <button className="rounded-full bg-white/90 p-1.5 text-brick"><Trash2 size={13} /></button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
