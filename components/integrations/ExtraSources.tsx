import React from "react";
import Link from "next/link";

export default function ExtraSources() {
  const sources = [
    {
      title: "Top-up network API",
      description:
        "Prepaid recharge outcomes through approved network partners, with country coverage, event taxonomy, settlement boundary, consent, and reconciliation.",
    },
    {
      title: "Payment gateway events",
      description:
        "Payment-success, failure, refund, reversal, and mandate outcomes without card data—gateway signature, hashed customer reference, duplicate handling.",
    },
    {
      title: "Open-banking feed",
      description:
        "Approved payment confirmation with explicit provider authorization and consent before any reward eligibility is evaluated.",
    },
  ];

  return (
    <section className="bg-slate-900 px-4 py-16 transition-colors duration-300 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
            Additional sources
          </p>

          <h2 className="mt-4 text-3xl font-normal leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Top-up networks, payment gateways,
            <br className="hidden sm:block" />
            and open banking
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sources.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6 transition hover:border-teal-500/30"
            >
              <h3 className="text-lg font-normal text-slate-100">
                {item.title}
              </h3>

              <p className="mt-4 text-sm font-normal leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/contact-sales"
            className="inline-flex h-11 items-center justify-center rounded-[10px] border border-white/20 px-8 text-base font-normal text-slate-100 transition hover:border-white/40 hover:bg-white/5"
          >
            Talk to a specialist
          </Link>
        </div>
      </div>
    </section>
  );
}