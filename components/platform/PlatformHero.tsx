import Image from "next/image";

export default function PlatformHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(20,184,166,0.12),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16 xl:px-8">
        {/* Left Content */}
        <div className="w-full max-w-xl">
          {/* Badge */}
          <div className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">
              TELECOM REWARDS &amp; RETENTION PLATFORM
            </span>
          </div>

         {/* Heading */}
{/* Heading */}
<h1 className="mt-8 max-w-[560px] text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-[52px] lg:leading-[1.15]">
  Turn reliable telecom behavior into governed rewards and measurable retention.
</h1>

          {/* Description */}
          <p className="mt-8 text-base leading-7 text-slate-400">
            Zoiko Loop connects payment, recharge, renewal, and account events
            to configurable reward rules, a double-entry rewards ledger,
            embedded wallet APIs, operator controls, and retention intelligence
            — without replacing your billing system.
          </p>

          {/* Disclaimer */}
          <p className="mt-8 text-sm leading-6 text-slate-500">
            Not a billing system, payment processor, credit bureau, lender, or
            credit-scoring service.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-amber-500 px-8 text-base font-bold text-yellow-950 transition hover:bg-amber-400 sm:w-auto"
            >
              Book a Demo
            </button>

            <button
              type="button"
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] border border-white/20 px-8 text-base font-bold text-slate-100 transition hover:border-teal-400 hover:text-teal-400 sm:w-auto"
            >
              Request Operator Access
            </button>
          </div>

          {/* Explore Button */}
          <button
            type="button"
            className="mt-8 inline-flex text-sm font-bold text-teal-400 underline underline-offset-4 transition hover:text-teal-300"
          >
            Explore Integrations →
          </button>

          {/* Footer Text */}
          <p className="mt-6 text-xs leading-5 text-slate-500">
            Built for MNOs, MVNOs, prepaid operators, and telecom groups.
            Consent-led, fraud-resistant, and auditable by design.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative mt-8 w-full max-w-[670px] lg:mt-0 lg:translate-y-16">
          <Image
            src="/platform/hero.png"
            alt="Platform Overview"
            width={670}
            height={447}
            priority
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}