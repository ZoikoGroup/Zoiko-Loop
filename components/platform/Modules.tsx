import React from "react";

const modules = [
  {
    title: "Event Ingestion",
    description:
      "Real-time APIs, native streams, and governed batch files validated for tenant, schema, consent, and duplicates.",
    button: "Explore Event Ingestion",
  },
  {
    title: "Reward Rules Engine",
    description:
      "Configure eligibility, streaks, tiers, caps, and approvals in one governed workspace with no code deployment.",
    button: "Explore the Rules Engine",
  },
  {
    title: "Rewards Ledger",
    description:
      "Financial-grade double-entry accounting for issuance, redemption, expiry, reversal, and reconciliation.",
    button: "Explore the Rewards Ledger",
  },
  {
    title: "Retention Intelligence",
    description:
      "Turn verified behavior and reward outcomes into explainable retention analysis.",
    button: "Explore Retention Intelligence",
  },
  {
    title: "ZoikoNex Integration",
    description:
      "Pre-mapped native event contracts move approved ZoikoNex billing outcomes into Zoiko Loop.",
    button: "Explore ZoikoNex Integration",
  },
  {
    title: "Operator Console",
    description:
      "Monitor campaigns, liability, retention cohorts, integrations, and audit evidence from one governed console.",
    button: "Explore the Operator Console",
  },
];

export default function Modules() {
  return (
    <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Six modules, one loop
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-100 sm:text-4xl">
            The platform, module by module
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[220px] flex-col rounded-xl border border-white/10 bg-gray-800 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-gray-400">
                {item.description}
              </p>

              <button
                type="button"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal-500 hover:text-teal-400"
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}