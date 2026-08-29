"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroSlide {
  overline: string;
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  primaryIsWhatsApp?: boolean;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  portraitImage: string;
  badge: string;
}

const heroSlides: HeroSlide[] = [
  {
    overline: "30-YEAR COMMODITY TRADING LEGACY · EST. 1996",
    headline: "Strategic Supply Partner for Food Manufacturers & Institutional Buyers",
    subheadline:
      "Procuring premium areca nuts directly from prime global and domestic origins. We provide Indian food manufacturers with a stable, high-volume supply chain, backed by comprehensive Certificate of Analysis (COA) documentation, rigorous laboratory testing, and consistent stock availability.",
    primaryCtaText: "Explore Areca Catalogue",
    primaryCtaHref: "/products",
    secondaryCtaText: "View Processing Standards",
    secondaryCtaHref: "/processing",
    portraitImage: "/images/hero/portrait-1.jpg",
    badge: "Origin Procurement · Global & Domestic",
  },
  {
    overline: "PRECISION GRADING · MOISTURE & PURITY CONTROL",
    headline: "Precision-Graded Areca Nuts — Raw & Roasted, Whole & Split",
    subheadline:
      "Every batch passes through rigorous in-house grading — moisture, size, and purity screening — with limited in-house cutting capability for select split varieties. Stringent laboratory analysis ensures optimal moisture content and purity to meet exacting industrial specifications.",
    primaryCtaText: "Request Specifications & COA",
    primaryCtaHref:
      "https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20request%20specifications%20and%20Certificate%20of%20Analysis%20(COA)%20for%20areca%20nut%20supply.",
    primaryIsWhatsApp: true,
    secondaryCtaText: "Request Sample Lot",
    secondaryCtaHref:
      "https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20request%20a%20sample%20lot%20of%20areca%20nuts.",
    portraitImage: "/images/hero/portrait-2.jpg",
    badge: "In-House QC · Batch Lab Certified",
  },
  {
    overline: "CENTRALIZED PROCESSING & WAREHOUSING · POLOGROUND, INDORE",
    headline: "Premier Importer & Processor of Premium Areca Nuts",
    subheadline:
      "Leveraging direct farmer and trader procurement across every major areca-nut growing and producing nation — including Indonesia, Thailand, Myanmar, and Sri Lanka — alongside domestic Indian sourcing. Our state-of-the-art Pologround facility consolidates bulk warehousing, grading, and custom industrial packaging entirely in-house.",
    primaryCtaText: "View Domestic Catalogue",
    primaryCtaHref: "/products",
    secondaryCtaText: "Explore Our Infrastructure",
    secondaryCtaHref: "/processing",
    portraitImage: "/images/hero/portrait-3.jpg",
    badge: "Pologround Facility · Bulk Warehousing",
  },
];
const backgroundImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imgErrors, setImgErrors] = useState<boolean[]>([false, false, false]);
  const [bgImgErrors, setBgImgErrors] = useState<boolean[]>([false, false, false]);

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

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleImgError = (idx: number) => {
    setImgErrors((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1B15] text-white pt-24 pb-16 lg:py-0"
      aria-label="Vishnu Traders Areca Nut Supply Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
        {/* Background Image */}
        <Image
          src={backgroundImages[currentIndex]}
          alt={`Hero background ${currentIndex + 1}`}
          fill
          priority={currentIndex === 0}
          className="absolute inset-0 object-cover -z-10 filter blur-sm"
          onError={() => setBgImgErrors(prev => { const next = [...prev]; next[currentIndex] = true; return next; })
        />
        {/* Placeholder if background image fails */}
        {bgImgErrors[currentIndex] && (
          <div className="absolute inset-0 bg-green-900/30 -z-10 flex items-center justify-center">
            <span className="text-2xl text-white/70">Background image missing</span>
          </div>
        )}
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-900/20 -z-5"></div>
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1F4A3D]/40 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-[#B8934A]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[300px] rounded-full bg-[#143228]/50 blur-2xl" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Column: Rotating Copy (Screen Text) */}
          <div className="lg:col-span-12 flex flex-col justify-center">
            {/* Overline Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span
                key={`overline-${currentIndex}`}
                className="text-[#D4B56A] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] animate-fade-in"
              >
                {currentSlide.overline}
              </span>
            </div>

            {/* Dynamic Headline */}
            <h1
              key={`headline-${currentIndex}`}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mb-6 text-white drop-shadow-md animate-fade-in"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              }}
            >
              {currentSlide.headline}
            </h1>

            {/* Subheadline Description */}
            <p
              key={`subhead-${currentIndex}`}
              className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed mb-8 drop-shadow-sm animate-fade-in"
            >
              {currentSlide.subheadline}
            </p>

            {/* Action Buttons: WhatsApp First + Internal Navigation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in">
              {currentSlide.primaryIsWhatsApp ? (
                <a
                  href={currentSlide.primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base group shadow-xl hover:shadow-[#B8934A]/30 !py-3.5 !px-8 flex items-center justify-center gap-2.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>{currentSlide.primaryCtaText}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              ) : (
                <Link
                  href={currentSlide.primaryCtaHref}
                  className="btn-primary text-base group shadow-xl hover:shadow-[#B8934A]/30 !py-3.5 !px-8 flex items-center justify-center gap-2"
                >
                  <span>{currentSlide.primaryCtaText}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              )}

              {currentSlide.secondaryCtaHref.startsWith("http") ? (
                <a
                  href={currentSlide.secondaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 hover:border-[#D4B56A] text-white hover:text-[#D4B56A] bg-white/10 hover:bg-white/15 backdrop-blur-md font-semibold transition-all duration-300 text-base"
                >
                  <span>{currentSlide.secondaryCtaText}</span>
                  <span className="text-xs">→</span>
                </a>
              ) : (
                <Link
                  href={currentSlide.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 hover:border-[#D4B56A] text-white hover:text-[#D4B56A] bg-white/10 hover:bg-white/15 backdrop-blur-md font-semibold transition-all duration-300 text-base"
                >
                  <span>{currentSlide.secondaryCtaText}</span>
                  <span className="text-xs">→</span>
                </Link>
              )}
            </div>

            {/* Screen Pagination & Controls */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-[#B8934A]"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
                <span className="text-xs text-white/50 font-mono ml-1">
                  0{currentIndex + 1} / 0{heroSlides.length}
                </span>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
