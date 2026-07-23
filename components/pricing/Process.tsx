import React from "react";

const steps = [
  { number: "1", title: "Scope" },
  { number: "2", title: "Discovery" },
  { number: "3", title: "Solution fit" },
  { number: "4", title: "Proposal" },
  { number: "5", title: "Review" },
  { number: "6", title: "Contract & launch" },
];

export default function Process() {
  return (
    <section className="bg-slate-900 px-4 py-20">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            From scope to contract
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-100 lg:text-4xl">
            Quote and commercial process
          </h2>
        </div>

        {/* Process Cards */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex h-20 flex-col items-center justify-center rounded-[10px] border border-white/10 bg-gray-800"
            >
              <span className="text-xs font-bold text-teal-500">
                {step.number}
              </span>

              <span className="mt-3 text-center text-xs text-gray-400">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}