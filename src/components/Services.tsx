import {
  Boxes,
  Snowflake,
  Truck,
  Warehouse,
  Zap,
  PackageSearch,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    description:
      "Dedicated trailers for large shipments moving direct from origin to destination with no stops.",
  },
  {
    icon: Boxes,
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective shipping for smaller loads, consolidated and delivered on a reliable schedule.",
  },
  {
    icon: Zap,
    title: "Expedited Shipping",
    description:
      "Time-critical freight handled with priority routing and dedicated drivers for fast delivery.",
  },
  {
    icon: Snowflake,
    title: "Refrigerated Transport",
    description:
      "Temperature-controlled trailers for perishable and sensitive goods, monitored end-to-end.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description:
      "Secure short and long-term storage with flexible distribution options across our network.",
  },
  {
    icon: PackageSearch,
    title: "Real-Time Tracking",
    description:
      "Stay informed with live shipment visibility from pickup to final delivery, every step of the way.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Freight Solutions Built for Your Business
          </h2>
          <p className="mt-4 text-slate-400">
            From full truckloads to expedited runs, we tailor every shipment to
            keep your supply chain moving.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-white/10 bg-slate-900 p-6 transition hover:border-amber-500/50 hover:bg-slate-900/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 transition group-hover:bg-amber-500 group-hover:text-slate-950">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
