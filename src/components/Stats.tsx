const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "50", label: "States Covered" },
  { value: "1,200+", label: "Loads Delivered Monthly" },
  { value: "98%", label: "On-Time Delivery" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-amber-500 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
