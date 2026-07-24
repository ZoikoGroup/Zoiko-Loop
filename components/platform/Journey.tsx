import React from "react";

const steps = [
  {
    title: "Event received",
    active: true,
  },
  {
    title: "Rule evaluated",
  },
  {
    title: "Ledger posted",
  },
  {
    title: "Wallet updated",
  },
  {
    title: "Retention measured",
  },
];

export default function Journey() {
  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            From event to earned reward
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-100 sm:text-4xl">
            How the platform works
          </h2>
        </div>

        {/* Journey */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 lg:p-8">
          <p className="mb-6 text-xs uppercase tracking-wider text-slate-500">
            Illustrative event journey
          </p>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div
                  className={`flex h-12 items-center justify-center rounded-lg border px-6 text-center text-sm ${
                    step.active
                      ? "border-teal-500/30 bg-teal-500/10 font-semibold text-slate-100"
                      : "border-white/10 bg-gray-800 text-gray-400"
                  }`}
                >
                  {step.title}
                </div>

                {index !== steps.length - 1 && (
                  <div className="hidden text-xl text-slate-500 lg:block">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}