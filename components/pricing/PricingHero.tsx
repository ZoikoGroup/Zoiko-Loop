import Image from "next/image";
import React from "react";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-14 lg:h-[843px] lg:py-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(20,184,166,0.10),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 pt-8 sm:px-6 lg:px-8 lg:pt-5">
        {/* Badge */}
        <div className="rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">
            Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 max-w-[1200px] text-center text-3xl font-bold leading-tight text-slate-100 sm:text-4xl lg:text-5xl lg:leading-[68px]">
          Commercial paths built around your operator.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-[600px] px-2 text-center text-sm font-normal leading-6 tracking-[-0.01em] text-slate-300 sm:text-base">
          Zoiko Loop pricing scales with subscriber volume, integration pathway,
          deployment region, tenancy, and support needs. Choose a launch pilot,
          production operator platform, or enterprise telecom group path.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col gap-4 px-4 sm:w-auto sm:flex-row">
          <button className="rounded-[10px] border border-transparent bg-amber-500 px-8 py-3 text-base font-bold text-yellow-950 transition hover:bg-amber-400">
            Request operator pricing
          </button>

          <button className="rounded-[10px] border border-white/20 px-8 py-3 text-base font-bold text-slate-100 transition hover:bg-white/10">
            Apply for a launch pilot
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative mt-12 w-full max-w-[1195px] overflow-hidden rounded-[10px] bg-white">
          <div className="relative aspect-[1195/461]">
            <Image
              src="/pricing/hero.png"
              alt="Pricing Hero"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1195px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}