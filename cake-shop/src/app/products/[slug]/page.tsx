import { notFound } from "next/navigation";
import Link from "next/link";
import { products, reviews, whatsappOrderLink } from "@/lib/mock-data";
import StarRating from "@/components/star-rating";
import WhatsAppButton from "@/components/whatsapp-button";
import ProductCard from "@/components/product-card";
import ReviewForm from "./review-form";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const productReviews = reviews.filter((r) => r.productSlug === slug && r.approved);
  const related = products.filter((p) => p.category === product.category && p.slug !== slug).slice(0, 3);

  const message = `Hello, I would like to order:\n\nCake: ${product.name}\nPrice: Rs. ${product.price.toLocaleString()}\n\nName:\nPhone:`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <nav className="mb-6 text-xs text-espresso-soft">
        <Link href="/products" className="hover:text-brick">Cakes</Link> / {product.category} / {product.name}
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="flex h-80 items-center justify-center rounded-3xl bg-cream-dim text-[8rem]">
            {product.thumbnail}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex h-16 items-center justify-center rounded-xl bg-cream-dim text-2xl">
                {product.thumbnail}
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-1 font-display text-3xl font-semibold md:text-4xl">{product.name}</h1>
          <div className="mt-2"><StarRating rating={product.rating} count={product.reviewCount} size={16} /></div>

          <p className="mt-5 font-display text-3xl font-semibold text-brick">
            {product.price > 0 ? `Rs. ${product.price.toLocaleString()}` : "Custom pricing"}
          </p>
          <p className={`mt-1 text-sm font-medium ${product.inStock ? "text-sage" : "text-brick"}`}>
            {product.inStock ? "Available to order" : "Currently sold out"}
          </p>

          <p className="mt-5 text-espresso-soft">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-line bg-white/60 p-5 text-sm">
            <div><dt className="text-espresso-soft">Flavor</dt><dd className="font-medium">{product.flavor}</dd></div>
            <div><dt className="text-espresso-soft">Weight</dt><dd className="font-medium">{product.weight}</dd></div>
            <div className="col-span-2">
              <dt className="text-espresso-soft">Ingredients</dt>
              <dd className="font-medium">{product.ingredients.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-6">
            {product.inStock ? (
              <WhatsAppButton href={whatsappOrderLink(message)} full />
            ) : (
              <button disabled className="w-full rounded-full bg-line py-2.5 text-sm font-semibold text-espresso-soft">
                Sold out
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-display text-2xl font-semibold">Reviews ({productReviews.length})</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {productReviews.map((r) => (
            <div key={r.id} className="rounded-2xl border border-line bg-white/70 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{r.author}</p>
                <StarRating rating={r.rating} />
              </div>
              <p className="mt-2 text-sm text-espresso-soft">{r.comment}</p>
              <p className="mt-2 text-xs text-espresso-soft/70">{r.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ReviewForm productName={product.name} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-semibold">You might also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
