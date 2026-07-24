import React from "react";
import Link from "next/link";

export default function WebhookApiSection() {
  const steps = [
    {
      number: "1",
      title: "Sandbox connection",
      description: "Create sandbox connection and assign an owner.",
    },
    {
      number: "2",
      title: "Credentials",
      description: "Generate endpoint and secret through a protected drawer.",
    },
    {
      number: "3",
      title: "Schema & mapping",
      description:
        "Select schema version and map source to canonical fields.",
    },
    {
      number: "4",
      title: "Test event",
      description:
        "Send a signed test event; review latency and validation.",
    },
    {
      number: "5",
      title: "Retry & failure policy",
      description:
        "Configure retry, timeout, duplicate, and dead-letter behavior.",
    },
    {
      number: "6",
      title: "Certify & promote",
      description:
        "Complete certification and promote with dual control and audit logging.",
    },
  ];

  return (
    <section className="bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            Real-time, standards-based
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-center text-3xl font-normal leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Send verified events through a webhook API
          </h2>

          <p className="mt-6 text-base font-normal leading-7 text-gray-400">
            Use signed HTTPS events, versioned schemas, idempotency keys,
            retry guidance, and test environments to connect modern BSS,
            billing, gateway, or orchestration platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-white/10 bg-gray-800 p-6 transition hover:border-teal-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900">
                  <span className="text-sm font-normal text-teal-500">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-normal text-slate-100">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm font-normal leading-6 text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/request-webhook-sandbox"
            className="inline-flex h-12 items-center justify-center rounded-[10px] bg-amber-500 px-8 text-base font-normal text-yellow-950 transition hover:bg-amber-400"
          >
            Request webhook sandbox
          </Link>

          <Link
            href="/webhook-guide"
            className="inline-flex h-12 items-center justify-center rounded-[10px] border border-white/20 px-8 text-sm font-normal text-slate-100 transition hover:bg-white/5 hover:border-white/40"
          >
            View webhook guide
          </Link>
        </div>
      </div>
    </section>
  );
}