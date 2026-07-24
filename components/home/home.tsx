import React from 'react';
import Link from "next/link";

export default function ZoikoLoopHome() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30 selection:text-white antialiased">
      

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-24 px-6 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/25 rounded-full">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
            <span className="text-teal-500 text-xs font-medium font-['Space_Grotesk'] uppercase tracking-wider">Global Telecom Platform</span>
          </div>
          <h1 className="text-stone-200 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] leading-[1.15]">
            Reward the customers who<br />
            <span className="text-teal-500 underline decoration-teal-500/50">pay, top up</span> and stay.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Zoiko Loop is the global telecom rewards and retention platform that converts reliable bill payment, recharge behaviour, and bundle renewal into earned rewards, measurable loyalty, and operator retention intelligence.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
  href="/book-a-demo"
  className="inline-flex items-center justify-center h-14 px-8 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] rounded-lg shadow-[0_0_20px_0_rgba(232,160,32,0.15)] transition-all"
>
  Book a Demo
</Link>
           <Link
  href="/request-operator-access"
  className="inline-flex items-center justify-center h-14 px-6 border border-white/50 hover:border-white text-slate-300 font-medium font-['Space_Grotesk'] rounded-lg transition-colors"
>
  Request Operator Access &rarr;
</Link>
          </div>
          <div className="pt-8 flex flex-wrap gap-3">
            {['MNOs & MVNOs', 'Double-entry ledger', 'Consent-led', 'Fraud-resistant'].map((feat, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded text-xs text-slate-300">
                ✓ {feat}
              </span>
            ))}
          </div>
        </div>

       <div className="lg:col-span-5 relative h-[520px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-radial from-teal-500/5 to-transparent rounded-full blur-3xl"></div>
          
          {/* Loop Ring Container */}
          <div className="w-[440px] h-[440px] relative z-10 font-sans">
            
            {/* Top Center: Payment Event */}
            <div className="w-40 h-14 absolute left-1/2 -translate-x-1/2 top-0 bg-slate-800 border-2 border-teal-500 rounded-sm flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(20,184,166,0.1)]">
              <div className="text-teal-500 font-bold text-xs font-['Inter']">Payment Event</div>
              <div className="text-slate-300 text-[10px] font-['Inter'] mt-0.5">Bill paid · Top-up · Renewal</div>
            </div>

            {/* Top Right: Rules Engine */}
            <div className="w-40 h-14 absolute right-[-20px] top-[100px] bg-slate-900 border border-teal-500 rounded-sm flex flex-col items-center justify-center text-center">
              <div className="text-stone-200 font-bold text-xs font-['Inter']">Rules Engine</div>
              <div className="text-slate-300 text-[10px] font-['Inter'] mt-0.5">Triggers · Streaks · Caps</div>
            </div>

            {/* Bottom Right: Reward Ledger */}
            <div className="w-40 h-14 absolute right-[-20px] bottom-[150px] bg-slate-900 border border-teal-500 rounded-sm flex flex-col items-center justify-center text-center">
              <div className="text-stone-200 font-bold text-xs font-['Inter']">Reward Ledger</div>
              <div className="text-slate-300 text-[10px] font-['Inter'] mt-0.5">Double-entry · Immutable</div>
            </div>

            {/* Bottom Center: Wallet API */}
            <div className="w-40 h-14 absolute left-1/2 -translate-x-1/2 bottom-[30px] bg-slate-900 border border-teal-500 rounded-sm flex flex-col items-center justify-center text-center">
              <div className="text-stone-200 font-bold text-xs font-['Inter']">Wallet API</div>
              <div className="text-slate-300 text-[10px] font-['Inter'] mt-0.5">Balance · History · Tier</div>
            </div>

            {/* Bottom Left: Retention Signal */}
            <div className="w-40 h-14 absolute left-[-20px] bottom-[150px] bg-slate-900 border border-teal-500 rounded-sm flex flex-col items-center justify-center text-center">
              <div className="text-stone-200 font-bold text-xs font-['Inter']">Retention Signal</div>
              <div className="text-slate-300 text-[10px] font-['Inter'] mt-0.5">Churn risk · Cohort analytics</div>
            </div>

            {/* Top Left: Loop Repeats */}
            <div className="w-40 h-14 absolute left-[-20px] top-[100px] bg-slate-800 border-2 border-teal-500 rounded-sm flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(20,184,166,0.1)]">
              <div className="text-teal-500 font-bold text-xs font-['Inter']">Loop Repeats</div>
              <div className="text-slate-300 text-[10px] font-['Inter'] mt-0.5">Operator retains · LTV grows</div>
            </div>

          </div>

          <div className="absolute bottom-[-10px] right-35 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(0,201,167,1)] animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">LIVE EVENT PROCESSING</span>
          </div>
        </div>
      </header>

      {/* --- TELECOM STATISTICS BANNER --- */}
      <section className="bg-gray-900/50 border-y border-white/5 py-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-teal-500 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-2">8.8B</div>
            <div className="text-stone-200 text-sm font-semibold">Global wireless connections</div>
            <div className="text-slate-400 text-xs mt-1">GSMA 2026</div>
          </div>
          <div>
            <div className="text-teal-500 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-2">5.8B</div>
            <div className="text-stone-200 text-sm font-semibold">Unique mobile subscribers</div>
            <div className="text-slate-400 text-xs mt-1">70% of the world</div>
          </div>
          <div>
            <div className="text-teal-500 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-2">12×</div>
            <div className="text-stone-200 text-sm font-semibold">Monthly payment touchpoints</div>
            <div className="text-slate-400 text-xs mt-1">vs. annual banking</div>
          </div>
          <div>
            <div className="text-teal-500 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-2">~25%</div>
            <div className="text-stone-200 text-sm font-semibold">Avg. industry breakage rate</div>
            <div className="text-slate-400 text-xs mt-1">Unredeemed — recoverable</div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION --- */}
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">The Problem</span>
          <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-snug">
            Reliable behaviour is the most valuable signal operators don't reward.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Operators know exactly when subscribers pay, top up, and renew. That data sits in billing systems, generating no retention value. Zoiko Loop activates it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-gray-900 border border-white/5 rounded-xl space-y-3">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase">Late payment</span>
            <h3 className="text-stone-200 text-xl font-bold font-['Space_Grotesk']">weakens revenue predictability</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Postpaid customers who pay late, fail direct debit, or enter collections increase operating cost and reduce lifetime value — without a mechanism to change their behaviour.
            </p>
          </div>

          <div className="p-8 bg-gray-900 border border-white/5 rounded-xl space-y-3">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase">Irregular recharge</span>
            <h3 className="text-stone-200 text-xl font-bold font-['Space_Grotesk']">causes prepaid churn</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Prepaid customers who miss top-up cycles, let bundles expire, or go dormant create revenue leakage. Recharge rhythm is a learnable behaviour. Rewards teach it.
            </p>
          </div>

          <div className="p-8 bg-gray-900 border border-white/5 rounded-xl space-y-3">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase">Generic loyalty</span>
            <h3 className="text-stone-200 text-xl font-bold font-['Space_Grotesk']">rewards activity, not reliability</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Most telecom loyalty programmes reward generic engagement. None are built around the behaviour operators need most: paying on time, topping up consistently, and staying active.
            </p>
          </div>

          <div className="p-8 bg-gray-900 border border-white/5 rounded-xl space-y-3">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase">Billing systems</span>
            <h3 className="text-stone-200 text-xl font-bold font-['Space_Grotesk']">record behaviour but never activate it</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              BSS platforms know precisely when customers pay or top up. That signal reaches the rewards engine at the rate of zero. Zoiko Loop changes that in weeks, not years.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (THE 6 STEPS) --- */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-gray-900/30 to-slate-950 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">How It Works</span>
            <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">From billing event to earned reward in seconds.</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A six-step loop that converts telecom payment behaviour into retention value — without replacing a single component of your existing stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { id: '01', title: 'Operator sends event', desc: 'Payment received, recharge completed, bundle renewed, or account reactivated. Events arrive via webhook API, SFTP batch, or ZoikoNex native stream.' },
              { id: '02', title: 'Zoiko Loop validates', desc: 'Tenant identity, event signature, schema version, consent token, idempotency key, and processing purpose are verified before any reward logic is triggered.' },
              { id: '03', title: 'Rules engine evaluates', desc: 'Operator-configured rules determine eligibility, reward type, amount, streak status, tier thresholds, budget caps, and fraud hold status.' },
              { id: '04', title: 'Ledger posts the reward', desc: 'A double-entry transaction records issuance, updates the subscriber wallet projection, and registers the reward liability against the operator\'s account.' },
              { id: '05', title: 'Subscriber sees value', desc: 'The wallet API exposes the updated balance, streak status, tier, and next reward opportunity — embedded inside the operator\'s existing app.' },
              { id: '06', title: 'Operator measures impact', desc: 'The operator console shows reward liability, campaign performance, payment behaviour trends, churn risk segments, and reconciliation status.' },
            ].map((step) => (
              <div key={step.id} className="flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 bg-teal-500/10 border border-teal-500 rounded-full flex items-center justify-center text-teal-500 font-mono text-xs font-bold">
                  {step.id}
                </div>
                <div className="space-y-2">
                  <h4 className="text-stone-200 font-bold font-['Space_Grotesk'] text-base">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES MODULES --- */}
      <section id="platform" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">Platform Capabilities</span>
          <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">Telecom rewards infrastructure. Not a loyalty add-on.</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Six domain-isolated, independently deployable modules that together form a complete operator-grade rewards and retention stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '⚡', name: 'Event Ingestion', text: 'Accept payment, recharge, bundle, account, and consent events from modern and legacy telecom systems. Webhook API, SFTP batch, and ZoikoNex native stream — all normalised to a canonical event schema.' },
            { icon: '⚙', name: 'Reward Rules Engine', text: 'Configure operator-specific reward triggers using CEL expressions, budget simulation, versioned approval workflows, streak detection, tier thresholds, and reversal propagation — without code deployment.' },
            { icon: '⬡', name: 'Double-Entry Ledger', text: 'Every reward is a financial-grade ledger transaction. Issuance, redemption, expiry, reversal, breakage, partner funding, and operator liability are tracked with full double-entry discipline and daily reconciliation.' },
            { icon: '◈', name: 'Embedded Wallet APIs', text: 'Expose reward balances, history, tier status, streak progress, and redemption options directly inside your operator app — no separate consumer application required for MVP.' },
            { icon: '◎', name: 'Reliability & Retention Intelligence', text: 'The Telecom Payment Reliability Index provides internal rewards-tier signals, churn-risk cohorts, recharge prediction, and payment behaviour analytics — built for operators, never for credit decisions.' },
            { icon: '⬛', name: 'Fraud, Consent & Audit', text: 'Idempotency keys, HMAC-signed events, consent-token validation at every boundary, velocity limits, reward holds, clawbacks, tamper-resistant audit logs, and daily ledger reconciliation — from day one, not Phase 2.' },
          ].map((cap, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-xl flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="w-11 h-11 bg-teal-500/10 border border-teal-500/25 rounded-lg flex items-center justify-center text-xl">
                  {cap.icon}
                </div>
                <h3 className="text-stone-200 font-bold font-['Space_Grotesk'] text-base">{cap.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{cap.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- USE CASES CONTAINER --- */}
      <section id="solutions" className="py-24 bg-gray-900 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">Use Cases</span>
            <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">One platform. Every telecom retention context.</h2>
          </div>

          <div className="p-8 bg-slate-900 border border-white/5 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-stone-200 text-xl sm:text-2xl font-bold font-['Space_Grotesk'] leading-snug">
                Turn payment punctuality into a retention advantage.
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Reward postpaid subscribers for paying early, maintaining autopay, honouring payment promises, and sustaining clean payment streaks. Convert the billing cycle into a monthly loyalty moment — before churn intent forms, not after.
              </p>
              <a href="#" className="inline-block text-teal-500 text-sm font-bold font-['Space_Grotesk'] hover:underline">
                Improve payment performance &rarr;
              </a>
            </div>

            <div className="lg:col-span-6 space-y-3 bg-slate-950 p-6 rounded-xl border border-white/5">
              <div className="text-slate-400 text-[10px] font-mono tracking-widest uppercase mb-4">SAMPLE EVENT SIGNALS</div>
              {[
                'PAYMENT_EARLY → 150 pts',
                'AUTOPAY_ACTIVE → 50 pts/mo',
                '6-month streak → Gold tier',
                'Promise honoured → 75 pts'
              ].map((signal, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900 border border-white/5 rounded-lg font-mono text-xs text-teal-400">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEGRATIONS FLOW --- */}
      <section id="integrations" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">Integration</span>
          <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
            Native with ZoikoNex.<br />Open to everyone else.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Zoiko Loop is architecturally separate from ZoikoNex — but built to integrate with it natively. Operators on ZoikoNex stream billing events directly into Zoiko Loop with zero SFTP configuration and no field mapping effort.
          </p>
          <div className="p-4 bg-teal-500/10 border border-teal-500/25 rounded-xl font-mono text-xs text-teal-500 leading-normal">
            ZoikoNex bills the customer. Zoiko Loop rewards the behaviour.
          </div>
          <div className="pt-4 flex flex-wrap gap-4">
            <button className="h-14 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] rounded-lg shadow-[0_0_20px_0_rgba(232,160,32,0.15)] transition-all">
              Explore integrations
            </button>
            <button className="h-14 px-6 border border-white/50 hover:border-white font-medium font-['Space_Grotesk'] rounded-lg transition-colors text-xs text-slate-300">
              Talk to an integration specialist &rarr;
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-3 w-full">
          {[
            { name: 'ZoikoNex Native Event Stream', badge: 'PRIVILEGED', active: true },
            { name: 'Webhook API (real-time)', badge: 'REST' },
            { name: 'SFTP Batch File Import', badge: 'LEGACY' },
            { name: 'Top-Up Network API (DT One, etc.)', badge: 'PREPAID' },
            { name: 'Payment Gateway Events', badge: 'GATEWAY' },
            { name: 'Open Banking Feed', badge: 'UK / EU' },
          ].map((int, i) => (
            <div key={i} className={`p-4 rounded-xl flex items-center justify-between border ${int.active ? 'bg-teal-500/10 border-teal-500/25 text-teal-500' : 'bg-slate-900 border-white/5 text-stone-200'}`}>
              <span className="text-sm font-semibold">{int.name}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${int.active ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                {int.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECURITY & COMPLIANCE --- */}
      <section id="security" className="py-24 bg-gray-900 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">Security & Compliance</span>
            <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">Built for regulated telecom environments from the first line of code.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔐', title: 'Consent-led', body: 'Every subscriber event carries a consent token validated at the ingestion boundary — not a UI checkbox. GDPR, UK GDPR, and NDPC-ready from day one.' },
              { icon: '🔒', title: 'Pseudonymised by default', body: 'Subscriber references are HMAC-keyed and tenant-specific. Zoiko Loop holds no customer master data. The operator remains the system of record for identity.' },
              { icon: '⬡', title: 'Double-entry ledger', body: 'Reward balances are backed by immutable ledger entries. Every issuance, reversal, and expiry is a financial-grade transaction. No mutable balance fields.' },
              { icon: '🛡', title: 'Fraud-resistant', body: 'Idempotency keys, velocity limits, reward holds, clawback provisions, and daily reconciliation protect reward value from day one — not Phase 2.' },
              { icon: '📋', title: 'Audit-ready', body: 'Rule changes, reward postings, consent events, operator actions, and reconciliation runs are logged in tamper-resistant, jurisdiction-aware audit trails.' },
              { icon: '💳', title: 'PCI-minimised', body: 'Zoiko Loop receives payment outcomes, not cardholder data. Architecturally designed to remain outside PCI DSS scope across all operator integrations.' },
            ].map((sec, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-white/5 rounded-xl space-y-3">
                <div className="text-2xl">{sec.icon}</div>
                <h4 className="text-stone-200 font-bold font-['Space_Grotesk'] text-base">{sec.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-medium text-slate-400">
            {['GDPR / UK GDPR', 'SOC 2 Type II (roadmap)', 'ISO 27001 (roadmap)', 'PCI DSS minimised'].map((badge, idx) => (
              <span key={idx} className="px-4 py-2 bg-slate-900 border border-white/5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMMERCIAL MODEL (PRICING) --- */}
      <section id="pricing" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">Commercial Model</span>
          <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">Three paths into Zoiko Loop.</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Pricing scales with subscriber volume, integration pathway, and deployment region. No published rate cards — every commercial conversation starts with operator-specific discovery.
          </p>
          <p className="text-slate-400 text-[11px] leading-relaxed italic border-t border-white/5 pt-4">
            Zoiko Loop is a telecom rewards and retention platform. It is not a billing system, payment processor, credit bureau, lender, or credit scoring service.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 bg-slate-900 border border-white/5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-stone-200 font-bold font-['Space_Grotesk']">Launch Pilot</h4>
              <p className="text-slate-400 text-xs max-w-md">For MVNOs and challenger operators validating rewards and retention impact. Includes sandbox access, integration support, and rule design assistance.</p>
            </div>
            <button className="whitespace-nowrap px-4 py-2 border border-teal-500/25 hover:border-teal-400 text-teal-400 text-xs font-bold font-['Space_Grotesk'] rounded-md transition-colors">Apply for pilot &rarr;</button>
          </div>

          <div className="p-6 bg-teal-500/10 border border-teal-500/25 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-teal-500 font-bold font-['Space_Grotesk']">Operator Platform</h4>
              <p className="text-slate-300 text-xs max-w-md">Production deployment with embedded wallet APIs, configurable reward rules, operator console, reconciliation, and ZoikoNex integration.</p>
            </div>
            <button className="whitespace-nowrap px-4 py-2 bg-teal-500 text-slate-950 text-xs font-bold font-['Space_Grotesk'] rounded-md transition-all">Request pricing &rarr;</button>
          </div>

          <div className="p-6 bg-slate-900 border border-white/5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-stone-200 font-bold font-['Space_Grotesk']">Enterprise Telecom Group</h4>
              <p className="text-slate-400 text-xs max-w-md">Dedicated tenancy, custom regional deployment, advanced governance, and priority support for larger operator groups.</p>
            </div>
            <button className="whitespace-nowrap px-4 py-2 border border-teal-500/25 hover:border-teal-400 text-teal-400 text-xs font-bold font-['Space_Grotesk'] rounded-md transition-colors">Contact enterprise sales &rarr;</button>
          </div>
        </div>
      </section>

      {/* --- DEVELOPER EXPERIENCE --- */}
      <section className="py-24 bg-gray-900 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">Developer Experience</span>
            <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">Integration-first from the opening API call.</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              OpenAPI specifications, sample payloads, SFTP templates, webhook signing guides, and a full operator certification suite — everything needed to go from sandbox to production without a support ticket.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button className="h-14 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] rounded-lg shadow-[0_0_20px_0_rgba(232,160,32,0.15)] transition-all">
                View developer docs
              </button>
              <button className="h-14 px-6 bg-slate-950 border border-white/5 hover:border-white/20 text-slate-300 font-medium font-['Space_Grotesk'] rounded-lg transition-colors text-xs">
                Request sandbox access &rarr;
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gray-950 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
            <div className="h-11 border-b border-white/5 px-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-xs font-mono text-slate-400">webhook_event.json</span>
              <div className="w-4"></div>
            </div>
            <pre className="p-6 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
{`{
  "event_id": "019058f2-...",
  "event_type": "PAYMENT_EARLY",
  "tenant_id": "mvno_uk_001",
  "customer_ref_hash": "a3f4c2...",
  "consent_token_id": "ct_7829...",
  "amount": 32.99,
  "currency": "GBP",
  "channel": "autopay",
  "idempotency_key": "op_ref_8834",
  "processing_purpose": "REWARDS_ELIGIBILITY"
}`}
            </pre>
            <div className="bg-teal-500/10 border-t border-white/5 p-3 px-6 flex items-center justify-between font-mono text-xs text-teal-400">
              <span>&rarr; REWARD ISSUED: +150 pts</span>
              <span className="text-slate-400">3ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CLOSING CALL TO ACTION --- */}
      <section className="py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-teal-500/5 to-transparent rounded-full blur-2xl scale-75 -z-10"></div>
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-teal-500 text-xs font-bold font-mono uppercase tracking-widest">Ready?</span>
          <h2 className="text-stone-200 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">Close the loop between payment and retention.</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Zoiko Loop is accepting operator pilot partners. Connect billing events, configure reward rules, and measure retention impact without replacing your billing system.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto h-14 px-8 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] rounded-lg shadow-[0_0_20px_0_rgba(232,160,32,0.15)] transition-all">
              Book a Demo
            </button>
            <button className="w-full sm:w-auto h-14 px-6 border border-white/40 hover:border-white text-slate-300 font-medium font-['Space_Grotesk'] rounded-lg transition-colors text-sm">
              Join the Pilot Programme &rarr;
            </button>
          </div>
        </div>
      </section>

     

    </div>
  );
}