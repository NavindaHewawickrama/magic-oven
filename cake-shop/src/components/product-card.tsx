import Link from "next/link";
import { Product } from "@/lib/mock-data";
import StarRating from "./star-rating";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex w-64 shrink-0 flex-col overflow-hidden rounded-2xl bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brick/15"
    >
      <div className="px-5 pt-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-brick">
          {product.name}
        </h3>
        <div className="mt-1.5 h-px w-full bg-brick-soft/40" />
      </div>

      <div className="relative mx-5 mt-4 flex h-32 items-center justify-center rounded-full bg-cream-dim text-5xl">
        {product.thumbnail}
        {!product.inStock && (
          <span className="absolute right-1 top-1 rounded-full bg-espresso-soft px-2 py-1 text-[10px] font-semibold text-cream">
            Sold out
          </span>
        )}
        {product.popular && product.inStock && (
          <span className="absolute right-1 top-1 rounded-full bg-peach px-2 py-1 text-[10px] font-semibold text-espresso">
            Popular
          </span>
        )}
        <span className="absolute -bottom-3 right-2 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-cream shadow-md">
          {product.price > 0 ? `$${(product.price / 1000).toFixed(2)}` : "Custom"}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-2 bg-mint px-5 py-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-espresso-soft">{product.category}</p>
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>
        <p className="line-clamp-3 text-sm text-espresso">{product.description}</p>
      </div>
    </Link>
  );
}
