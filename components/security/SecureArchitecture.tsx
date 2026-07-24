import React from "react";

export default function SecureArchitecture() {
  const architectures = [
    {
      title: "Webhook API",
      description:
        "TLS transport, scoped credentials, signed events, timestamp tolerance, schema validation, idempotency, rate controls, and replay handling.",
    },
    {
      title: "SFTP batch",
      description:
        "Managed keys, approved ciphers, fixed directories, file naming, checksum, schema validation, quarantine, and processing acknowledgment.",
    },
    {
      title: "ZoikoNex native stream",
      description:
        "Tenant-bound trust relationship, event contract, authorization, integrity validation, and operational monitoring.",
    },
    {
      title: "Top-up network / gateway",
      description:
        "Source authorization, event normalization, duplicate prevention, purpose mapping, and reconciliation.",
    },
    {
      title: "Open-banking feed",
      description:
        "Region-specific authorization, minimal fields, token lifecycle, consent, and purpose controls.",
    },
    {
      title: "Outbound APIs / webhooks",
      description:
        "Scoped access, signature verification, destination validation, rotation, retries, and failure isolation.",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            Every pathway, governed
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-100 sm:text-4xl">
            Secure integration architecture
          </h2>
        </div>

        {/* Architecture Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {architectures.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6"
            >
              <h3 className="text-base font-bold text-slate-100">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visibility Table */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-gray-800">

          <div className="grid grid-cols-2 border-b border-white/20">
            <div className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              Public
            </div>

            <div className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              Restricted after verification / NDA
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 p-5 text-sm leading-6 text-gray-400 md:grid-cols-2">
            <p>
              Control principles, supported auth patterns,
              event-validation sequence, responsibility model,
              safe examples.
            </p>

            <p>
              Exact algorithms/configuration, network diagrams,
              environment details, penetration reports,
              vulnerability findings, incident artifacts,
              key-management implementation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}