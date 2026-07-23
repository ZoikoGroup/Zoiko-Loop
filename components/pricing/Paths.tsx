import React from "react";

const paths = [
  {
    title: "Launch Pilot",
    description:
      "MVNOs and challenger operators validating event ingestion, reward rules, wallet experience, and retention measurement.",
    benefit:
      "A bounded, measurable path from sandbox to evidence-backed production decision",
    button: "Apply for pilot",
    primary: false,
  },
  {
    title: "Operator Platform",
    description:
      "Operators ready for production reward issuance, embedded wallets, reconciliation, reporting, and ongoing campaign operations.",
    benefit:
      "A production deployment aligned to operator volume, integrations, and governance",
    button: "Request operator pricing",
    primary: true,
  },
  {
    title: "Enterprise Telecom Group",
    description:
      "Larger groups requiring dedicated tenancy, regional deployment, multi-operator governance, custom controls, and priority support.",
    benefit:
      "A governed group deployment with enterprise architecture and commercial coordination",
    button: "Contact enterprise sales",
    primary: false,
  },
];

export default function Paths() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Choose your path
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[52px] text-slate-100">
            Three commercial pathways
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {paths.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border p-7 ${
                item.primary
                  ? "border-teal-500/30 bg-gray-800"
                  : "border-white/10 bg-gray-800"
              }`}
            >
              <p className="text-xs uppercase tracking-wider text-slate-300">
                Best for
              </p>

              <h3 className="mt-6 text-xl font-bold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                {item.description}
              </p>

              <p className="mt-6 text-sm leading-6 text-gray-400">
                {item.benefit}
              </p>

              <button
                className={`mt-8 w-full rounded-[10px] border py-3 text-sm font-bold transition ${
                  item.primary
                    ? "border-amber-500 bg-amber-500 text-yellow-950 hover:bg-amber-400"
                    : "border-white/75 text-slate-100 hover:bg-white/10"
                }`}
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