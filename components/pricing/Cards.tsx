import React from "react";

const cards = [
  {
    title: "Validate the loop before a full production rollout.",
    description:
      "A scoped pilot helps an operator connect selected events, configure governed reward rules, expose a wallet experience, and measure agreed payment or recharge behavior outcomes.",
    note:
      "Not implied: guaranteed retention improvement, free production deployment, unlimited custom integration, or automatic pilot acceptance.",
    button: "Apply for a launch pilot",
    border: "border-teal-500/30",
  },
  {
    title: "Operator Platform: production-ready.",
    description:
      "A production deployment covering reward issuance, embedded wallets, ledger reconciliation, reporting, and ongoing campaign operations aligned to your operator volume and integrations.",
    note: "",
    button: "Request operator pricing",
    border: "border-white/10",
  },
  {
    title: "Enterprise Telecom Group: governed at scale.",
    description:
      "Dedicated tenancy, regional deployment, multi-operator governance, custom controls, and priority support for larger groups.",
    note: "",
    button: "Contact enterprise sales",
    border: "border-white/10",
  },
];

export default function Cards() {
  return (
    <section className="bg-slate-900 px-4 py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex min-h-[320px] flex-col rounded-xl border ${card.border} bg-gray-800 p-6`}
          >
            {/* Title */}
            <h3 className="text-base font-bold leading-6 text-slate-100">
              {card.title}
            </h3>

            {/* Description */}
            <p className="mt-6 text-sm leading-5 text-gray-400">
              {card.description}
            </p>

            {/* Note (Only First Card) */}
            {card.note && (
              <p className="mt-6 text-xs leading-5 text-slate-500">
                {card.note}
              </p>
            )}

            {/* Button */}
            <button className="mt-auto rounded-lg border border-white/20 py-3 text-center text-xs font-bold text-slate-100 transition hover:bg-white/10">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}