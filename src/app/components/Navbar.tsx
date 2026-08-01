"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
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
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1F4A3D] to-[#3F7C67] shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-xl font-bold text-[#B8934A]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>V</span>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#B8934A] border-2 border-white" />
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-[#1F4A3D]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}>
                Vishnu Traders
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8934A]">
                Est. Since 1990
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium text-[#1F4A3D]/80 transition-colors hover:text-[#1F4A3D] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#B8934A] transition-all duration-300 group-hover:left-[20%] group-hover:w-[60%] rounded-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 btn-primary text-sm !py-2.5 !px-6"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[#1F4A3D]/5"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-[#1F4A3D] transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1F4A3D] transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#1F4A3D] transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-[#1F4A3D] hover:text-[#B8934A] transition-colors"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                animationDelay: `${i * 100}ms`,
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
