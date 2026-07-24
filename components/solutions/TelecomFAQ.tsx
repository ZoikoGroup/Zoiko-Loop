"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How do I know which solution fits my organization?",
    answer:
      "Our specialists help evaluate your operator model, business goals, and deployment requirements to recommend the most suitable solution for your organization.",
  },
  {
    question: "Can one platform serve multiple operator types?",
    answer:
      "Yes. The platform supports MVNOs, MNOs, prepaid operators, family plans, diaspora top-up, and enterprise telecom groups from a single platform.",
  },
  {
    question: "Do these solutions require different integrations?",
    answer:
      "No. The same platform supports all operator types through configurable workflows, rules, and integrations.",
  },
  {
    question: "Is there a faster path for smaller operators?",
    answer:
      "Yes. We provide accelerated deployment options that reduce implementation time while maintaining enterprise-grade capabilities.",
  },
  {
    question: "What if I need multi-market governance?",
    answer:
      "The platform includes centralized governance, regional policies, reporting, and market-specific configurations for global operators.",
  },
];

export default function TelecomFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            FREQUENTLY ASKED
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Questions before you continue
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-white/10 bg-gray-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-bold text-white">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-teal-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-white/10 px-6 py-5">
                  <p className="text-sm leading-7 text-gray-400">
                    {faq.answer}
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