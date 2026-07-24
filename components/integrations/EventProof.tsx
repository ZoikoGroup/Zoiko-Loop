import React from "react";

export default function EventProof() {
  const cards = [
    {
      title: "Schema catalog",
      description:
        "Event name, version, status, required/optional fields, examples, deprecation date.",
    },
    {
      title: "Mapping builder",
      description:
        "Source field, transform, canonical field, requirement, sample value, validation result, lineage.",
    },
    {
      title: "Transform library",
      description:
        "Hashing, date/currency normalization, enumerations, boolean mapping—no arbitrary unreviewed code.",
    },
    {
      title: "Validation panel",
      description:
        "Tenant, signature, timestamp, schema, consent, purpose, idempotency, field format.",
    },
    {
      title: "Sample event runner",
      description:
        "Paste or upload a sample, redact sensitive values, run validation, export a report.",
    },
    {
      title: "Version impact",
      description:
        "Affected connections, test status, deadline, owner, migration checklist.",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            Operational proof
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-center text-3xl font-normal leading-tight text-slate-100 sm:text-4xl lg:text-[42px] lg:leading-[52px]">
            Normalize events without losing lineage or
            <br className="hidden sm:block" />
            evidence
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.slice(0, 4).map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6 transition hover:border-teal-500/30"
            >
              <h3 className="text-sm font-normal text-slate-100">
                {card.title}
              </h3>

              <p className="mt-4 text-xs font-normal leading-6 text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.slice(4).map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6 transition hover:border-teal-500/30"
            >
              <h3 className="text-sm font-normal text-slate-100">
                {card.title}
              </h3>

              <p className="mt-4 text-xs font-normal leading-6 text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}