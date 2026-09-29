const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us about your shipment — origin, destination, and freight details.",
  },
  {
    number: "02",
    title: "We Plan Your Route",
    description:
      "Our dispatch team matches your load with the right truck and driver.",
  },
  {
    number: "03",
    title: "Freight Picked Up",
    description:
      "Your shipment is picked up on schedule and loaded securely.",
  },
  {
    number: "04",
    title: "Delivered On Time",
    description:
      "Track your freight in real time until it arrives safely at its destination.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Shipping With Us Is Simple
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col gap-4">
                <span className="text-5xl font-extrabold text-white/10">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-6 right-[-1rem] hidden h-px w-8 bg-white/10 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
