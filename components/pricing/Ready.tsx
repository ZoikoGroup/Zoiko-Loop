import React from "react";

export default function Ready() {
  return (
    <section className="bg-slate-900 px-4 py-20">
      <div className="mx-auto max-w-[1384px] rounded-3xl border border-teal-500/30 bg-gray-900 px-6 py-14">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-100 lg:text-4xl">
            Ready to scope your commercial path?
          </h2>

          <p className="mt-5 text-base leading-6 text-gray-400">
            Request operator pricing, apply for a pilot, or contact enterprise
            sales.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <button className="w-full rounded-[10px] bg-amber-500 px-8 py-3 text-base font-bold text-yellow-950 transition hover:bg-amber-400 lg:w-auto">
            Request operator pricing
          </button>

          <button className="w-full rounded-[10px] border border-white/20 px-8 py-3 text-sm font-bold text-slate-100 transition hover:bg-white/10 lg:w-auto">
            Apply for pilot
          </button>

          <button className="w-full rounded-[10px] border border-white/20 px-8 py-3 text-base font-bold text-slate-100 transition hover:bg-white/10 lg:w-auto">
            Contact enterprise sales
          </button>
        </div>
      </div>
    </section>
  );
}