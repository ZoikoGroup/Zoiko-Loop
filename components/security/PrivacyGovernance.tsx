import React from "react";

export default function PrivacyGovernance() {
  const cards = [
    {
      title: "Purpose limitation",
      description:
        "Event processing is tied to configured reward, reconciliation, support, and security purposes.",
    },
    {
      title: "Consent / authorization",
      description:
        "Consent or authorization references are validated at the processing boundary where required by deployment policy.",
    },
    {
      title: "Data minimization",
      description:
        "Collect only fields needed for eligibility, posting, reconciliation, support, security, and approved analytics.",
    },
    {
      title: "Pseudonymization",
      description:
        "Tenant-scoped pseudonymous references instead of direct customer identity wherever architecture permits.",
    },
    {
      title: "Retention",
      description:
        "Depends on data class, purpose, contract, jurisdiction, audit, and legal requirements — no universal period claim.",
    },
    {
      title: "International transfers",
      description:
        "Deployment and subprocessor arrangements are reviewed by region and contract.",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            Purpose-limited by design
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-100 sm:text-4xl">
            Privacy, consent, and regional governance
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.slice(0, 4).map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6"
            >
              <h3 className="text-sm font-bold text-slate-100">
                {card.title}
              </h3>

              <p className="mt-4 text-xs leading-5 text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.slice(4).map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6"
            >
              <h3 className="text-sm font-bold text-slate-100">
                {card.title}
              </h3>

              <p className="mt-4 text-xs leading-5 text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Approved Language */}
        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-white/10 bg-gray-800 p-6">
          <h3 className="text-xs font-bold text-slate-100">
            Approved language
          </h3>

          <p className="mt-4 text-xs leading-5 text-teal-500">
            Use: consent-aware, purpose-limited, pseudonymized,
            data-minimized, region-aware, operator remains system of record.
          </p>

          <p className="mt-4 text-xs leading-5 text-red-400">
            Avoid: "anonymous" when re-identification risk remains,
            "fully compliant," "global compliance guaranteed,"
            "no personal data ever processed."
          </p>
        </div>

      </div>
    </section>
  );
}