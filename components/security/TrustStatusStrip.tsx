import React from "react";

export default function TrustStatusStrip() {
  const items = [
    {
      title: "Consent-aware event validation",
      description:
        "Consent token and processing-purpose checks are evaluated before reward eligibility logic.",
      status: "Designed into processing boundary",
      type: "teal",
    },
    {
      title: "Pseudonymized subscriber references",
      description:
        "Tenant-specific references so Zoiko Loop does not become the operator customer master.",
      status: "Default architecture",
      type: "teal",
    },
    {
      title: "Double-entry reward ledger",
      description:
        "Issuance, redemption, reversal, expiry, funding, and liability as ledger transactions.",
      status: "Core platform control",
      type: "teal",
    },
    {
      title: "Tamper-resistant audit trail",
      description:
        "Administrative and processing events retained per defined policy and access rules.",
      status: "Core platform control",
      type: "teal",
    },
    {
      title: "PCI scope minimization",
      description:
        "Integrations are designed around payment outcomes rather than cardholder data.",
      status: "Architecture objective",
      type: "amber",
    },
    {
      title: "SOC 2 Type II",
      description:
        "Not implied as complete until independently verified and publication-approved.",
      status: "Roadmap",
      type: "gray",
    },
    {
      title: "ISO 27001",
      description:
        "Not implied as certified until independently verified and publication-approved.",
      status: "Roadmap",
      type: "gray",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-normal uppercase tracking-widest text-slate-500">
            Assurance status, stated plainly
          </p>

          <h2 className="mt-5 text-4xl font-normal text-slate-100">
            Trust status strip
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-normal text-gray-400">
            Status is text-first — never color alone. Roadmap items are labeled
            and not implied as complete.
          </p>
        </div>

        {/* Status Cards */}
        <div className="mt-14 space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-[10px] border border-white/10 bg-gray-800 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-sm font-normal text-slate-100">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-normal leading-5 text-gray-400">
                  {item.description}
                </p>
              </div>

              <span
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-normal ${
                  item.type === "teal"
                    ? "border border-teal-500/30 bg-teal-500/10 text-teal-500"
                    : item.type === "amber"
                    ? "border border-amber-500/30 bg-amber-500/10 text-amber-500"
                    : "border border-white/20 bg-gray-800 text-slate-500"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}