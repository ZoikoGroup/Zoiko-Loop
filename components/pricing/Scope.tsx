import React from "react";

const items = [
  {
    title: "Core platform scope",
    description:
      "Event ingestion, rules engine, ledger, wallet APIs, consent/fraud controls, operator console, reconciliation, reporting.",
    highlight: false,
  },
  {
    title: "Implementation services",
    description:
      "Discovery, event mapping, configuration, testing, certification, launch support — standard, optional, or custom.",
    highlight: false,
  },
  {
    title: "Integration options",
    description:
      "ZoikoNex, webhooks, SFTP, network, gateway, open-banking feeds. Third-party access and fees may apply.",
    highlight: false,
  },
  {
    title: "Deployment options",
    description:
      "Region, environment count, tenancy, resilience, residency requirements — no universal availability claim.",
    highlight: false,
  },
  {
    title: "Support options",
    description:
      "Standard support, priority support, technical account management, extended coverage.",
    highlight: false,
  },
  {
    title: "Common exclusions",
    description:
      "Carrier services, payment processing, cardholder-data handling, reward funding, taxes, third-party licenses, operator app development unless scoped.",
    highlight: true,
  },
];

export default function Scope() {
  return (
    <section className="bg-slate-900 px-4 py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Plain language
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-100 lg:text-4xl lg:leading-[52px]">
            Commercial inclusions, options, and
            <br className="hidden md:block" />
            exclusions
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-[1184px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.slice(0, 4).map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6"
            >
              <h3 className="text-sm font-bold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-6 text-xs leading-5 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mx-auto mt-6 grid max-w-[592px] grid-cols-1 gap-6 md:grid-cols-2">
          {items.slice(4).map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border bg-gray-800 p-6 ${
                item.highlight
                  ? "border-amber-500"
                  : "border-white/10"
              }`}
            >
              <h3 className="text-sm font-bold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-6 text-xs leading-5 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}