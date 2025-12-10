import { SearchBar } from "@/components/search-bar";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-10 px-4 py-10 sm:py-16">
      <section className="grid gap-8 md:grid-cols-[2fr,1.4fr] md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-700/60 bg-brand-950/70 px-3 py-1 text-xs text-brand-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            AI-powered E-commerce Profit Optimization
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Turn product searches into <span className="text-brand-400">profit
            strategies</span>.
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            StrategAI scrapes wholesale and Pakistani retail platforms, compares
            prices, and surfaces profitable arbitrage opportunities — in seconds.
          </p>
          <SearchBar />
          <p className="text-[11px] text-slate-500">
            Currently supports: Made-in-China, Mega.pk, Homeshopping.pk,
            Telemart.pk
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300 shadow-2xl shadow-brand-900/40">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-slate-400">
            What StrategAI will show you
          </p>
          <ul className="space-y-2">
            <li>• Cheapest wholesale suppliers with MOQs & lead time.</li>
            <li>• Live retail prices from major Pakistani online retailers.</li>
            <li>• Profit per unit in PKR and recommended sourcing strategy.</li>
            <li>• Clean overview, ready for investors or internal decks.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
