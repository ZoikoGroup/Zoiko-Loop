import React from "react";

const stats = [
  {
    value: "6",
    label: "Connected paths",
  },
  {
    value: "99.4%",
    label: "Event acceptance rate",
  },
  {
    value: "340ms",
    label: "p95 processing latency",
  },
  {
    value: "3",
    label: "Failed events (24h)",
  },
];

const integrations = [
  {
    name: "ZoikoNex native stream",
    status: "Connected",
    color: "teal",
  },
  {
    name: "Webhook API — Billing v2",
    status: "Connected",
    color: "teal",
  },
  {
    name: "SFTP batch — Recharge",
    status: "Testing",
    color: "amber",
  },
  {
    name: "Top-up network — Partner A",
    status: "Needs setup",
    color: "gray",
  },
];

export default function IntegrationHero() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(circle_at_85%_-10%,rgba(20,184,166,0.12),transparent_60%)] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2">
            <span className="text-xs font-normal uppercase tracking-[0.25em] text-teal-400">
              Telecom Integrations
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-normal leading-tight text-white lg:text-5xl">
            Connect Zoiko Loop
            <br />
            without replacing
            <br />
            your billing stack.
          </h1>

          <p className="mt-6 text-base font-normal leading-8 text-gray-400">
            Stream payment, recharge, bundle, account, and consent events
            through ZoikoNex, real-time webhooks, governed SFTP batches,
            top-up networks, payment gateways, or approved open-banking
            feeds.
          </p>

          <p className="mt-6 text-sm font-normal leading-7 text-slate-500">
            Signed events. Canonical schemas. Consent validation.
            Idempotent processing. Pseudonymized subscriber references.
          </p>

          <button className="mt-8 rounded-lg bg-amber-400 px-8 py-3 font-normal text-yellow-950 transition hover:bg-amber-300">
            Talk to an Integration Specialist
          </button>

          <p className="mt-10 cursor-pointer text-sm font-normal text-gray-400 hover:text-white">
            View developer docs →
          </p>

          <p className="mt-5 text-xs font-normal leading-6 text-slate-500">
            Zoiko Loop receives event outcomes and reward-eligibility data —
            not cardholder data or customer master records.
          </p>
        </div>

        {/* Right Card */}
        <div className="w-full rounded-2xl border border-white/10 bg-[#111827] p-6 shadow-2xl lg:w-1/2">
          <p className="text-xs font-normal uppercase tracking-wider text-slate-500">
            Illustrative — Integration Health
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-gray-900 p-4"
              >
                <h3 className="text-2xl font-normal text-white">
                  {item.value}
                </h3>
                <p className="mt-2 text-xs font-normal text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Integration List */}
          <div className="mt-8 space-y-4">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <p className="text-sm font-normal text-gray-300">
                  {item.name}
                </p>

                <span
                  className={`rounded-full px-4 py-1 text-xs font-normal ${
                    item.color === "teal"
                      ? "border border-teal-500/30 bg-teal-500/10 text-white"
                      : item.color === "amber"
                      ? "border border-amber-500/30 bg-amber-500/10 text-white"
                      : "border border-white/20 bg-transparent text-white"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-normal text-white">
            Last successful event: 12s ago · Webhook secret rotated · Schema
            mapping updated
          </p>
        </div>
      </div>
    </section>
  );
}