import Link from "next/link";
import { Product } from "@/lib/mock-data";
import StarRating from "./star-rating";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-white/70 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brick/10"
    >
      <div className="relative flex h-44 items-center justify-center bg-cream-dim text-6xl">
        {product.thumbnail}
        {!product.inStock && (
          <span className="absolute right-2 top-2 rounded-full bg-espresso-soft px-2 py-1 text-[10px] font-semibold text-cream">
            Sold out
          </span>
        )}
        {product.popular && product.inStock && (
          <span className="absolute right-2 top-2 rounded-full bg-brick px-2 py-1 text-[10px] font-semibold text-cream">
            Popular
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="eyebrow">{product.category}</p>
        <h3 className="font-display text-lg font-semibold leading-snug text-espresso group-hover:text-brick">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-espresso-soft">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <StarRating rating={product.rating} count={product.reviewCount} />
          <span className="font-display text-base font-semibold text-espresso-soft">
            {product.price > 0 ? `Rs. ${product.price.toLocaleString()}` : "Custom"}
          </span>
        </div>
      </div>
    </Link>
  );
}
