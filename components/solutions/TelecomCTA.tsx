import React from "react";

export default function TelecomCTA() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-teal-500/30 bg-[#1A202C] px-8 py-16">
          <div className="mx-auto max-w-3xl text-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Find the right solution for your operator context.
            </h2>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-gray-400">
              Book a demo to get a tailored walkthrough, or explore the
              platform to see every module in depth.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="h-12 rounded-lg bg-amber-400 px-8 text-base font-bold text-yellow-950 transition hover:bg-amber-300">
                Book a Demo
              </button>

              <button className="h-12 rounded-lg border border-white/20 px-8 text-base font-bold text-white transition hover:bg-white/10">
                Explore the Platform
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}