import React from "react";

const steps = [
  { title: "Event signal", active: true },
  { title: "Rule" },
  { title: "Reward" },
  { title: "Wallet" },
  { title: "Retention measurement", wide: true },
];

export default function OutcomeFramework() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            ONE FLOW, EVERY CONTEXT
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            The outcome framework
          </h2>
        </div>

        {/* Flow Box */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Illustrative event-to-outcome flow
          </p>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div
                  className={`flex h-11 items-center justify-center rounded-lg border text-sm ${
                    step.active
                      ? "border-teal-500/30 bg-teal-500/10 text-white"
                      : "border-white/10 bg-gray-800 text-gray-300"
                  } ${
                    step.wide
                      ? "w-full lg:min-w-[280px]"
                      : "w-full lg:min-w-[180px]"
                  }`}
                >
                  {step.title}
                </div>

                {index !== steps.length - 1 && (
                  <div className="hidden px-2 text-lg text-slate-500 lg:block">
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