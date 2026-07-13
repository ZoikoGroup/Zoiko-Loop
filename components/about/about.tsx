import React from 'react';

export default function About() {
  return (
    <div className="w-full bg-slate-950 text-slate-400 font-['Inter'] antialiased selection:bg-teal-500 selection:text-slate-950">
      
      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center flex flex-col items-center">
        <div className="font-['Space_Mono'] text-xs font-normal tracking-wider text-white/20 mb-6">—</div>
        <h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-bold tracking-[7px] text-stone-200 mb-8 uppercase">
          RELIABLE
        </h1>
        <p className="font-['Space_Grotesk'] text-3xl md:text-4xl font-normal leading-snug text-slate-400 max-w-4xl mx-auto mb-6">
          The infrastructure that recognises reliable telecom behaviour and converts it into{' '}
          <span className="text-stone-200 font-bold">earned customer value.</span>
        </p>
        <p className="text-base leading-8 max-w-5xl mx-auto mb-12 text-slate-400/80">
          Zoiko Loop is a global telecom rewards and retention platform built by Zoiko Tech Inc. It helps mobile operators turn everyday payment, recharge, and renewal behaviour into rewards, loyalty, and measurable retention — without touching their billing infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="w-64 h-14 bg-amber-500 rounded-lg text-slate-950 font-['Space_Grotesk'] text-base font-bold hover:bg-amber-400 transition-colors">
            Book a Demo
          </button>
          <button className="w-64 h-14 border border-white/40 rounded-lg text-slate-300 font-['Space_Grotesk'] text-base font-medium hover:bg-white/5 transition-colors">
            Request Operator Access →
          </button>
        </div>

        {/* Badge Tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
          <span className="px-4 py-2 bg-white/5 rounded-sm border border-white/5 text-xs font-normal font-mono text-slate-300">
            ✓ MNOs · MVNOs · Prepaid operators
          </span>
          <span className="px-4 py-2 bg-white/5 rounded-sm border border-white/5 text-xs font-normal font-mono text-slate-300">
            ✓ Separate from billing
          </span>
          <span className="px-4 py-2 bg-white/5 rounded-sm border border-white/5 text-xs font-normal font-mono text-slate-300">
            ✓ Double-entry ledger
          </span>
          <span className="px-4 py-2 bg-white/5 rounded-sm border border-white/5 text-xs font-normal font-mono text-slate-300">
            ✓ Consent-led by design
          </span>
          <span className="px-4 py-2 bg-white/5 rounded-sm border border-white/5 text-xs font-normal font-mono text-slate-300">
            ✓ Native ZoikoNex integration
          </span>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-white/0 via-white/5 to-white/0" />

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-8">
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500">
            Who we are
          </div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-stone-200">
            The rewards layer for reliable connectivity.
          </h2>
          <p className="text-base leading-8 text-slate-400">
            Zoiko Loop is a product of Zoiko Tech Inc, built for telecom operators that want to move beyond generic loyalty programmes and recognise the customer behaviours that directly protect revenue — on-time payment, consistent recharge, bundle renewal, and sustained account activity.
          </p>
          <p className="text-base leading-8 text-slate-400">
            The platform connects telecom payment and recharge events to a configurable reward rules engine, a double-entry rewards ledger, embedded wallet APIs, and an operator intelligence console. It does this without requiring operators to replace, modify, or re-architect their existing billing systems.
          </p>
          <div className="border-l-[3px] border-teal-500 pl-6 py-1">
            <p className="font-['Space_Grotesk'] text-base font-bold text-teal-500 leading-7">
              Zoiko Loop does not replace telecom billing. It activates the behaviour billing systems already record.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 lg:ml-auto w-full max-w-lg">
          {/* Metadata Card */}
          <div className="bg-gray-900 rounded-xl p-8 border border-white/5 font-['Inter'] space-y-6">
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-slate-400">
              Ownership & operation
            </div>
            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-slate-400 tracking-wide uppercase">PLATFORM</span>
                <span className="text-stone-200 font-sans">Zoiko Loop</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-slate-400 tracking-wide uppercase">OWNER</span>
                <span className="text-stone-200 font-sans">Zoiko Tech Inc</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <span className="text-slate-400 tracking-wide uppercase pt-1">CATEGORY</span>
                <span className="text-stone-200 text-right max-w-xs font-sans">Telecom Rewards & Retention Infrastructure</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <span className="text-slate-400 tracking-wide uppercase pt-1">BILLING RELATION</span>
                <span className="text-stone-200 text-right max-w-xs font-sans">Separate from ZoikoNex; native integration available</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <span className="text-slate-400 tracking-wide uppercase pt-1">PRIMARY MARKETS</span>
                <span className="text-stone-200 text-right max-w-xs font-sans">UK · Caribbean · West Africa · Phase 2: North America</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-slate-400 tracking-wide uppercase">COMMERCIAL STATUS</span>
                <span className="text-stone-200 font-sans">Operator pilot programme open</span>
              </div>
            </div>
          </div>
          {/* Info Banner */}
          <div className="bg-teal-500/10 rounded-lg p-5 border border-teal-500/20">
            <p className="font-['Space_Mono'] text-xs text-teal-500 leading-relaxed tracking-tight">
              Zoiko Loop is a telecom rewards and retention platform. It is not a billing system, payment processor, credit bureau, lender, or credit scoring service.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="w-full bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500 mb-4">
            Why we exist
          </div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-stone-200 mb-8">
            Reliable customers are invisible inside <br className="hidden md:block" /> traditional loyalty systems.
          </h2>
          <p className="text-base leading-8 text-slate-400 max-w-5xl mx-auto text-justify md:text-center mb-16">
            Telecom operators invest heavily in acquisition, promotional discounts, and win-back campaigns. Yet the customers who quietly pay on time every month, recharge before their bundle expires, and keep their accounts consistently active receive no recognition for that behaviour — until they threaten to leave. That is the gap Zoiko Loop was built to close. Not with generic points programmes or partner vouchers, but with an infrastructure layer that converts the payment and recharge events operators already record into timely, configurable, financially-governed rewards. For postpaid customers, reliability means paying on time, maintaining autopay, and honouring payment promises. For prepaid customers, it means topping up before expiry and avoiding SIM dormancy. For families, small businesses, and diaspora communities, it means staying connected through sustained, trusted telecom behaviour. Zoiko Loop is designed to recognise all of it.
          </p>

          {/* Grid Challenges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {[
              { title: 'Payment behaviour', desc: 'Billing systems know when customers pay, fail, or reverse. Most operators do not convert that signal into retention action.' },
              { title: 'Recharge fragility', desc: 'Prepaid customers often churn silently through missed top-ups and expired bundles before any intervention is triggered.' },
              { title: 'Generic loyalty', desc: 'Most loyalty programmes reward spending or engagement. Few reward the specific behaviours that improve telecom economics.' },
              { title: 'Reward liability', desc: 'Points create obligations. Without ledger discipline, caps, and reconciliation, rewards become an accounting and operational risk.' },
              { title: 'Consent and trust', desc: 'Telecom behaviour data is sensitive. Platforms that treat consent as a checkbox — not infrastructure — create compliance exposure.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 border border-white/5 rounded-lg p-6 space-y-4">
                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-teal-500">{item.title}</h3>
                <p className="text-xs leading-5 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500 mb-4">
              What makes us different
            </div>
            <h3 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200">
              Not a loyalty add-on. Telecom rewards infrastructure.
            </h3>
            <p className="text-base text-slate-400 mt-4 max-w-xl mx-auto">
              Six architectural decisions that separate Zoiko Loop from every generic loyalty platform in the telecom category.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL DECISIONS */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { meta: 'Architecture', title: 'Event-native core', desc: 'Payment, recharge, and renewal actions are ingested as immutable events — not polled from databases. This enables real-time rewards, full replay capability, audit trails, and future AI training on real behavioural data.' },
          { meta: 'Platform', title: 'Operator-configurable rules', desc: 'Reward logic is expressed in CEL (Common Expression Language), stored as versioned configuration, and requires budget simulation and approval before activation. No code deployment required for rule changes.' },
          { meta: 'Finance', title: 'Double-entry ledger discipline', desc: 'Every reward is a financial-grade double-entry ledger transaction. Operator liability, breakage, reversals, and reconciliation are tracked with the discipline of an accounting system — not a points database.' },
          { meta: 'Compliance', title: 'Consent as infrastructure', desc: 'Subscriber consent is not a checkbox. It is a first-class schema entity validated at the event ingestion boundary, propagated through every processing layer, and independently auditable with revocation support.' },
          { meta: 'Integration', title: 'Embedded by design', desc: 'Wallet APIs and white-label components embed inside operator apps — no separate consumer application required at MVP. Operators retain the customer relationship. Zoiko Loop provides the intelligence layer.' },
          { meta: 'Domain', title: 'Built for telecom reality', desc: 'The platform is designed around actual telecom constraints: heterogeneous BSS stacks, postpaid billing cycles, prepaid recharge rhythms, MVNO architectures, SIM dormancy, family plans, and diaspora top-up corridors.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-900 border border-white/5 rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-['Space_Mono'] text-[10px] uppercase tracking-wider text-slate-400 block">{item.meta}</span>
              <h4 className="font-['Space_Grotesk'] text-base font-bold text-stone-200">{item.title}</h4>
              <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="w-full h-px bg-gradient-to-r from-white/0 via-white/5 to-white/0" />

      {/* ZOIKONEX RELATIONSHIP */}
      <section className="w-full bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500">
              Relationship with ZoikoNex
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200">
              Two platforms. One architectural principle.
            </h2>
            <p className="text-base leading-8 text-slate-400">
              Zoiko Loop and ZoikoNex are architecturally separate and commercially independent. ZoikoNex is telecom billing, charging, rating, invoicing, and OSS/BSS infrastructure. Zoiko Loop is telecom rewards, retention, wallet, and operator engagement infrastructure.
            </p>
            <p className="text-base leading-8 text-slate-400">
              Where operators use both, ZoikoNex publishes billing and payment events that Zoiko Loop consumes through a native event stream — the lowest-friction, highest-fidelity integration path available. Where operators use other billing systems, Zoiko Loop connects through webhook APIs, SFTP batch files, top-up network feeds, and payment gateway events.
            </p>
          </div>

          {/* Interactive Stack Map Visual */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-gray-900 rounded-lg p-6 border border-white/5 space-y-4">
              <span className="font-['Space_Mono'] text-[10px] tracking-wide text-slate-400 block">ZOIKONEX — BILLING INFRASTRUCTURE</span>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
                {['Billing', 'Charging', 'Rating', 'Invoicing', 'OSS/BSS', 'Tax'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-900 rounded-sm border border-white/5">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-2">
              <div className="h-px flex-1 bg-gradient-to-r from-teal-500/0 to-teal-500" />
              <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-[10px] font-mono text-teal-500 tracking-wide">
                NATIVE EVENT STREAM
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-teal-500 to-teal-500/0" />
            </div>

            <div className="bg-teal-500/5 rounded-lg p-6 border border-teal-500/20 space-y-4">
              <span className="font-['Space_Mono'] text-[10px] tracking-wide text-teal-500 block">ZOIKO LOOP — REWARDS INFRASTRUCTURE</span>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-teal-500">
                {['Rewards', 'Retention', 'Wallet', 'Ledger', 'Analytics', 'Loyalty'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-teal-500/10 rounded-sm border border-teal-500/20">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 border border-white/5 flex gap-4 items-start text-xs leading-5">
              <span className="font-['Space_Mono'] text-[10px] text-slate-300 whitespace-nowrap pt-0.5">OTHER OPERATORS →</span>
              <p className="text-slate-400">Connect via webhook API, SFTP batch, top-up network feed, or payment gateway event. No ZoikoNex required.</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="bg-teal-500/10 rounded-lg p-4 text-center border border-teal-500/20">
            <p className="font-['Space_Grotesk'] text-base font-bold text-teal-500">
              ZoikoNex bills the customer. Zoiko Loop rewards the behaviour.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-16">
        <div>
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500 mb-4">
            Who we serve
          </div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200">
            Built for operators that reward reliability at scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📡', title: 'MNOs', desc: 'Mobile network operators seeking a behaviour-linked rewards layer across postpaid, prepaid, family, business, and digital channels — at full network scale.' },
            { icon: '⚡', title: 'MVNOs', desc: 'Virtual operators needing differentiation, retention, and customer engagement without building a full loyalty platform or modifying their MVNE stack.' },
            { icon: '🔗', title: 'MVNEs & MVNAs', desc: 'Wholesale and enablement platforms providing rewards infrastructure to multiple downstream brands under a single integration and governance framework.' },
            { icon: '📲', title: 'Prepaid Operators', desc: 'Operators where recharge rhythm, bundle renewal, and SIM dormancy are central to revenue stability — and where top-up consistency is commercially critical.' },
            { icon: '🚀', title: 'Challenger Brands', desc: 'Telecom brands competing on customer experience, community, and loyalty rather than network ownership — for whom rewards are a primary competitive lever.' },
            { icon: '🌐', title: 'Telecom Groups', desc: 'Multi-market operators needing consistent reward logic, regional configuration, data residency control, and governance across brands and countries.' }
          ].map((item, idx) => (
            <div key={idx} className="border border-white/5 rounded-xl p-6 space-y-6">
              <div className="w-10 h-10 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-stone-200">{item.title}</h3>
              <p className="text-xs leading-5 text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
          <div>
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500 mb-4">
              How the platform works
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200 mb-4">
              From telecom event to earned reward.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Select each step to explore what Zoiko Loop does — and what signals it processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
            {/* Interactive/static list block */}
            <div className="lg:col-span-6 space-y-2">
              {[
                { num: '01', title: 'Operator event occurs', active: true, sub: 'A subscriber pays a postpaid bill, completes a top-up, renews a bundle, activates autopay, or reactivates a dormant line. The billing or recharge system records it.' },
                { num: '02', title: 'Zoiko Loop validates', active: false },
                { num: '03', title: 'Rules engine evaluates eligibility', active: false },
                { num: '04', title: 'Ledger posts the reward', active: false },
                { num: '05', title: 'Subscriber sees value', active: false },
                { num: '06', title: 'Operator measures impact', active: false },
              ].map((step, idx) => (
                <div key={idx} className={`p-5 rounded-lg border transition-all ${step.active ? 'bg-teal-500/10 border-teal-500/20' : 'border-transparent'}`}>
                  <div className="flex gap-4 items-center">
                    <span className={`font-mono text-xs ${step.active ? 'text-teal-500' : 'text-slate-400'}`}>{step.num}</span>
                    <h3 className={`font-['Space_Grotesk'] text-base font-bold ${step.active ? 'text-stone-200' : 'text-slate-300'}`}>{step.title}</h3>
                  </div>
                  {step.sub && <p className="mt-3 text-xs leading-5 text-slate-400 ml-8">{step.sub}</p>}
                </div>
              ))}
            </div>

            {/* Simulated UI Window Display */}
            <div className="lg:col-span-6 bg-slate-900 border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-gray-900/50">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-stone-200">Step 01 — Operator event occurs</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <span className="font-['Space_Mono'] text-[10px] font-bold uppercase tracking-wide text-slate-400 block mb-2">PLATFORM SIGNALS</span>
                {[
                  'PAYMENT_ON_TIME',
                  'RECHARGE_COMPLETED',
                  'BUNDLE_RENEWED',
                  'AUTOPAY_ACTIVATED',
                  'ACCOUNT_REACTIVATED'
                ].map((signal, sIdx) => (
                  <div key={sIdx} className="bg-gray-900 border border-white/5 rounded p-3 flex items-center gap-3">
                    <div className="w-1 h-1 bg-teal-500 rounded-full" />
                    <span className="font-mono text-xs text-teal-500">{signal}</span>
                  </div>
                ))}
              </div>

              <div className="bg-teal-500/10 border-t border-white/5 px-6 py-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(0,201,167,1)]" />
                <span className="font-['Space_Mono'] text-xs text-teal-500">EVENT PROCESSING ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-16">
        <div className="text-center space-y-4">
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500">Our principles</div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200">The seven principles that govern Zoiko Loop.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {[
            { title: 'Reward the right behaviour', desc: 'Loyalty should encourage actions that improve customer value and operator health — paying on time, topping up consistently, staying active.' },
            { title: 'Keep the operator in control', desc: 'Operators own the customer relationship. Zoiko Loop provides infrastructure, configuration, and intelligence — never the relationship itself.' },
            { title: 'Protect customer trust', desc: 'Consent, pseudonymisation, data minimisation, and privacy-by-design are built into the data model — not added as compliance afterthoughts.' },
            { title: 'Separate billing from rewards', desc: 'Billing systems must bill. Rewards systems must reward. The boundary is maintained in API contracts, data models, and legal agreements — not just diagrams.' }
          ].map((p, idx) => (
            <div key={idx} className="bg-gray-900 border border-white/5 rounded-xl p-6 space-y-4 min-h-[220px]">
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-stone-200">{p.title}</h3>
              <p className="text-sm leading-6 text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { title: 'Build with financial discipline', desc: 'Rewards create obligations. They must be governed through double-entry ledger entries, budget caps, reconciliation, breakage modelling, and auditability.' },
            { title: 'Design for global telecom reality', desc: 'Telecom markets differ materially. The platform must work for postpaid MNOs, prepaid MVNOs, diaspora top-up, family plans, and multi-market operator groups.' },
            { title: 'Never confuse reliability with creditworthiness', desc: 'The Telecom Payment Reliability Index is an internal rewards-eligibility signal. It is not a credit score, a lending tool, or a regulated financial instrument — in any market, at any stage.' }
          ].map((p, idx) => (
            <div key={idx} className="bg-gray-900 border border-white/5 rounded-xl p-6 space-y-4 min-h-[180px]">
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-stone-200">{p.title}</h3>
              <p className="text-sm leading-6 text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST, PRIVACY & COMPLIANCE */}
      <section className="w-full bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16 text-center">
          <div>
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500 mb-4">
              Trust, privacy & compliance
            </div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200 mb-4">
              Built for regulated telecom environments from the first line of code.
            </h2>
            <p className="text-slate-400 text-base max-w-4xl mx-auto leading-8">
              Zoiko Loop is designed for operators that process sensitive subscriber data in jurisdictions with serious data protection requirements. Every architectural decision reflects that starting point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: '🔐', title: 'Consent as infrastructure', desc: 'Every subscriber event carries a consent_token_id validated at the ingestion boundary. Consent is a first-class schema entity with lifecycle, revocation, jurisdiction, and audit trail.' },
              { icon: '🔑', title: 'Pseudonymised by default', desc: 'Subscriber, account, and line references are HMAC-keyed with tenant-specific keys before any storage. Zoiko Loop holds no customer master data. The operator is the identity system of record.' },
              { icon: '🏛', title: 'Tenant isolation', desc: "Operator data is isolated by tenant ID, row-level security, scoped encryption keys, and API-level tenant enforcement. No event from one operator can be processed in another operator's context." },
              { icon: '📋', title: 'Audit-ready operations', desc: 'Rule changes, reward postings, consent events, operator actions, admin access, and reconciliation runs are logged in tamper-resistant, jurisdiction-aware audit trails with configurable retention.' },
              { icon: '🛡', title: 'Fraud controls from day one', desc: 'Idempotency keys, HMAC signature verification, velocity limits, reward holds, clawback provisions, reversal monitoring, and daily ledger reconciliation are MVP features — not Phase 2 additions.' },
              { icon: '💳', title: 'PCI scope minimised', desc: 'Zoiko Loop receives payment outcomes — not cardholder data. It stores no PANs, CVVs, or bank credentials. This is enforced at the event schema boundary, not just by policy.' }
            ].map((box, idx) => (
              <div key={idx} className="bg-slate-900 border border-white/5 rounded-xl p-6 space-y-4">
                <span className="text-xl block">{box.icon}</span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-stone-200">{box.title}</h3>
                <p className="text-xs leading-5 text-slate-400">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* Compliance Tag Footers */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 text-xs text-slate-400">
            {['GDPR', 'UK GDPR', 'NDPC Act (Nigeria)', 'SOC 2 Type II (roadmap)', 'ISO 27001 (roadmap)', 'PCI DSS minimised', 'GDPR Art. 22 explainability'].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-900 border border-white/5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* IS / IS NOT BOUNDARIES */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center space-y-4">
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500">Clear boundaries</div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200">What Zoiko Loop is. What it is not. No ambiguity.</h2>
          <p className="text-slate-400 text-sm max-w-4xl mx-auto leading-8">
            Trust with operators, subscribers, partners, and regulators begins with precision about scope. These boundaries are maintained in API contracts, operator agreements, and product architecture — not just in marketing copy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {/* IS NOT SIDE */}
          <div className="bg-gray-900 p-8 space-y-6">
            <span className="font-['Space_Mono'] text-[10px] font-bold tracking-wider uppercase text-red-500 block">ZOIKO LOOP IS NOT</span>
            <div className="space-y-3">
              {[
                'A billing platform or BSS system',
                'A payment processor or card handler',
                'A credit bureau or credit scoring service',
                'A lender or debt collection tool',
                'An insurance underwriter',
                'A device finance provider',
                'A generic coupon or voucher app',
                'A consumer credit score',
                'A replacement for operator CRM or identity systems'
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-red-500/5 border border-red-500/10 rounded-md p-3 text-xs">
                  <span className="text-red-500 font-bold font-sans">✕</span>
                  <span className="text-slate-400 line-through">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IS SIDE */}
          <div className="bg-gray-900 p-8 space-y-6">
            <span className="font-['Space_Mono'] text-[10px] font-bold tracking-wider uppercase text-teal-500 block">ZOIKO LOOP IS</span>
            <div className="space-y-3">
              {[
                'A telecom payment event ingestion engine',
                'A configurable operator reward rules platform',
                'A double-entry reward ledger and wallet infrastructure',
                'A consent-led, pseudonymised subscriber data processor',
                'A retention intelligence and churn analytics layer',
                'A fraud-controlled, audit-ready rewards system',
                'A native ZoikoNex integration partner',
                'An operator-grade, multi-tenant SaaS platform',
                'The rewards infrastructure that ZoikoNex billing activates'
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-teal-500/5 border border-teal-500/20 rounded-md p-3 text-xs">
                  <span className="text-teal-500 font-bold">✓</span>
                  <span className="text-stone-200">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-white/0 via-white/5 to-white/0" />

      {/* VISION & ROADMAP */}
      <section className="w-full bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500">Vision</div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200 leading-tight">
              A global rewards network for reliable connectivity.
            </h2>
            <p className="text-base leading-8 text-slate-400">
              Zoiko Loop begins as operator-controlled rewards infrastructure. Over time, it can support cross-operator reliability signals, partner-funded offer networks, regional reward ecosystems, and trusted behavioural data partnerships — always subject to privacy, consent, and regulatory safeguards.
            </p>
            <p className="text-base leading-8 text-slate-400">
              A subscriber who pays reliably, tops up consistently, and keeps their account active across years and markets should be recognised for that. An operator that rewards reliability should see measurably stronger retention, more disciplined payment behaviour, and higher customer lifetime value.
            </p>
          </div>

          <div className="lg:col-span-7 bg-gray-900 border border-white/5 rounded-2xl p-8 space-y-6 lg:ml-auto w-full max-w-2xl">
            <blockquote className="font-['Space_Grotesk'] text-2xl font-bold text-stone-200 leading-normal">
              "We are building the infrastructure that turns reliable connectivity into earned customer value."
            </blockquote>
            
            <div className="space-y-3 font-mono text-xs">
              {[
                { label: 'NOW', text: 'Operator rewards and retention infrastructure' },
                { label: 'PHASE 2', text: 'Partner-funded offer networks and advanced analytics' },
                { label: 'PHASE 3', text: 'Cross-operator reliability signals with consent framework' },
                { label: 'PHASE 4+', text: 'Global telecom payment behaviour network' }
              ].map((phase, idx) => (
                <div key={idx} className="bg-gray-900 border border-white/5 rounded-lg p-4 flex gap-6 items-center">
                  <span className="text-teal-500 font-bold w-16 shrink-0">{phase.label}</span>
                  <span className="text-slate-400 font-sans">{phase.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 space-y-8">
          <div className="font-['Space_Mono'] text-xs font-bold uppercase tracking-wider text-teal-500">
            Ready to close the loop?
          </div>
          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-stone-200">
            Reward reliable customers. Build stronger retention.
          </h2>
          <p className="text-slate-400 text-base leading-8 max-w-2xl mx-auto">
            Zoiko Loop is accepting operator pilot partners. Connect billing events, configure reward rules, and measure retention impact — without modifying your billing system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 h-14 bg-amber-500 rounded-lg text-slate-950 font-['Space_Grotesk'] text-base font-bold hover:bg-amber-400 transition-colors">
              Book a Demo
            </button>
            <button className="px-8 h-14 border border-white/10 rounded-lg text-slate-300 font-['Space_Grotesk'] text-base font-medium bg-gray-900 hover:bg-white/5 transition-colors">
              Join the Pilot Programme →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}