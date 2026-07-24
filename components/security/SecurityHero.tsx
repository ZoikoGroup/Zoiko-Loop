import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 bg-[radial-gradient(circle_at_85%_-10%,rgba(20,184,166,0.12),transparent_60%)] px-6 py-16 lg:px-32 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}
        <div className="w-full lg:max-w-[650px]">

          <div className="inline-flex rounded-[30px] border border-teal-500/30 bg-teal-500/10 px-5 py-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-500">
              Security & Compliance
            </span>
          </div>

          <h1 className="mt-6 max-w-[700px] text-4xl font-bold leading-[1.05] text-slate-100 lg:text-5xl">
  Telecom rewards
  <br />
  infrastructure built
  <br />
  with control, integrity,
  <br />
  and accountability.
</h1>

          <p className="mt-6 text-base leading-7 text-gray-400">
            Zoiko Loop is designed to process operator events through
            consent-aware, pseudonymized, tenant-isolated workflows
            with financial-grade reward accounting, tamper-resistant
            auditability, and clear security ownership.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <button
    type="button"
    className="
      inline-flex
      h-12
      items-center
      justify-center
      rounded-[10px]
      bg-amber-500
      px-8
      text-base
      font-bold
      text-yellow-950
      transition
      hover:bg-amber-400
    "
  >
    Request a security review
  </button>

  <button
    type="button"
    className="
      inline-flex
      h-12
      items-center
      justify-center
      rounded-[10px]
      border
      border-white/20
      px-8
      text-base
      font-bold
      text-slate-100
      transition
      hover:bg-white/5
    "
  >
    Talk to security and compliance
  </button>
</div>

          <p className="mt-6 text-sm text-gray-400">
            Download security overview →
          </p>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Public security information is available without registration.
            Restricted evidence is shared through a verified review process.
          </p>
        </div>


        {/* Right Image Only */}
        <div className="w-full max-w-[658px]">
          <Image
            src="/security/security-hero.png"
            alt="Event journey and trust boundary"
            width={658}
            height={384}
            className="w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}