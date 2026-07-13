"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * ZoikoLoopFooter
 * Dark navy footer matching the screenshot exactly.
 *
 * 👉 Replace LOGO_SRC with your logo image URL:
 *    e.g. "https://your-cdn.com/zoiko-loop-logo.png"
 *    or drop into /public/images/zoiko-loop-logo.png
 */

const ACCENT = "#0FAA87";
const LOGO_SRC = "/images/zoiko-loop-logo.png"; // 👈 Replace with your URL

const NAV = [
  {
    label: "Platform",
    links: [
      { label: "Event Ingestion",        href: "#" },
      { label: "Reward Rules Engine",    href: "#" },
      { label: "Rewards Ledger",         href: "#" },
      { label: "Wallet APIs",            href: "#" },
      { label: "Operator Console",       href: "#" },
      { label: "Retention Intelligence", href: "#" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "MVNOs",             href: "#" },
      { label: "MNOs",              href: "#" },
      { label: "Prepaid Operators", href: "#" },
      { label: "Family Plans",      href: "#" },
      { label: "Diaspora Top-Up",   href: "#" },
      { label: "Enterprise Groups", href: "#" },
    ],
  },
  {
    label: "Integrations",
    links: [
      { label: "ZoikoNex",          href: "#" },
      { label: "Webhooks",          href: "#" },
      { label: "SFTP Batch",        href: "#" },
      { label: "Top-Up Networks",   href: "#" },
      { label: "Payment Gateways",  href: "#" },
      { label: "Developer Docs",    href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About",         href: "/about" },
      { label: "Zoiko Tech Inc", href: "#" },
      { label: "Security",      href: "#" },
      { label: "Privacy",       href: "#" },
      { label: "Terms",         href: "#" },
      { label: "Contact Sales", href: "#" },
    ],
  },
] as const;

export default function ZoikoLoopFooter() {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);
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
      style={{ backgroundColor: "#0D1625" }}
    >
      {/* Subtle top divider */}
      <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-6"
          style={{ gridTemplateColumns: "repeat(1, 1fr)" }}
        >
          {/* Use CSS custom grid on lg */}
          <div className="hidden lg:contents">
            {/* lg: 5-col with first col wider */}
          </div>
        </div>

        {/* Responsive grid wrapper */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div>
            <Reveal index={0} active={mounted}>
              {/* Logo — image or text fallback */}
              <Link href="/" className="group inline-block">
                {!imgError ? (
                  <Image
                    src={LOGO_SRC}
                    alt="Zoiko Loop"
                    width={140}
                    height={36}
                    className="h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  /* Fallback text logo if image fails */
                  <span className="inline-flex items-center gap-2.5 group-hover:opacity-80 transition-opacity duration-200">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 transition-transform duration-300 group-hover:scale-105"
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
                  </span>
                )}
              </Link>

              {/* Tagline */}
              <p className="mt-5 max-w-[300px] text-[13px] leading-relaxed text-white/55">
                Global telecom rewards and retention infrastructure for MNOs,
                MVNOs, and prepaid operators.
              </p>

              {/* Disclaimer box */}
              <div
                className="mt-5 max-w-[300px] rounded-lg border p-3.5"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
              >
                <p
                  className="text-[11px] leading-[1.7] tracking-tight"
                  style={{
                    color: "rgba(255,255,255,0.38)",
                    fontFamily:
                      "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace",
                  }}
                >
                  Zoiko Loop is not a billing system, payment processor,
                  credit bureau, lender, or credit scoring service.
                </p>
              </div>
            </Reveal>
          </div>

          {/* ── Nav columns ── */}
          {NAV.map((col, colIdx) => (
            <div key={col.label}>
              <Reveal index={colIdx + 1} active={mounted}>
                {/* Column heading */}
                <p
                  className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: ACCENT }}
                >
                  {col.label}
                </p>

                {/* Links */}
                <ul className="flex flex-col gap-[11px]">
                  {col.links.map((link, linkIdx) => (
                    <li key={link.label}>
                      <FooterLink
                        href={link.href}
                        label={link.label}
                        delay={colIdx * 50 + linkIdx * 25}
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
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row lg:px-10">
          <Reveal index={6} active={mounted}>
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 Zoiko Tech Inc. All rights reserved.
            </p>
          </Reveal>

          <Reveal index={7} active={mounted}>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: ACCENT }}
            >
              Pay.&nbsp;&nbsp;Top Up.&nbsp;&nbsp;Earn.&nbsp;&nbsp;Repeat.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── Global styles ── */}
      <style>{`
        @keyframes footerFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Footer nav link with teal underline slide */
        .zl-footer-link {
          position: relative;
          display: inline-block;
          font-size: 13px;
          line-height: 1.4;
          text-decoration: none;
          color: rgba(255,255,255,0.48);
          transition: color 0.18s ease;
        }
        .zl-footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: ${ACCENT};
          transition: width 0.22s ease;
        }
        .zl-footer-link:hover {
          color: rgba(255,255,255,0.88);
        }
        .zl-footer-link:hover::after {
          width: 100%;
        }

        /* Responsive: stack columns on mobile */
        @media (max-width: 640px) {
          .zl-footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  FooterLink                                                           */
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
        animation: mounted
          ? `footerFadeUp 0.5s ease-out ${delay + 150}ms both`
          : "none",
      }}
    >
      <Link href={href} className="zl-footer-link">
        {label}
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                               */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  index,
  active,
}: {
  children: React.ReactNode;
  index: number;
  active: boolean;
}) {
  return (
    <div
      style={{
        opacity: active ? undefined : 0,
        animation: active
          ? `footerFadeUp 0.6s ease-out ${index * 75}ms both`
          : "none",
      }}
    >
      {children}
    </div>
  );
}