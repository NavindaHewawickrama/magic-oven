export default function AuthCard({
  title, subtitle, children,
}: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-16">
      <div className="text-center">
        <span className="text-4xl">🍰</span>
        <h1 className="mt-3 font-display text-3xl font-semibold">{title}</h1>
        <p className="mt-2 text-sm text-espresso-soft">{subtitle}</p>
      </div>
      <div className="mt-8 rounded-3xl border border-line bg-white/70 p-7">{children}</div>
    </div>
  );
}
