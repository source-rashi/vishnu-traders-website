"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import VishnuTradersLogo from "./VishnuTradersLogo";
import InquiryBasketBadge from "./InquiryBasketBadge";

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
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100 py-2"
          : "bg-[#0F2F27]/70 backdrop-blur-md py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Component */}
          <Link href="/" className="group transition-transform duration-300 hover:scale-[1.02]">
            <VishnuTradersLogo
              variant="horizontal"
              light={!scrolled}
              className=""
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  scrolled
                    ? "text-[#1F4A3D]/90 hover:text-[#1F4A3D]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#B8934A] transition-all duration-300 group-hover:left-[20%] group-hover:w-[60%] rounded-full" />
              </Link>
            ))}

            {/* B2B Inquiry Basket Badge Button */}
            <InquiryBasketBadge className="ml-2" />

            <Link
              href="/contact"
              className="ml-3 btn-primary text-xs !py-2.5 !px-5"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Right Controls: Inquiry Basket Badge & Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <InquiryBasketBadge />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                scrolled ? "hover:bg-[#1F4A3D]/5" : "hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 origin-center ${
                    scrolled ? "bg-[#1F4A3D]" : "bg-white"
                  } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    scrolled ? "bg-[#1F4A3D]" : "bg-white"
                  } ${isOpen ? "opacity-0 scale-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 origin-center ${
                    scrolled ? "bg-[#1F4A3D]" : "bg-white"
                  } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-500 flex flex-col justify-center px-8 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="mb-2">
            <VishnuTradersLogo variant="full" />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-[#1F4A3D] hover:text-[#B8934A] transition-colors"
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
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
