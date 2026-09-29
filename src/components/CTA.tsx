import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-amber-500 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            Ready to Ship With Yopo Transport?
          </h2>
          <p className="mt-2 text-slate-900/80">
            Get a free, no-obligation quote for your next shipment today.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get a Free Quote
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
