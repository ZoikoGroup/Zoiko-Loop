import React from "react";

const rows = [
  {
    title: "Customer identity master",
    zoiko: "Not the primary system of record.",
    operator: "Maintains customer identity and account master.",
    public: "Uses operator-provided pseudonymous references for reward processing.",
  },
  {
    title: "Payment card data",
    zoiko: "Not required for reward eligibility integrations.",
    operator: "Remains with payment and billing systems.",
    public: "Send payment outcome events, not cardholder data.",
  },
  {
    title: "Payment/recharge outcome",
    zoiko: "Processes minimum event attributes for configured reward purposes.",
    operator: "Defines lawful basis, purpose, source accuracy, and event submission.",
    public: "Purpose-limited event processing.",
  },
  {
    title: "Consent reference",
    zoiko: "Validates supplied consent or authorization per configured rules.",
    operator: "Captures, maintains, and governs subscriber consent where required.",
    public: "Shared control boundary, not a substitute for operator consent governance.",
  },
  {
    title: "Reward ledger",
    zoiko: "Maintains reward-accounting records and auditability.",
    operator: "Funds rewards, approves rules, reconciles liabilities.",
    public: "Clear financial and operational ownership.",
  },
  {
    title: "Retention and deletion",
    zoiko: "Applies configured and contractual retention rules.",
    operator: "Defines jurisdictional, operational, and legal requirements.",
    public: "Policy mapping is established during deployment.",
  },
  {
    title: "Data subject / customer request",
    zoiko: "Supports the operator through agreed processor/service workflows.",
    operator: "Remains the customer-facing controller or service owner.",
    public: "Requests are routed through the operator unless otherwise contracted.",
  },
];

export default function DataBoundary() {
  return (
    <section className="bg-slate-900 px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            Who owns what
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-100 sm:text-4xl">
            Data boundary and responsibility model
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-6 text-gray-400">
            This wireframe does not replace a DPA or legal opinion — the
            published model is validated against actual contracts and deployment
            architecture.
          </p>
        </div>


        <div className="mt-14 overflow-x-auto rounded-xl border border-white/10 bg-gray-800">
          <table className="min-w-[1100px] w-full border-collapse">
            <thead>
              <tr className="border-b border-white/20 text-left">
                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Data / responsibility
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Zoiko Loop position
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Operator position
                </th>

                <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Public explanation
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.title}
                  className="border-b border-white/10 last:border-0"
                >
                  <td className="px-5 py-5 text-sm font-bold text-slate-100">
                    {row.title}
                  </td>

                  <td className="px-5 py-5 text-sm leading-6 text-gray-400">
                    {row.zoiko}
                  </td>

                  <td className="px-5 py-5 text-sm leading-6 text-gray-400">
                    {row.operator}
                  </td>

                  <td className="px-5 py-5 text-sm leading-6 text-gray-400">
                    {row.public}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}