import React from "react";

export default function ApplicationSecurity() {
  const cards = [
    {
      title: "Secure development lifecycle",
      description:
        "Security requirements, code review, automated testing, dependency controls, and controlled release.",
    },
    {
      title: "Vulnerability management",
      description:
        "Findings are triaged, prioritized, remediated, and tracked according to risk.",
    },
    {
      title: "Penetration testing",
      description:
        "Independent testing information can be shared through the verified review process when available.",
    },
    {
      title: "Change management",
      description:
        "Production changes follow authorization, testing, traceability, and rollback practices.",
    },
    {
      title: "Environment separation",
      description:
        "Development, testing, sandbox, and production access are separated and governed.",
    },
    {
      title: "Logging and monitoring",
      description:
        "Security and service signals support detection, investigation, and response.",
    },
    {
      title: "Backup and recovery",
      description:
        "Protected backups and tested restoration support resilience objectives.",
    },
    {
      title: "Third-party risk",
      description:
        "Critical services and subprocessors are reviewed and governed according to risk.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-16 lg:px-32">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Delivery discipline
        </p>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          Application and operational security
        </h2>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-gray-800 p-6"
          >
            <h3 className="text-sm font-bold leading-6 text-slate-100">
              {card.title}
            </h3>

            <p className="mt-4 text-xs leading-5 text-gray-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}