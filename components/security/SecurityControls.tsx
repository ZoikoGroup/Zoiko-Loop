import React from "react";

const controls = [
  {
    title: "Identity and access",
    description:
      "Role-based administrative access with least-privilege design and protected privileged actions.",
  },
  {
    title: "Tenant isolation",
    description:
      "Tenant-specific processing boundaries and scoped identifiers prevent cross-operator access.",
  },
  {
    title: "Event integrity",
    description:
      "Signed, validated, versioned, and idempotent events reduce spoofing and duplicate-processing risk.",
  },
  {
    title: "Secrets and keys",
    description:
      "Credentials and signing material are protected, rotated, scoped, and never entered into public forms.",
  },
  {
    title: "Ledger integrity",
    description:
      "Double-entry accounting and reconciliation protect reward balances and liability records.",
  },
  {
    title: "Fraud controls",
    description:
      "Velocity, eligibility, hold, cap, clawback, and review controls protect reward value.",
  },
  {
    title: "Auditability",
    description:
      "Administrative, policy, access, event, and reconciliation actions create attributable records.",
  },
  {
    title: "Operational resilience",
    description:
      "Monitoring, alerting, recovery, and controlled change support reliable service operation.",
  },
];

export default function SecurityControls() {
  return (
    <section className="bg-slate-900 px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            8 control domains
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-100 sm:text-4xl">
            Core security control domains
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {controls.map((control) => (
            <div
              key={control.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6"
            >
              <h3 className="text-sm font-bold leading-6 text-slate-100">
                {control.title}
              </h3>

              <p className="mt-4 text-xs leading-5 text-gray-400">
                {control.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}