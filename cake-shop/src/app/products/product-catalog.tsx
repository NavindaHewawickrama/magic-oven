"use client";

import { useMemo, useState } from "react";
import { Search01Icon } from "hugeicons-react";
import { products, Product } from "@/lib/mock-data";
import ProductCard from "@/components/product-card";

const categories: Array<Product["category"] | "All"> = [
  "All", "Birthday", "Wedding", "Cupcakes", "Seasonal", "Custom",
];

const PAGE_SIZE = 6;

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minRating, setMinRating] = useState(0);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (category !== "All" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (p.rating < minRating) return false;
      return true;
    });
  }, [query, category, maxPrice, minRating]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="grid gap-8 md:grid-cols-[240px_1fr]">
      {/* Filters */}
      <aside className="space-y-6">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">
            Search
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-line bg-white/80 px-4 py-2">
            <Search01Icon size={15} className="text-espresso-soft" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Search cakes..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Category</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setCategory(c); setPage(1); }}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                  category === c
                    ? "border-brick bg-brick text-cream"
                    : "border-line text-espresso-soft hover:border-brick"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">
            Max price: Rs. {maxPrice.toLocaleString()}
          </p>
          <input
            type="range"
            min={1000}
            max={20000}
            step={500}
            value={maxPrice}
            onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(1); }}
            className="mt-2 w-full accent-brick"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-espresso-soft">Minimum rating</p>
          <div className="mt-2 flex gap-2">
            {[0, 3, 4, 4.5].map((r) => (
              <button
                key={r}
                onClick={() => { setMinRating(r); setPage(1); }}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                  minRating === r
                    ? "border-brick bg-brick text-cream"
                    : "border-line text-espresso-soft hover:border-brick"
                }`}
              >
                {r === 0 ? "Any" : `${r}+`}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Results */}
      <div>
        <p className="mb-4 text-sm text-espresso-soft">
          {filtered.length} cake{filtered.length !== 1 ? "s" : ""} found
        </p>
        {pageItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line py-16 text-center text-sm text-espresso">
            No cakes match those filters — try widening your search.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-8 w-8 rounded-lg text-sm font-medium transition ${
                  page === i + 1 ? "bg-brick text-cream" : "border border-line text-espresso-soft"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
