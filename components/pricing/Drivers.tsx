import React from "react";

const drivers = [
  {
    title: "Subscriber scope",
    description:
      "Approximate eligible subscriber base and expected rollout phases affect capacity and support planning.",
  },
  {
    title: "Event volume",
    description:
      "Payment, recharge, renewal, consent, reversal, and redemption event volumes influence processing scope.",
  },
  {
    title: "Integration pathway",
    description:
      "ZoikoNex, webhook, SFTP, top-up network, gateway, or open-banking feeds have different implementation needs.",
  },
  {
    title: "Deployment region",
    description:
      "Data residency, legal review, hosting topology, and operating support differ by geography.",
  },
  {
    title: "Tenancy model",
    description:
      "Shared logical tenancy, dedicated tenancy, or group architecture changes deployment and governance.",
  },
  {
    title: "Environments",
    description:
      "Sandbox, test, certification, pre-production, and production environments affect implementation scope.",
  },
  {
    title: "Support model",
    description:
      "Standard implementation, priority support, dedicated technical account management, and extended coverage are scoped separately.",
  },
  {
    title: "Custom work",
    description:
      "Non-standard connectors, policy controls, reporting, or regional requirements require discovery and approval.",
  },
];

export default function Drivers() {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            What shapes your scope
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[52px] text-slate-100">
            Pricing drivers
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-base leading-6 text-gray-400">
            These drivers may produce a scope summary and recommended pathway —
            never a binding price, discount, ROI, or timeline.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {drivers.map((driver) => (
            <div
              key={driver.title}
              className="rounded-xl border border-white/10 bg-gray-800 p-6"
            >
              <h3 className="text-sm font-bold text-slate-100">
                {driver.title}
              </h3>

              <p className="mt-5 text-xs leading-5 text-gray-400">
                {driver.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}