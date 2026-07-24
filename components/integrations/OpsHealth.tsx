import React from "react";

export default function OpsHealth() {
  const stats = [
    { value: "18,204", label: "Events received (24h)" },
    { value: "99.4%", label: "Accepted" },
    { value: "0.4%", label: "Rejected" },
    { value: "0.2%", label: "Duplicate" },
    { value: "7", label: "Unresolved exceptions" },
  ];

  const connections = [
    {
      name: "Billing Events v2",
      path: "Webhook API",
      environment: "Production",
      status: "Connected",
      statusColor:
        "bg-teal-500/10 border border-teal-500/30 text-teal-500",
      lastEvent: "12s ago",
    },
    {
      name: "Recharge Batch",
      path: "SFTP",
      environment: "Production",
      status: "Degraded",
      statusColor:
        "bg-amber-500/10 border border-amber-500/30 text-amber-500",
      lastEvent: "4m ago",
    },
    {
      name: "ZoikoNex Tenant",
      path: "Native stream",
      environment: "Production",
      status: "Connected",
      statusColor:
        "bg-teal-500/10 border border-teal-500/30 text-teal-500",
      lastEvent: "3s ago",
    },
    {
      name: "Partner Top-Up A",
      path: "Network API",
      environment: "Sandbox",
      status: "Needs setup",
      statusColor:
        "border border-white/20 text-gray-400",
      lastEvent: "—",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            After go-live
          </p>

          <h2 className="mt-4 text-3xl font-normal text-slate-100 sm:text-4xl lg:text-5xl">
            Integration operations and health
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-gray-900 p-5"
            >
              <h3 className="text-2xl font-normal text-slate-100">
                {item.value}
              </h3>

              <p className="mt-2 text-xs font-normal text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="mt-12 overflow-x-auto rounded-xl border border-white/10 bg-gray-800">
          <table className="min-w-full">
            <thead className="border-b border-white/10">
              <tr className="text-left text-xs font-normal uppercase tracking-wide text-slate-500">
                <th className="px-6 py-4">Connection</th>
                <th className="px-6 py-4">Path</th>
                <th className="px-6 py-4">Environment</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Event</th>
              </tr>
            </thead>

            <tbody>
              {connections.map((item) => (
                <tr
                  key={item.name}
                  className="border-b border-white/10 last:border-0"
                >
                  <td className="px-6 py-5 font-normal text-slate-100">
                    {item.name}
                  </td>

                  <td className="px-6 py-5 font-normal text-gray-400">
                    {item.path}
                  </td>

                  <td className="px-6 py-5 font-normal text-gray-400">
                    {item.environment}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-normal ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 font-normal text-gray-400">
                    {item.lastEvent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-base font-normal leading-7 text-slate-300">
          Operations actions: pause intake with a required reason · replay
          eligible events after idempotency check · rotate secrets with an
          overlap window · open an incident while preserving context.
        </p>
      </div>
    </section>
  );
}