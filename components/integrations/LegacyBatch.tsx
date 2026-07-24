import React from "react";
import Link from "next/link";

export default function LegacyBatch() {
  const cards = [
    {
      title: "Connection",
      description:
        "Host, port, username, authentication type, environment, owner, rotation date.",
    },
    {
      title: "Schedule",
      description:
        "Timezone, expected frequency, cutoff, late-file threshold, holiday behavior.",
    },
    {
      title: "File contract",
      description:
        "Name pattern, compression, encryption, delimiter, encoding, schema version.",
    },
    {
      title: "Validation",
      description:
        "Required columns, field types, allowed values, duplicate keys, consent fields.",
    },
    {
      title: "Batch history",
      description:
        "File, received time, rows accepted/rejected/duplicate, status, error file.",
    },
    {
      title: "Reconciliation",
      description:
        "Source row total, accepted total, reward postings, reversals, unresolved variance.",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 transition-colors duration-300 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            Governed legacy interoperability
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Bring batch events from legacy systems
          </h2>

          <p className="mt-6 text-base font-normal leading-7 text-gray-400">
            Encrypted files, versioned templates, scheduled delivery,
            row-level validation, duplicate controls, batch
            acknowledgements, reconciliation, and migration guidance—not
            a second-class path.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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

        {/* Buttons */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <Link
            href="/sftp-readiness-checklist"
            className="inline-flex h-12 items-center justify-center rounded-[10px] bg-amber-500 px-8 text-center text-base font-normal text-yellow-950 transition hover:bg-amber-400"
          >
            Download the SFTP readiness checklist
          </Link>

          <Link
            href="/contact-sales"
            className="inline-flex h-12 items-center justify-center rounded-[10px] border border-white/20 px-8 text-center text-base font-normal text-slate-100 transition hover:border-white/40 hover:bg-white/5"
          >
            Talk to a legacy integration specialist
          </Link>
        </div>
      </div>
    </section>
  );
}