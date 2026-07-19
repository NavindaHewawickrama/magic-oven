import ProductCatalog from "./product-catalog";

export const metadata = { title: "All Cakes — Sweet Layers Cake Studio" };

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="eyebrow">Full catalog</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">Every cake we bake</h1>
      <p className="mt-3 max-w-lg text-espresso">
        Search, filter and browse — or skip straight to designing your own in the{" "}
        <a href="/builder" className="font-semibold text-brick underline">Cake Builder</a>.
      </p>
      <div className="mt-10">
        <ProductCatalog />
      </div>
    </div>
  );
}
