import React from "react";

const comparisonData = [
  {
    path: "ZoikoNex native stream",
    bestFit:
      "ZoikoNex operators seeking lowest mapping effort.",
    latency: "Near real time",
    setup:
      "Tenant connection and governance review.",
    tradeOff:
      "Available only where ZoikoNex tenancy and event support are present.",
  },
  {
    path: "Webhook API",
    bestFit:
      "Modern BSS, billing, payment, or orchestration platforms.",
    latency: "Real time",
    setup:
      "Endpoint, signing, schema mapping, retries.",
    tradeOff:
      "Requires reliable outbound-event capability.",
  },
  {
    path: "SFTP batch",
    bestFit:
      "Legacy systems and scheduled operational files.",
    latency: "Scheduled",
    setup:
      "File template, encryption, schedule, reconciliation.",
    tradeOff:
      "Not suitable for immediate subscriber experiences.",
  },
  {
    path: "Top-up network API",
    bestFit:
      "Prepaid recharge events from approved partners.",
    latency: "Provider-dependent",
    setup:
      "Partner credentials, event taxonomy.",
    tradeOff:
      "Coverage and event semantics vary by provider.",
  },
  {
    path: "Payment gateway / Open Banking",
    bestFit:
      "Payment-success, refund, and confirmation outcomes.",
    latency: "Real time to provider-dependent",
    setup:
      "Gateway signature or bank authorization, consent.",
    tradeOff:
      "Requires explicit consent and purpose validation.",
  },
];

export default function IntegrationComparison() {
  return (
    <section className="bg-[#0f172a] py-20 px-4">
      <div className="max-w-[1240px] mx-auto">

        <div className="text-center mb-14">
          <p className="text-xs font-normal uppercase tracking-[0.25em] text-slate-500">
            Compare Paths
          </p>

          <h2 className="mt-4 text-4xl font-normal text-white">
            Integration Path Comparison Matrix
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#1f2937]">
          <table className="min-w-[1184px] w-full border-collapse">
            <thead>
              <tr className="border-b border-white/20 text-left">
                <th className="w-[180px] px-4 py-4 text-xs font-normal uppercase tracking-wide text-slate-500">
                  Path
                </th>

                <th className="w-[270px] px-4 py-4 text-xs font-normal uppercase tracking-wide text-slate-500">
                  Best Fit
                </th>

                <th className="w-[170px] px-4 py-4 text-xs font-normal uppercase tracking-wide text-slate-500">
                  Latency
                </th>

                <th className="w-[245px] px-4 py-4 text-xs font-normal uppercase tracking-wide text-slate-500">
                  Primary Setup
                </th>

                <th className="w-[320px] px-4 py-4 text-xs font-normal uppercase tracking-wide text-slate-500">
                  Key Trade-off
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-normal text-slate-100 leading-5">
                      {item.path}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-normal text-gray-400 leading-6">
                      {item.bestFit}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-normal text-gray-400 leading-6">
                      {item.latency}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-normal text-gray-400 leading-6">
                      {item.setup}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-normal text-gray-400 leading-6">
                      {item.tradeOff}
                    </p>
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