import React from "react";

const rows = [
  {
    capability: "Primary objective",
    pilot: "Validate fit and impact",
    operator: "Operate in production",
    enterprise: "Scale across operators or regions",
  },
  {
    capability: "Sandbox",
    pilot: "Included",
    operator: "Included",
    enterprise: "Included",
  },
  {
    capability: "Production environment",
    pilot: "Optional after exit criteria",
    operator: "Included",
    enterprise: "Included with group architecture",
  },
  {
    capability: "Event ingestion",
    pilot: "Selected pathway",
    operator: "Production pathway(s)",
    enterprise: "Multiple pathways and operators",
  },
  {
    capability: "Reward rules",
    pilot: "Defined pilot rules",
    operator: "Configurable governed rules",
    enterprise: "Advanced governance and delegation",
  },
  {
    capability: "Embedded wallet APIs",
    pilot: "Pilot scope",
    operator: "Production scope",
    enterprise: "Group / market-specific scope",
  },
  {
    capability: "Ledger and reconciliation",
    pilot: "Pilot-controlled",
    operator: "Production-grade",
    enterprise: "Advanced reporting and coordination",
  },
  {
    capability: "Retention analytics",
    pilot: "Pilot measurement plan",
    operator: "Ongoing operator analytics",
    enterprise: "Cross-market reporting subject to governance",
  },
  {
    capability: "Implementation support",
    pilot: "Rule and integration assistance",
    operator: "Production onboarding",
    enterprise: "Dedicated program coordination",
  },
  {
    capability: "Security review",
    pilot: "Proportionate review",
    operator: "Production review",
    enterprise: "Enterprise and regional review",
  },
  {
    capability: "Commercial basis",
    pilot: "Defined scope and duration",
    operator: "Volume, integration, region, tenancy, support",
    enterprise: "Custom group scope and governance",
  },
];

export default function Matrix() {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Compare paths
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[52px] text-slate-100">
            Pathway comparison matrix
          </h2>
        </div>

        {/* Table */}
        <div className="mt-16 overflow-x-auto rounded-xl border border-white/10 bg-gray-800">
          <table className="w-full min-w-[1184px] border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="w-[220px] px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Capability
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Launch Pilot
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operator Platform
                </th>
                <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Enterprise Group
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.capability}
                  className="border-b border-white/10 last:border-0"
                >
                  <td className="px-4 py-4 text-sm font-bold text-slate-100">
                    {row.capability}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-400">
                    {row.pilot}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-400">
                    {row.operator}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-400">
                    {row.enterprise}
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