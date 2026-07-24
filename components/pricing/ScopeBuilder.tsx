"use client";

import React, { useState } from "react";

export default function ScopeBuilder() {
  const [commercialPath, setCommercialPath] = useState("Launch Pilot");
  const [operatorType, setOperatorType] = useState("MVNO");

  const commercialOptions = [
    "Launch Pilot",
    "Operator Platform",
    "Enterprise Group",
    "Not sure",
  ];

  const operatorOptions = [
    "MVNO",
    "MNO",
    "Prepaid operator",
    "Telecom group",
    "Other",
  ];

  return (
    <section className="bg-slate-900 px-4 py-20">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Two-minute fit check
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-100 md:text-4xl">
            Commercial scope builder
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400">
            This produces a fit recommendation, not a price or contractual
            commitment.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-14 max-w-[720px] rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-[0px_20px_50px_rgba(0,0,0,0.35)]">

          {/* ========================= */}
          {/* Question 1 */}
          {/* ========================= */}

          <h3 className="text-base font-bold text-slate-100">
            1. Which commercial path are you exploring?
          </h3>

          <div className="mt-6 space-y-4">
            {commercialOptions.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center rounded-[10px] border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
              >
                <input
                  type="radio"
                  name="commercial"
                  value={item}
                  checked={commercialPath === item}
                  onChange={(e) => setCommercialPath(e.target.value)}
                  className="mr-4 accent-teal-500"
                />

                <span className="text-sm text-slate-100">
                  {item}
                </span>
              </label>
            ))}
          </div>

          {/* ========================= */}
          {/* Question 2 */}
          {/* ========================= */}

          <h3 className="mt-12 text-base font-bold text-slate-100">
            2. What type of operator are you?
          </h3>

          <div className="mt-6 space-y-4">
            {operatorOptions.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center rounded-[10px] border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
              >
                <input
                  type="radio"
                  name="operator"
                  value={item}
                  checked={operatorType === item}
                  onChange={(e) => setOperatorType(e.target.value)}
                  className="mr-4 accent-teal-500"
                />

                <span className="text-sm text-slate-100">
                  {item}
                </span>
              </label>
            ))}
          </div>

                    {/* ========================= */}
          {/* Question 3 */}
          {/* ========================= */}

          <h3 className="mt-12 text-base font-bold text-slate-100">
            3. What subscriber scope may be eligible?
          </h3>

          <div className="mt-6 space-y-4">
            {[
              "Pre-launch",
              "Under 500K",
              "500K–5M",
              "5M+",
              "Not yet known",
            ].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center rounded-[10px] border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
              >
                <input
                  type="radio"
                  name="subscriberScope"
                  className="mr-4 accent-teal-500"
                />

                <span className="text-sm text-slate-100">{item}</span>
              </label>
            ))}
          </div>

          {/* ========================= */}
          {/* Question 4 */}
          {/* ========================= */}

          <h3 className="mt-12 text-base font-bold text-slate-100">
            4. What is your target stage?
          </h3>

          <div className="mt-6 space-y-4">
            {[
              "Exploration",
              "Budget planning",
              "Pilot",
              "Procurement",
              "Production",
            ].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center rounded-[10px] border border-white/20 bg-gray-900 px-5 py-4 transition hover:border-teal-500/40"
              >
                <input
                  type="radio"
                  name="targetStage"
                  className="mr-4 accent-teal-500"
                />

                <span className="text-sm text-slate-100">{item}</span>
              </label>
            ))}
          </div>

          {/* CTA Button */}

          <button className="mt-12 w-full rounded-[10px] bg-amber-500 py-4 text-base font-bold text-yellow-950 transition hover:bg-amber-400">
            See recommended path
          </button>
        </div>
      </div>
    </section>
  );
}