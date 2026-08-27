"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import VishnuTradersLogo from "./VishnuTradersLogo";

interface HeroSlide {
  id: number;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  imagePath: string;
  fallbackGradient: string;
  accentBadge: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    tagline: "Since 1996 · Pologround Industrial Estate, Indore",
    titlePrefix: "Global Indian Spice &",
    titleHighlight: "Agri-Commodity",
    titleSuffix: "Exporter",
    description:
      "Direct farm-origin procurement from Malwa's agricultural belt. Optical Sortex cleaning, precision drum roasting, and custom packaging under one roof.",
    primaryCtaText: "Explore Export Catalogue",
    primaryCtaHref: "/products",
    secondaryCtaText: "Our In-House Processing",
    secondaryCtaHref: "/processing",
    imagePath: "/images/hero/hero-1.jpg",
    fallbackGradient: "from-[#1F4A3D] via-[#163B30] to-[#0A1B15]",
    accentBadge: "Malwa & Central India Sourcing",
  },
  {
    id: 2,
    tagline: "State-of-the-Art Processing Facility",
    titlePrefix: "Purity & Aroma",
    titleHighlight: "Engineered In-House",
    titleSuffix: "to 99.5%+",
    description:
      "Controlling every thermal roasting curve and multi-stage sortex separation at our Indore facility to guarantee consistent international grades.",
    primaryCtaText: "View 7-Step Process",
    primaryCtaHref: "/processing",
    secondaryCtaText: "View Certifications & QR",
    secondaryCtaHref: "/certifications",
    imagePath: "/images/hero/hero-2.jpg",
    fallbackGradient: "from-[#173A30] via-[#0E2820] to-[#06120D]",
    accentBadge: "In-House Drum Roastery",
  },
  {
    id: 3,
    tagline: "Global Reach · Pan-India Trade Network",
    titlePrefix: "Worldwide Container",
    titleHighlight: "Logistics & Compliance",
    titleSuffix: "FCL / LCL",
    description:
      "Consolidated shipping via Nhava Sheva (JNPT) & Mundra ports with complete Phytosanitary, Certificate of Origin, and customs documentation.",
    primaryCtaText: "Inquire for Destination Port",
    primaryCtaHref: "/contact",
    secondaryCtaText: "WhatsApp Export Desk",
    secondaryCtaHref: "https://wa.me/918839966253",
    imagePath: "/images/hero/hero-3.jpg",
    fallbackGradient: "from-[#1F4A3D] via-[#1C4236] to-[#081812]",
    accentBadge: "Direct Port Dispatch (JNPT / Mundra)",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {/* Background Slides with Crossfade */}
      {slides.map((s, index) => {
        const isActive = index === currentSlide;
        const hasFailed = imageError[s.id];

        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background image if exists, or graceful fallback gradient */}
            {!hasFailed ? (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out scale-105"
                style={{
                  backgroundImage: `url(${s.imagePath})`,
                }}
              >
                {/* Fallback image loader detector */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.imagePath}
                  alt=""
                  className="hidden"
                  onError={() =>
                    setImageError((prev) => ({ ...prev, [s.id]: true }))
                  }
                />
              </div>
            ) : null}

            {/* Deep Rich Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.fallbackGradient} opacity-95`}
            />

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Ambient Lighting Blurs */}
            <div className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full bg-[#B8934A]/10 blur-3xl" />
            <div className="absolute bottom-10 left-[10%] w-[450px] h-[450px] rounded-full bg-[#3F7C67]/15 blur-3xl" />
          </div>
        );
      })}

      {/* Main Slide Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-36 lg:py-44 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 animate-fade-in-up">
            {/* Tagline & Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="gold-divider" />
              <span className="text-[#B8934A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                {slide.tagline}
              </span>
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#B8934A]/15 text-[#D4B56A] border border-[#B8934A]/30">
                {slide.accentBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              {slide.titlePrefix}{" "}
              <span className="gold-gradient-text">{slide.titleHighlight}</span>{" "}
              {slide.titleSuffix}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={slide.primaryCtaHref}
                className="btn-primary text-base group"
              >
                <span>{slide.primaryCtaText}</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href={slide.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/25 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base"
              >
                {slide.secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Emblem / Brand Card Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_28px_60px_-20px_rgba(0,0,0,0.65)] hover:border-[#B8934A]/40 transition-all duration-500">
              <VishnuTradersLogo variant="full" light />

              {/* Quick Spec Strip */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="block text-lg font-bold text-[#D4B56A]">Pologround, MP</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">Processing Center</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="block text-lg font-bold text-[#D4B56A]">FCL / LCL</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">Worldwide Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Arrows & Progress Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          {/* Slide Indicator Bars */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, idx) => {
              const isCurrent = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isCurrent ? "w-10 bg-[#B8934A]" : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
