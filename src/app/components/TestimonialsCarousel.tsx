"use client";

import React, { useState, useEffect, useCallback } from "react";

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  countryBadge: string;
  commoditiesPurchased: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Vishnu Traders has been our core supplier for Sortex Cumin and Green Cardamom for over 6 years. Their in-house roasting profile is remarkably consistent, and our shipments arrive at Jebel Ali without customs or moisture issues.",
    name: "Tariq Al-Mansoor",
    role: "Procurement Director",
    company: "Gulf Spice & Foodstuffs Trading LLC",
    location: "Dubai, United Arab Emirates",
    countryBadge: "🇦🇪 UAE Buyer",
    commoditiesPurchased: "Drum-Roasted Cumin & Green Cardamom Bold",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Securing Non-GMO yellow soybeans with verified low moisture and 19%+ oil content in bulk FCL volume used to be volatile. Vishnu Traders' direct farm procurement in Madhya Pradesh gave us direct supply security.",
    name: "Lee Chong Wei",
    role: "Head of Agri Sourcing",
    company: "Asean Food Ingredients Sdn Bhd",
    location: "Port Klang, Malaysia",
    countryBadge: "🇲🇾 Malaysia Buyer",
    commoditiesPurchased: "Yellow Soybeans & Sortex Sesame",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The European MRL pesticide standards are rigorous. Vishnu Traders provided thorough pre-shipment COA lab documentation for our High-Curcumin Turmeric shipments, clearing Rotterdam customs seamlessly.",
    name: "Hendrik Van Der Bilt",
    role: "Managing Director",
    company: "Nordic Spice Import BV",
    location: "Rotterdam, Netherlands",
    countryBadge: "🇳🇱 EU Buyer",
    commoditiesPurchased: "High Curcumin Turmeric (4.5%+) & Tellicherry Pepper",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Their private labelling service and 25kg multi-wall barrier packaging have protected our spice blends from humidity during North Atlantic transit. Harsh Agrawal and team are responsive and transparent.",
    name: "David Miller",
    role: "Supply Chain VP",
    company: "Empire Spice & Seasoning Corp",
    location: "New Jersey, USA",
    countryBadge: "🇺🇸 US Buyer",
    commoditiesPurchased: "Ground Spices & Custom Garam Masala Blends",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const active = testimonials[currentIdx];

  return (
    <div
      className="max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-3xl bg-gradient-to-br from-[#1F4A3D] to-[#0A1B15] p-8 sm:p-12 text-white shadow-2xl border border-[#B8934A]/30 overflow-hidden">
        {/* Decorative ambient lighting */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8934A]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar: Stars & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
          <div className="flex items-center gap-1">
            {[...Array(active.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#D4B56A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#D4B56A] border border-white/15">
            {active.countryBadge}
          </span>
        </div>

        {/* Quote Content */}
        <div className="relative z-10 mb-8 min-h-[120px]">
          <p
            className="text-lg sm:text-2xl text-white/90 leading-relaxed italic"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            &ldquo;{active.quote}&rdquo;
          </p>
        </div>

        {/* Buyer Attribution */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <h4 className="text-base font-bold text-white">{active.name}</h4>
            <p className="text-xs text-[#D4B56A] font-medium">
              {active.role} · {active.company}
            </p>
            <p className="text-[11px] text-white/50 mt-0.5">{active.location}</p>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-white/40 block">Key Contract Commodities:</span>
            <span className="text-xs font-medium text-white/80">{active.commoditiesPurchased}</span>
          </div>
        </div>

        {/* Carousel Bottom Controls */}
        <div className="mt-8 pt-4 flex items-center justify-between border-t border-white/5 relative z-10">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "w-8 bg-[#B8934A]" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Testimonial slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-300"
              aria-label="Previous Testimonial"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-[#B8934A] text-white flex items-center justify-center transition-all duration-300"
              aria-label="Next Testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
