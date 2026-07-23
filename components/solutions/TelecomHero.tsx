import Image from "next/image";
import React from "react";

export default function TelecomHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(20,184,166,0.12),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-16 lg:flex-row lg:justify-between lg:px-8">
        {/* Left Content */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
              Solutions for Telecom Operators
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Reward the behaviors
            <br />
            that keep subscribers
            <br />
            active.
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-8 text-gray-400">
            Use payment, recharge, renewal, and account events to build
            governed reward programs for MVNOs, MNOs, prepaid operators,
            family plans, diaspora top-up, and enterprise telecom groups.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-amber-400 px-7 py-3 font-semibold text-yellow-950 transition hover:bg-amber-300">
              Book a Demo
            </button>

            <button className="rounded-lg border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/5">
              Explore the Platform
            </button>
          </div>

          {/* Link */}
          <a
            href="#"
            className="mt-8 inline-block text-sm font-semibold text-teal-400 underline underline-offset-4"
          >
            Talk to an Integration Specialist →
          </a>

          {/* Footer Text */}
          <p className="mt-5 text-sm leading-6 text-gray-500">
            Operator-controlled rules. Embedded wallet value. Financial-grade
            ledger. Consent-led processing.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <Image
              src="/solutions/hero.png"
              alt="Telecom Dashboard"
              width={658}
              height={439}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
