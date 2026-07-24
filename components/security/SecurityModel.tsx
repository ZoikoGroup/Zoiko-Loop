import React from "react";

export default function SecurityModel() {
  const stages = [
    "1. System of record",
    "2. Event submission",
    "3. Boundary validation",
    "4. Rules evaluation",
    "5. Financial posting",
    "6. Controlled output",
    "7. Monitoring & response",
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            From event to ledger
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-100 sm:text-4xl">
            Security model overview
          </h2>

          <p className="mt-4 text-base text-gray-400">
            Select a stage to see its boundary and control story.
          </p>
        </div>

        {/* Stages */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {stages.map((stage, index) => (
            <button
              key={stage}
              className={`rounded-full px-5 py-3 text-xs font-medium transition ${
                index === 0
                  ? "border border-teal-500/30 bg-teal-500/10 text-slate-100 font-bold"
                  : "border border-white/20 bg-gray-900 text-gray-400"
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-gray-800 p-6">
          <h3 className="text-base font-bold text-slate-100">
            Operator system of record
          </h3>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Subscriber identity, billing, payment, recharge, and account
            ownership remain with the operator.
          </p>

          <p className="mt-4 text-xs text-slate-500">
            Public proof: Responsibility label — operator controlled.
          </p>
        </div>
      </div>
    </section>
  );
}