"use client";

import React from "react";

const features = [
  "Operator-specific walkthrough",
  "Integration pathway review",
  "Clear pilot or production next steps",
];

export default function OperatorDemo() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-16 lg:py-24 font-sans">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(20,184,166,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
                Operator Demo
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
              See how payment
              <br />
              behavior becomes
              <br />
              measurable
              <br />
              retention.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400">
              In a tailored 30-minute session, map your billing or recharge
              events to reward rules, double-entry ledger controls, embedded
              wallet APIs, and operator reporting—without replacing your billing
              stack.
            </p>

            {/* Audience */}
            <p className="mt-8 text-sm leading-7 text-slate-500">
              Built for MNOs, MVNOs, prepaid operators, MVNEs/MVNAs,
              challenger brands, and telecom groups.
            </p>

           {/* Features */}
<div className="mt-10 space-y-5">
  {features.map((item) => (
    <div key={item} className="flex items-center gap-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-teal-500/30 bg-teal-500/10 text-sm font-semibold text-teal-400">
        ✓
      </div>

      <span className="text-sm text-slate-100">
        {item}
      </span>
    </div>
  ))}
</div>

            {/* Operator Flow Card */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Illustrative operator view
              </p>

              {/* Top Flow */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-5 py-3 text-xs font-semibold text-slate-100">
                  Event received
                </div>

                <span className="text-slate-500">→</span>

                <div className="rounded-lg border border-white/10 bg-gray-800 px-5 py-3 text-xs text-slate-300">
                  Rule evaluated
                </div>

                <span className="text-slate-500">→</span>

                <div className="rounded-lg border border-white/10 bg-gray-800 px-5 py-3 text-xs text-slate-300">
                  Ledger posted
                </div>
              </div>

              {/* Bottom Flow */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-gray-800 px-5 py-3 text-xs text-slate-300">
                  Wallet updated
                </div>

                <span className="text-slate-500">→</span>

                <div className="rounded-lg border border-white/10 bg-gray-800 px-5 py-3 text-xs text-slate-300">
                  Retention measured
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

                      {/* Progress */}
            <div className="flex items-center justify-between gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-1/2 rounded-full bg-teal-500" />
              </div>

              <span className="whitespace-nowrap text-xs text-slate-500">
                Step 1 of 2
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-2xl font-bold text-slate-100">
              Book your operator demo
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Start with your work details. We’ll ask a few
              operator-specific questions next.
            </p>

            {/* Form */}
            <form className="mt-8 space-y-6">

              {/* Name */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-100">
                    First name
                    <span className="text-amber-400"> *</span>
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-white/20 bg-gray-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-100">
                    Last name
                    <span className="text-amber-400"> *</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-white/20 bg-gray-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-100">
                  Work email
                  <span className="text-amber-400"> *</span>
                </label>

                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-white/20 bg-gray-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none"
                />

                <p className="mt-2 text-xs text-slate-500">
                  A work email helps us route your request, but you may continue.
                </p>
              </div>

              {/* Job Title */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-100">
                  Job title
                  <span className="text-amber-400"> *</span>
                </label>

                <input
                  type="text"
                  placeholder="Product Manager"
                  className="w-full rounded-lg border border-white/20 bg-gray-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none"
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-100">
                  Company / Operator
                  <span className="text-amber-400"> *</span>
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-lg border border-white/20 bg-gray-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-teal-500 focus:outline-none"
                />
              </div>

              {/* Country */}
             <div>
  <label className="mb-2 block text-sm font-semibold text-slate-100">
    Country / Region
    <span className="text-amber-400"> *</span>
  </label>

  <select className="w-full rounded-lg border border-white/20 bg-gray-900 px-4 py-3 text-slate-100 focus:border-teal-500 focus:outline-none">
    <option>Choose a country or region</option>
    <option>India</option>
    <option>United States</option>
    <option>United Kingdom</option>
    <option>Australia</option>
    <option>Singapore</option>
    <option>Canada</option>
  </select>
</div>
              {/* Checkbox */}
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-gray-900 accent-teal-500"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Send me occasional Zoiko Loop product and operator program
                  updates.
                </span>
              </label>

                            {/* Continue Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-400 px-6 py-3.5 text-base font-bold text-yellow-950 transition hover:bg-amber-300"
              >
                Continue to operator details
              </button>

              {/* Technical Discussion */}
              <div className="text-center text-sm">
                <span className="text-slate-400">
                  Need a technical discussion?{" "}
                </span>

                <a
                  href="#"
                  className="font-semibold text-teal-400 underline underline-offset-4 transition hover:text-teal-300"
                >
                  Talk to an integration specialist.
                </a>
              </div>

              {/* Footer Note */}
              <p className="text-center text-xs leading-6 text-slate-500">
                No public rate card. No obligation. Your session is tailored to
                your operator context.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
