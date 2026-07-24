import React from "react";

const audiences = [
  {
    title: "MNOs",
    description:
      "Multi-brand, multi-market program orchestration at operator scale.",
  },
  {
    title: "MVNOs",
    description:
      "Pilot-led validation and rapid deployment for challenger operators.",
  },
  {
    title: "Prepaid operators",
    description:
      "Recharge rhythm, bundle renewal, and reactivation programs.",
  },
  {
    title: "Telecom groups",
    description:
      "Group-wide governance with controlled local flexibility.",
  },
];

export default function Audience() {
  return (
    <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Built for every operator
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-100 sm:text-4xl">
            Who Zoiko Loop is built for
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6 transition hover:border-teal-500/30"
            >
              <h3 className="text-lg font-semibold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}