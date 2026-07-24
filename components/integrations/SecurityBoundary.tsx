import React from "react";
import Link from "next/link";

export default function SecurityBoundary() {
  const cards = [
    {
      title: "Payment & identity boundary",
      description:
        "Zoiko Loop accepts payment outcomes and telecom events—not cardholder data—with pseudonymized subscriber references.",
    },
    {
      title: "Credential handling",
      description:
        "Secrets are never re-displayed after creation; rotation uses an overlap window with audit logging.",
    },
    {
      title: "Tenancy & regions",
      description:
        "Dedicated tenancy, regional controls, and multi-operator governance available for enterprise deployments.",
    },
    {
      title: "Roadmap claims",
      description:
        "SOC 2 Type II and ISO 27001 remain roadmap items until achieved and independently verified.",
      badge: "Roadmap",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            Trust boundary
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Security, data boundary, and deployment
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[220px] flex-col rounded-xl border border-white/10 bg-gray-800 p-6 transition hover:border-teal-500/30"
            >
              <h3 className="text-base font-normal text-slate-100">
                {card.title}
              </h3>

              <p className="mt-4 flex-1 text-sm font-normal leading-7 text-gray-400">
                {card.description}
              </p>

              {card.badge && (
                <span className="mt-5 inline-flex w-fit items-center rounded-full border border-white/20 px-3 py-1 text-[10px] font-normal uppercase tracking-wider text-slate-400">
                  {card.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/security-review"
            className="inline-flex h-11 items-center justify-center rounded-[10px] border border-white/20 px-8 text-base font-normal text-slate-100 transition hover:border-white/40 hover:bg-white/5"
          >
            Start security review
          </Link>
        </div>
      </div>
    </section>
  );
}