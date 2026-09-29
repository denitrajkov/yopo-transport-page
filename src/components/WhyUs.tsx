import { BadgeCheck, HeadphonesIcon, Radar, UserCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Licensed & Fully Insured",
    description:
      "Operating in full compliance with federal and state transportation regulations.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Dispatch Support",
    description:
      "Our dispatch team is available around the clock to answer questions and solve problems.",
  },
  {
    icon: Radar,
    title: "Real-Time Visibility",
    description:
      "Track every shipment live and get proactive updates from pickup to delivery.",
  },
  {
    icon: UserCheck,
    title: "Experienced Drivers",
    description:
      "Our professional drivers bring years of experience hauling freight safely nationwide.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
              Why Choose Yopo Transport
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A Carrier You Can Rely On
            </h2>
            <p className="mt-4 text-slate-400">
              We combine modern technology with an experienced team to deliver
              freight solutions that keep your business running smoothly, no
              matter the distance.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/20 to-slate-900 p-8">
              <p className="text-4xl font-extrabold text-white">12+</p>
              <p className="mt-1 text-sm text-slate-300">
                Years hauling freight across the USA
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <p className="text-2xl font-extrabold text-amber-500">200+</p>
              <p className="mt-1 text-xs text-slate-400">Trucks in our network</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <p className="text-2xl font-extrabold text-amber-500">99%</p>
              <p className="mt-1 text-xs text-slate-400">Claim-free shipments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
