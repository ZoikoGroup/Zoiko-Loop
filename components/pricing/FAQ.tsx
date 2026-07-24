"use client";

import { useState } from "react";

const faqs = [
  "How much does Zoiko Loop cost?",
  "Why is there no public rate card?",
  "What is included in a launch pilot?",
  "What affects production pricing?",
  "Are reward costs included?",
  "Does Zoiko Loop charge subscribers?",
  "Can we add markets or integrations later?",
  "Is a pricing request binding?",
  "Can procurement review security before a proposal?",
  "Does Zoiko Loop process payments or make credit decisions?",
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-slate-900 px-4 py-20">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Frequently asked
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-100 lg:text-4xl">
            Pricing questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-14 max-w-[820px] space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-white/10 bg-gray-800"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <span className="text-base font-bold text-slate-100">
                  {question}
                </span>

                <span className="text-2xl font-bold text-teal-500">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="border-t border-white/10 px-5 pb-5 pt-4">
                  <p className="text-sm leading-6 text-gray-400">
                    This answer is a placeholder. Replace it with your
                    final FAQ content from Figma or your copy document.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}