import React from "react";
import Link from "next/link";

export default function IntegrationCta() {
  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-teal-500/30 bg-gray-900 px-6 py-12 sm:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-normal leading-tight text-slate-100 sm:text-4xl">
          Choose the right path from your telecom stack to Zoiko Loop.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-6xl text-center text-base font-normal leading-7 text-gray-400">
          Bring your billing, recharge, bundle, payment, and consent events
          into a governed rewards and retention platform through the integration
          model that fits your environment.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-center text-base font-normal leading-7 text-gray-400">
          Native where it should be. Open where it must be. Controlled at every
          boundary.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact-sales"
            className="inline-flex h-12 items-center justify-center rounded-[10px] bg-amber-500 px-8 text-base font-normal text-yellow-950 transition hover:bg-amber-400"
          >
            Talk to an integration specialist
          </Link>

          <Link
            href="/sandbox"
            className="inline-flex h-12 items-center justify-center rounded-[10px] border border-white/20 px-8 text-base font-normal text-slate-100 transition hover:bg-white/5"
          >
            Request sandbox access
          </Link>

          <Link
            href="/developer-docs"
            className="inline-flex h-12 items-center justify-center rounded-[10px] border border-white/20 px-8 text-base font-normal text-slate-100 transition hover:bg-white/5"
          >
            View developer docs
          </Link>
        </div>
      </div>
    </section>
  );
}