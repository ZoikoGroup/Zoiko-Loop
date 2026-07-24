import React from "react";

export default function IncidentResponse() {
  const cards = [
    {
      title: "Incident readiness",
      description:
        "Documented roles, escalation, investigation, containment, recovery, and review support security response.",
    },
    {
      title: "Customer notification",
      description:
        "Notification obligations and timelines follow contract, law, incident scope, and verified contact channels.",
    },
    {
      title: "Availability",
      description:
        "Architecture and operations are designed for resilient telecom workflows with monitored dependencies and recovery controls.",
    },
    {
      title: "Security reporting",
      description:
        "Good-faith security reports are routed to a dedicated, monitored channel.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-16 lg:px-32">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          When something goes wrong
        </p>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          Incident response, availability, and communication
        </h2>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-gray-800 p-6"
          >
            <h3 className="text-sm font-bold leading-6 text-slate-100">
              {card.title}
            </h3>

            <p className="mt-4 text-xs leading-5 text-gray-400">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Security Guardrails */}
      <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-red-400 bg-gray-800 p-6">
        <h3 className="text-xs font-bold text-red-400">
          Security contact guardrails
        </h3>

        <p className="mt-4 text-xs leading-5 text-gray-400">
          Never request exploit details, customer data, credentials, or
          production evidence through an ordinary contact form. We provide a
          secure follow-up channel after reporter verification and acknowledge
          receipt without confirming validity before triage.
        </p>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button
          className="
            rounded-[10px]
            border border-white/20
            px-8
            py-3
            text-base
            font-bold
            text-slate-100
            transition
            hover:bg-white/5
          "
        >
          Report a security concern
        </button>
      </div>
    </section>
  );
}