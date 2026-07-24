import React from "react";

export default function Cta() {
  return (
    <section className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-teal-500/30 bg-gray-900 px-6 py-14 sm:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          See the full platform in action.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-gray-400">
          Book a tailored demo or request operator access to explore the
          platform hands-on.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-[10px] bg-amber-500 px-8 text-base font-bold text-yellow-950 transition hover:bg-amber-400"
          >
            Book a Demo
          </button>

          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-[10px] border border-white/20 px-8 text-base font-bold text-slate-100 transition hover:border-teal-500 hover:text-teal-400"
          >
            Request Operator Access
          </button>
        </div>
      </div>
    </section>
  );
}