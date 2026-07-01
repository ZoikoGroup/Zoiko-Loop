"use client";

import Image from "next/image";
import { useEffect, useState } from "react";



const BG = "#0A0D14";
const MINT = "#34D399";
const AMBER = "#E0A83E";

const LOGO_SRC = "/images/zoiko-loop-logo.png";

const NAV_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Integrations", href: "/integrations" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
] as const;

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="relative z-50 w-full border-b border-white/5"
      style={{
        backgroundColor: BG,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-12px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
            <Image
              src={LOGO_SRC}
              alt="Zoiko Loop"
              fill
              sizes="32px"
              className="object-contain"
              onError={(e) => {
                // Graceful fallback while the real logo asset is wired up.
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </span>
          <span className="text-[17px] font-bold tracking-tight">
            <span className="text-white">Zoiko</span>{" "}
            <span style={{ color: MINT }}>Loop</span>
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[14px] font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <span
                className="absolute -bottom-1.5 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                style={{ backgroundColor: MINT }}
              />
            </a>
          ))}
        </div>

        {/* ── Right side: Sign in + CTA (desktop) ── */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="/sign-in"
            className="text-[14px] font-medium text-white/70 transition-colors duration-200 hover:text-white"
          >
            Sign in
          </a>
          <a
            href="/book-a-demo"
            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[14px] font-semibold text-[#1A140A] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(224,168,62,0.5)]"
            style={{ backgroundColor: AMBER }}
          >
            Book a Demo
          </a>
        </div>

        {/* ── Mobile menu button ── */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className="absolute left-0 top-0 h-[1.5px] w-5 bg-white transition-all duration-300 ease-out"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "translateY(0) rotate(0)",
              }}
            />
            <span
              className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 bg-white transition-opacity duration-200 ease-out"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="absolute bottom-0 left-0 h-[1.5px] w-5 bg-white transition-all duration-300 ease-out"
              style={{
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "translateY(0) rotate(0)",
              }}
            />
          </span>
        </button>
      </nav>

      {/* ── Mobile menu panel ── */}
      <div
        className="overflow-hidden border-t border-white/5 lg:hidden"
        style={{
          maxHeight: menuOpen ? "420px" : "0px",
          transition: "max-height 0.35s ease-in-out",
        }}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[14.5px] font-medium text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                transition: `opacity 0.3s ease-out ${i * 40}ms, transform 0.3s ease-out ${i * 40}ms`,
              }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 flex flex-col gap-3 border-t border-white/5 pt-4">
            <a
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-center text-[14.5px] font-medium text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              Sign in
            </a>
            <a
              href="/book-a-demo"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-[14.5px] font-semibold text-[#1A140A] transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: AMBER }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}