import React from "react";

export default function LedgerIntegrity() {
  const rows = [
    {
      capability: "Double-entry posting",
      explanation:
        "Every value movement is represented by balanced ledger entries rather than a mutable balance field.",
      state: "Unbalanced transaction is rejected and alerted.",
    },
    {
      capability: "Idempotent processing",
      explanation:
        "Duplicate event submission does not create duplicate reward value.",
      state: "Existing result is returned with correlation details.",
    },
    {
      capability: "Reversal propagation",
      explanation:
        "Source reversals can trigger controlled reward reversals per approved rules.",
      state:
        "Partial redemption and insufficient balance follow defined policy.",
    },
    {
      capability: "Reward holds",
      explanation:
        "Suspicious or policy-sensitive rewards can be held before availability.",
      state:
        "Hold reason, owner, expiry, review, release, or clawback.",
    },
    {
      capability: "Velocity and caps",
      explanation:
        "Per-event, subscriber, campaign, tenant, and time-window controls limit exposure.",
      state: "Threshold status and override approval.",
    },
    {
      capability: "Daily reconciliation",
      explanation:
        "Ledger movements, wallet projection, partner funding, and operator liability are reconciled.",
      state:
        "Matched, unmatched, aging, exception, and resolved states.",
    },
    {
      capability: "Investigation trail",
      explanation:
        "Rule, event, actor, decision, and adjustment history remain attributable.",
      state:
        "Read-only timeline and evidence export permission.",
    },
  ];

  return (
    <section className="relative bg-slate-900 px-6 py-16 lg:px-32">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Financial-grade
        </p>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          Ledger integrity, fraud, and reconciliation
        </h2>
      </div>

      {/* Table */}
      <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-gray-800">
        <div className="hidden grid-cols-[180px_1fr_320px] border-b border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 md:grid">
          <div>Capability</div>
          <div>Required explanation</div>
          <div>State / edge case</div>
        </div>

        <div>
          {rows.map((item, index) => (
            <div
              key={index}
              className="grid gap-4 border-b border-white/10 px-6 py-5 last:border-none md:grid-cols-[180px_1fr_320px]"
            >
              <div className="text-sm font-bold text-slate-100">
                {item.capability}
              </div>

              <div className="text-sm leading-5 text-gray-400">
                {item.explanation}
              </div>

              <div className="text-sm leading-5 text-gray-400">
                {item.state}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-6 text-slate-100">
        Zoiko Loop is a rewards and retention platform — not a payment
        processor, lender, credit bureau, or credit-scoring service.
      </p>
    </section>
  );
}