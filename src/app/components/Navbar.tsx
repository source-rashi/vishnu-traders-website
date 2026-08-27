"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/[0.03]"
          : "bg-[#0F2F27]/55 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl shadow-md ring-1 ring-[#B8934A]/35 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center bg-[#0A1B15]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Vishnu Traders icon">
                <circle cx="16" cy="16" r="13" stroke="#1F4A3D" strokeWidth="1.5" fill="#0A2E24"/>
                <ellipse cx="16" cy="16" rx="5" ry="13" stroke="#3F7C67" strokeWidth="0.8" fill="none"/>
                <line x1="3" y1="16" x2="29" y2="16" stroke="#3F7C67" strokeWidth="0.8"/>
                <line x1="5" y1="10" x2="27" y2="10" stroke="#3F7C67" strokeWidth="0.6"/>
                <line x1="5" y1="22" x2="27" y2="22" stroke="#3F7C67" strokeWidth="0.6"/>
                <path d="M9 8 L16 22 L23 8" stroke="#B8934A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <ellipse cx="16" cy="6.5" rx="2.5" ry="1.2" fill="#B8934A" transform="rotate(-15 16 6.5)"/>
              </svg>
            </div>
            <div>
              <span
                className={`block text-lg font-bold tracking-tight ${
                  scrolled ? "text-[#1F4A3D]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Vishnu Traders
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8934A]">
                Since 1996 · Global Trading
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  scrolled
                    ? "text-[#1F4A3D]/80 hover:text-[#1F4A3D]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#B8934A] transition-all duration-300 group-hover:left-[20%] group-hover:w-[60%] rounded-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 btn-primary text-sm !py-2.5 !px-5"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              scrolled ? "hover:bg-[#1F4A3D]/5" : "hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 origin-center ${
                  scrolled ? "bg-[#1F4A3D]" : "bg-white"
                } ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-[#1F4A3D]" : "bg-white"
                } ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 origin-center ${
                  scrolled ? "bg-[#1F4A3D]" : "bg-white"
                } ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-[#1F4A3D] hover:text-[#B8934A] transition-colors"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                animationDelay: `${i * 80}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-4"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
