"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    image: "/images/hero/hero-1.jpg",
    tagline: "Direct Farm Procurement · Pologround, Indore",
    titleLine1: "Global Indian Spice &",
    titleHighlight: "Agri-Commodity",
    titleLine2: "Exporter",
    description:
      "Direct farm-origin procurement across Malwa & Central India. Optical Sortex cleaning, precision drum roasting, and custom export packaging — 100% in-house.",
  },
  {
    image: "/images/hero/hero-2.jpg",
    tagline: "Precision Roastery & Sortex Grading",
    titleLine1: "Premium Sortex Purity &",
    titleHighlight: "Roasted Spices",
    titleLine2: "Worldwide",
    description:
      "From high-curcumin turmeric and bold cumin to custom drum-roasted seeds, our facility delivers uncompromised purity and volatile oil retention to international markets.",
  },
  {
    image: "/images/hero/hero-3.jpg",
    tagline: "30-Year Export Legacy · Since 1996",
    titleLine1: "Trusted Partner for",
    titleHighlight: "Institutional Buyers",
    titleLine2: "& Food Brands",
    description:
      "Serving recurring importers and food manufacturers across GCC, Southeast Asia, Europe, and the Americas with complete COA documentation and port readiness.",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<boolean[]>([false, false, false]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((idx: number) => {
    setCurrentIndex(idx);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance every 5.5 seconds with smooth crossfade
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleImgError = (idx: number) => {
    setImgErrors((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1B15]"
      aria-label="Hero Section"
    >
      {/* ── FULL-BLEED ROTATING PHOTO CAROUSEL BACKGROUND ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 pointer-events-none scale-105"
              }`}
              style={{
                transition: "opacity 1000ms ease-in-out, transform 6000ms ease-out",
              }}
            >
              {imgErrors[idx] ? (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F4A3D] via-[#143228] to-[#0A1B15]" />
              ) : (
                <Image
                  src={slide.image}
                  alt={`Vishnu Traders Spice Showcase ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center transform transition-transform duration-[6000ms] scale-105"
                  onError={() => handleImgError(idx)}
                />
              )}
            </div>
          );
        })}

        {/* ── DARK GRADIENT OVERLAYS FOR OPTIMAL READABILITY ── */}
        {/* Deep bottom-to-top vignette */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A1B15] via-[#0A1B15]/75 to-[#0A1B15]/45 pointer-events-none" />
        {/* Directional left-to-right gradient for text focus */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1B15]/90 via-[#0A1B15]/60 to-transparent pointer-events-none" />
        {/* Subtle warm gold shimmer highlight */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#B8934A]/10 blur-3xl pointer-events-none z-10" />
      </div>

      {/* ── HERO TEXT & CONTENT ON TOP ── */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-36 lg:py-40 z-20 w-full">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <div className="gold-divider" />
            <span className="text-[#D4B56A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] drop-shadow-sm">
              {heroSlides[currentIndex].tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg animate-fade-in-up"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              animationDelay: "100ms",
            }}
          >
            {heroSlides[currentIndex].titleLine1}{" "}
            <span className="gold-gradient-text block sm:inline">
              {heroSlides[currentIndex].titleHighlight}
            </span>{" "}
            {heroSlides[currentIndex].titleLine2}
          </h1>

          {/* Subheadline / Description */}
          <p
            className="text-base sm:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed mb-10 drop-shadow-sm animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {heroSlides[currentIndex].description}
          </p>

          {/* Call to Action Buttons */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/products"
              className="btn-primary text-base group shadow-xl hover:shadow-[#B8934A]/30 !py-3.5 !px-8"
            >
              <span>Explore Export Catalogue</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/processing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-[#D4B56A] text-white hover:text-[#D4B56A] bg-white/10 hover:bg-white/15 backdrop-blur-md font-semibold transition-all duration-300 text-base"
            >
              <span>Our In-House Processing</span>
              <span className="text-xs">→</span>
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-12 pt-8 border-t border-white/15 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#B8934A]/20 text-[#EBD095] border border-[#B8934A]/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              FSSAI Registered
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
              ✨ 100% In-House Processing
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
              🚢 JNPT & Mundra Dispatch
            </span>
          </div>
        </div>
      </div>

      {/* ── CAROUSEL CONTROLS (DOTS + ARROWS) ── */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-30 flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Clickable Dots */}
        <div className="flex items-center gap-2">
          {heroSlides.map((_, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to hero slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? "w-8 bg-[#B8934A]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
