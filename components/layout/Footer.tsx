"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";


const ACCENT = "#0FAA87";

const NAV = [
  {
    label: "Platform",
    links: [
      "Event Ingestion",
      "Reward Rules Engine",
      "Rewards Ledger",
      "Wallet APIs",
      "Operator Console",
      "Retention Intelligence",
    ],
  },
  {
    label: "Solutions",
    links: [
      "MVNOs",
      "MNOs",
      "Prepaid Operators",
      "Family Plans",
      "Diaspora Top-Up",
      "Enterprise Groups",
    ],
  },
  {
    label: "Integrations",
    links: [
      "ZoikoNex",
      "Webhooks",
      "SFTP Batch",
      "Top-Up Networks",
      "Payment Gateways",
      "Developer Docs",
    ],
  },
  {
    label: "Company",
    links: [
      "About",
      "Zoiko Tech Inc",
      "Security",
      "Privacy",
      "Terms",
      "Contact Sales",
    ],
  },
] as const;

export default function ZoikoLoopFooter() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setMounted(true); observer.disconnect(); }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className="relative w-full"
      style={{ backgroundColor: "#0D1B3E" }}
    >
      {/* Subtle top border */}
      <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

      {/* ── Main footer grid ── */}
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-1">
            <Reveal index={0} active={mounted}>
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                {/* Teal circle icon */}
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ borderColor: ACCENT }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="4" stroke={ACCENT} strokeWidth="1.5" />
                    <circle cx="6" cy="6" r="1.5" fill={ACCENT} />
                  </svg>
                </span>
                <span className="text-[15px] font-bold tracking-tight text-white">
                  Zoiko <span style={{ color: ACCENT }}>Loop</span>
                </span>
              </Link>

              {/* Tagline */}
              <p className="mt-4 text-[13px] leading-relaxed text-white/55">
                Global telecom rewards and retention infrastructure for MNOs,
                MVNOs, and prepaid operators.
              </p>

              {/* Disclaimer box */}
              <div
                className="mt-5 rounded-lg border p-3.5"
                style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.38)", fontFamily: "ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace" }}
                >
                  Zoiko Loop is not a billing system, payment processor, credit
                  bureau, lender, or credit scoring service.
                </p>
              </div>
            </Reveal>
          </div>

          {/* ── Cols 2-5: Nav columns ── */}
          {NAV.map((col, colIdx) => (
            <div key={col.label} className="lg:col-span-1">
              <Reveal index={colIdx + 1} active={mounted}>
                {/* Column header */}
                <p
                  className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  {col.label}
                </p>

                {/* Links */}
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link, linkIdx) => (
                    <li key={link}>
                      <FooterLink
                        href="#"
                        label={link}
                        delay={colIdx * 60 + linkIdx * 30}
                        mounted={mounted}
                      />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row lg:px-8">
          <Reveal index={5} active={mounted}>
            <p className="text-[12px] text-white/35">
              © 2026 Zoiko Tech Inc. All rights reserved.
            </p>
          </Reveal>

          <Reveal index={6} active={mounted}>
            <p
              className="text-[11.5px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: ACCENT }}
            >
              Pay.&nbsp; Top Up.&nbsp; Earn.&nbsp; Repeat.
            </p>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes footerFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .footer-link {
          position: relative;
          display: inline-block;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          line-height: 1.4;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: ${ACCENT};
          transition: width 0.25s ease;
        }
        .footer-link:hover {
          color: rgba(255,255,255,0.9);
        }
        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  FooterLink — with underline slide animation on hover                */
/* ------------------------------------------------------------------ */
function FooterLink({
  href,
  label,
  delay,
  mounted,
}: {
  href: string;
  label: string;
  delay: number;
  mounted: boolean;
}) {
  return (
    <div
      style={{
        opacity: mounted ? undefined : 0,
        animation: mounted ? `footerFadeUp 0.5s ease-out ${delay + 200}ms both` : "none",
      }}
    >
      <Link href={href} className="footer-link">
        {label}
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal — block-level staggered fade-up                              */
/* ------------------------------------------------------------------ */
function Reveal({ children, index, active }: { children: React.ReactNode; index: number; active: boolean }) {
  return (
    <div
      style={{
        opacity: active ? undefined : 0,
        animation: active ? `footerFadeUp 0.6s ease-out ${index * 80}ms both` : "none",
      }}
    >
      {children}
    </div>
  );
}