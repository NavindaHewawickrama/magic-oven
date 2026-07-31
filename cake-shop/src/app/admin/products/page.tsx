"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Eye, EyeOff, X } from "lucide-react";
import DashboardShell from "@/components/dashboard-shell";
import { adminNav } from "@/lib/admin-nav";
import { products as initialProducts, Product } from "@/lib/mock-data";
import StarRating from "@/components/star-rating";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleStock = (id: string) =>
    setProducts((ps) => ps.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p)));

  const remove = (id: string) => setProducts((ps) => ps.filter((p) => p.id !== id));

  const openNew = () => { setEditing(null); setShowForm(true); };
  const openEdit = (p: Product) => { setEditing(p); setShowForm(true); };

  return (
    <DashboardShell title="Products" subtitle="Admin CMS" nav={adminNav} activeHref="/admin/products">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-espresso-soft">{products.length} products</p>
        <button onClick={openNew} className="inline-flex items-center gap-2 rounded-lg border border-brick bg-transparent px-4 py-2 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream">
          <Plus size={16} /> Add product
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line bg-white/80">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-line bg-cream-dim/70 text-xs uppercase tracking-wide text-espresso-soft">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-line last:border-0">
                <td className="flex items-center gap-3 px-4 py-3">
                  <span className="text-2xl">{p.thumbnail}</span>
                  <span className="font-medium">{p.name}</span>
                </td>
                <td className="px-4 py-3 text-espresso">{p.category}</td>
                <td className="px-4 py-3">{p.price > 0 ? `Rs. ${p.price.toLocaleString()}` : "Custom"}</td>
                <td className="px-4 py-3"><StarRating rating={p.rating} /></td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleStock(p.id)}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium ${
                      p.inStock ? "bg-sage/15 text-sage" : "bg-brick/10 text-brick"
                    }`}
                  >
                    {p.inStock ? <Eye size={12} /> : <EyeOff size={12} />}
                    {p.inStock ? "Visible" : "Hidden"}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(p)} className="rounded-lg border border-line p-1.5 hover:border-brick"><Pencil size={14} /></button>
                    <button onClick={() => remove(p.id)} className="rounded-lg border border-line p-1.5 hover:border-brick"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/40 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-cream-dim p-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-xl font-semibold">{editing ? "Edit product" : "New product"}</p>
              <button onClick={() => setShowForm(false)}><X size={18} /></button>
            </div>
            <form
              className="mt-5 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-semibold uppercase text-espresso-soft">Name</label>
                  <input defaultValue={editing?.name} required className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brick" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-espresso-soft">Price (Rs.)</label>
                  <input type="number" defaultValue={editing?.price} className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brick" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-espresso-soft">Category</label>
                  <select defaultValue={editing?.category} className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brick">
                    {["Birthday", "Wedding", "Cupcakes", "Seasonal", "Custom"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold uppercase text-espresso-soft">Description</label>
                  <textarea defaultValue={editing?.description} rows={3} className="mt-1 w-full resize-none rounded-lg border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brick" />
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold uppercase text-espresso-soft">Images</label>
                  <div className="mt-1 flex h-20 items-center justify-center rounded-xl border border-dashed border-line text-xs text-espresso">
                    Drop images here or click to upload (Supabase Storage)
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full rounded-lg border border-brick bg-transparent py-2.5 text-sm font-semibold text-brick transition hover:bg-brick hover:text-cream">
                {editing ? "Save changes" : "Create product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}
