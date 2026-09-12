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

  return (
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
          <Link href="/" className="flex min-w-0 shrink items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]">
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
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-out flex flex-col justify-center px-8 ${
          isOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="mb-2 text-center">
            <Image
              src="/final-logo.png"
              alt="Vishnu Traders logo"
              width={96}
              height={96}
              sizes="96px"
              className="mx-auto mb-3 h-20 w-20 object-contain"
            />
            <div
              className="text-3xl font-bold tracking-tight text-[#1F4A3D]"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              VISHNU TRADERS
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8934A]">
              Since 1996 · Areca Nut Supply Partner
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-[#1F4A3D] hover:text-[#B8934A] transition-transform duration-200 hover:translate-x-1"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-2 w-full max-w-xs"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
