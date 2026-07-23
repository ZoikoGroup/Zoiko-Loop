import React from "react";
import Link from "next/link";

export default function TestingFlow() {
  const steps = [
    {
      title: "Sandbox provisioning",
      description:
        "Isolated environment with owner, expiration, data restrictions, credentials, and sample events.",
      completed: true,
    },
    {
      title: "Connectivity test",
      description:
        "Request/response, signature, timestamp, TLS, and source identity proof.",
      completed: true,
    },
    {
      title: "Schema validation",
      description:
        "Pass/fail by field, transformations, consent, purpose, duplicates.",
    },
    {
      title: "Behavior test",
      description:
        "Retries, reversals, late events, and idempotency scenarios.",
    },
    {
      title: "Volume test",
      description:
        "Agreed throughput and latency validated under test conditions.",
    },
    {
      title: "Certification review",
      description:
        "Engineering, security, product, and operations sign-off.",
    },
    {
      title: "Production promotion",
      description:
        "Dual approval, schedule, rollback plan, notifications, audit event.",
    },
  ];

  const statuses = [
    {
      label: "Not started",
      className: "border border-white/20 text-gray-400",
    },
    {
      label: "In progress",
      className:
        "border border-amber-500/30 bg-amber-500/10 text-amber-500",
    },
    {
      label: "Action required",
      className:
        "border border-red-400/30 bg-red-400/10 text-red-400",
    },
    {
      label: "Conditionally approved",
      className:
        "border border-amber-500/30 bg-amber-500/10 text-amber-500",
    },
    {
      label: "Approved",
      className:
        "border border-teal-500/30 bg-teal-500/10 text-teal-500",
    },
    {
      label: "Expired",
      className:
        "border border-red-400/30 bg-red-400/10 text-red-400",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            Sandbox to production
          </p>

          <h2 className="mt-4 text-3xl font-normal text-slate-100 sm:text-4xl lg:text-5xl">
            Testing and certification
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 border-l border-white/20 pl-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={index === steps.length - 1 ? "" : "pb-10"}
            >
              <span
                className={`absolute -left-[11px] mt-1 h-5 w-5 rounded-full border-2 ${
                  step.completed
                    ? "border-teal-500 bg-teal-500"
                    : "border-teal-500/30 bg-slate-900"
                }`}
                style={{ top: `${index * 110}px` }}
              />

              <h3 className="text-base font-normal text-slate-100">
                {step.title}
              </h3>

              <p className="mt-2 text-sm font-normal leading-6 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Status Badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {statuses.map((status) => (
            <span
              key={status.label}
              className={`rounded-full px-4 py-2 text-xs font-normal ${status.className}`}
            >
              {status.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/sandbox"
            className="inline-flex h-12 items-center justify-center rounded-[10px] bg-amber-500 px-8 text-base font-normal text-yellow-950 transition hover:bg-amber-400"
          >
            Start sandbox
          </Link>
        </div>
      </div>
    </section>
  );
}