"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import InquiryBasketBadge from "./InquiryBasketBadge";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Areca Catalogue", href: "/products" },
  { label: "Processing", href: "/processing" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and prevent touch scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A1B15]/95 backdrop-blur-xl border-b border-[#B8934A]/30 shadow-xl py-2.5"
            : "bg-[#0A1B15]/85 backdrop-blur-md border-b border-white/10 py-3.5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Brand wordmark */}
            <Link
              href="/"
              className="flex min-w-0 shrink items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/final-logo.png"
                alt="Vishnu Traders logo"
                width={48}
                height={48}
                sizes="48px"
                className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
              />
              <span className="min-w-0">
                <span
                  className="block truncate text-base sm:text-xl font-bold tracking-tight leading-tight text-white"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  VISHNU TRADERS
                </span>
                <span className="block truncate text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D4B56A]">
                  Since 1996 · Areca Nut Supply Partner
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 bg-[#B8934A] transition-all duration-200 group-hover:left-[18%] group-hover:w-[64%] rounded-full" />
                </Link>
              ))}

              {/* B2B Inquiry Basket Badge Button */}
              <InquiryBasketBadge className="ml-2" />

              <Link
                href="/contact"
                className="ml-3 btn-primary text-xs !py-2.5 !px-5"
              >
                Request Quote
              </Link>
            </nav>

            {/* Mobile Right Controls */}
            <div className="lg:hidden flex shrink-0 items-center gap-2">
              <InquiryBasketBadge className="shrink-0" />

              <button
                onClick={() => setIsOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 active:bg-white/20"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span className="block h-0.5 w-full bg-white rounded-full" />
                  <span className="block h-0.5 w-full bg-white rounded-full" />
                  <span className="block h-0.5 w-full bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full-Screen Solid Overlay */}
      {/* Placed outside <header> to break free from backdrop-filter containing block */}
      {isOpen && (
        <div
          id="mobile-nav-overlay"
          className="lg:hidden fixed inset-0 z-[100] w-screen h-screen min-h-[100dvh] bg-[#0A1B15] flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Top Bar inside Overlay */}
          <div className="flex h-16 sm:h-20 items-center justify-between px-6 border-b border-[#B8934A]/25 shrink-0 bg-[#0A1B15]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/final-logo.png"
                alt="Vishnu Traders logo"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <div>
                <span
                  className="block text-lg font-bold tracking-tight text-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  VISHNU TRADERS
                </span>
                <span className="block text-[8px] font-semibold uppercase tracking-[0.14em] text-[#D4B56A]">
                  Since 1996 · Areca Nut Supply Partner
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <InquiryBasketBadge />
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8934A]"
                aria-label="Close navigation menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div
            className="flex-1 flex flex-col justify-center px-6 py-6 max-w-sm mx-auto w-full"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4B56A] mb-2 px-2">
              Main Menu
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-lg text-lg font-semibold text-white/95 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors border-b border-white/5"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  <span>{link.label}</span>
                  <span className="text-[#B8934A] text-sm font-sans">→</span>
                </Link>
              ))}
            </nav>

            <div className="mt-5">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center !py-3.5 text-xs tracking-wider uppercase font-bold shadow-xl block"
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Bottom Info Strip */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#071510] text-center shrink-0">
            <p className="text-[11px] text-white/60">
              Pologround Industrial Estate, Indore, MP
            </p>
            <a
              href="tel:+918839966253"
              className="inline-block mt-1 text-xs font-semibold text-[#D4B56A] hover:underline"
            >
              Direct Sourcing Desk: +91 88399 66253
            </a>
          </div>
        </div>
      )}
    </>
  );
}
