"use client";

import { useState } from "react";

export default function IntegrationFaq() {
  const faqs = [
    {
      question: "What systems can Zoiko Loop integrate with?",
      answer:
        "Zoiko Loop integrates with modern BSS platforms, billing systems, payment gateways, CRM solutions, telecom platforms, SFTP-based systems, and custom APIs.",
    },
    {
      question: "Do we need to replace our billing platform?",
      answer:
        "No. Zoiko Loop is designed to integrate with your existing billing platform without requiring a replacement.",
    },
    {
      question: "Which integration path is best for a modern BSS?",
      answer:
        "Webhook APIs are recommended for modern BSS platforms because they provide real-time, secure, and standards-based event delivery.",
    },
    {
      question: "Can a legacy platform integrate through files?",
      answer:
        "Yes. Legacy platforms can integrate using secure SFTP file transfers with scheduling, validation, reconciliation, and acknowledgements.",
    },
    {
      question: "How are duplicate events prevented?",
      answer:
        "Duplicate events are prevented using idempotency keys, event validation, and replay protection mechanisms.",
    },
    {
      question: "What data does Zoiko Loop need?",
      answer:
        "Only the information required for processing events is collected. Sensitive payment data is never stored or processed.",
    },
    {
      question: "Is sandbox access available?",
      answer:
        "Yes. A sandbox environment is available for testing integrations before moving to production.",
    },
    {
      question: "How does an integration move to production?",
      answer:
        "After testing, validation, certification, and approval, the integration is promoted to production through a governed deployment process.",
    },
    {
      question: "How are failures handled?",
      answer:
        "Failures are managed with retries, dead-letter queues, monitoring, replay capabilities, and detailed audit logs.",
    },
    {
      question:
        "Can Zoiko Loop support multiple countries or operating companies?",
      answer:
        "Yes. Zoiko Loop supports multi-country deployments, regional controls, dedicated tenancy, and multi-operator governance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-normal uppercase tracking-[0.25em] text-slate-500">
            Frequently Asked
          </p>

          <h2 className="mt-4 text-3xl font-normal text-slate-100 sm:text-4xl">
            Integration Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-white/10 bg-gray-800"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-normal text-slate-100">
                    {faq.question}
                  </span>

                  <span className="text-2xl font-normal text-teal-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 py-5">
                    <p className="text-sm font-normal leading-7 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}