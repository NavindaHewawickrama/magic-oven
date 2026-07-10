import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-5 text-center">
      <span className="text-6xl">🎂💥</span>
      <h1 className="mt-4 font-display text-4xl font-semibold">This slice is missing</h1>
      <p className="mt-3 text-espresso-soft">
        The page you're looking for isn't on the menu. Let's get you back to something sweeter.
      </p>
      <Link href="/" className="mt-6 rounded-full bg-brick px-6 py-3 text-sm font-semibold text-cream">
        Back to home
      </Link>
    </div>
  );
}
