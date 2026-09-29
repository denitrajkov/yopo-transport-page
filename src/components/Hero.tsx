import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.15),_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400">
            Nationwide Freight &amp; Logistics
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Moving Your Freight,
            <span className="block text-amber-500">Coast to Coast.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Yopo Transport delivers dependable full truckload, less-than-truckload,
            and expedited shipping solutions for businesses across the United
            States. On time, every time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Our Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-white">Licensed &amp; Insured</p>
                <p className="text-xs text-slate-400">Fully compliant carrier</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-white">24/7 Dispatch</p>
                <p className="text-xs text-slate-400">Always on the move</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-white">All 50 States</p>
                <p className="text-xs text-slate-400">Nationwide coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
