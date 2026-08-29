"use client";

import React, { useState, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "../components/ScrollReveal";
import FAQAccordion from "../components/FAQAccordion";
import MediaWithFallback from "../components/MediaWithFallback";
import TrustBadgeStrip from "../components/TrustBadgeStrip";

const contactInfo = [
  {
    title: "Warehouse & Operations Facility",
    description:
      "R-20 Pologround Industrial Estate, Malti Vanaspati, Indore, Madhya Pradesh 452015, India",
    href: "https://maps.app.goo.gl/KKwyo6uoLbBCuSeD7",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    title: "Direct Operations Desk",
    description: "+91 88399 66253 (Harsh Agrawal)",
    href: "tel:+918839966253",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Business Desk (Fast Response)",
    description: "+91 88399 66253 (Same-Day Pricing)",
    href: "https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20areca%20nut%20supply.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    title: "Official Email",
    description: "info@vishnutraders.in",
    href: "mailto:info@vishnutraders.in",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  
  // New Schema Fields (Part 6b)
  const [fullName, setFullName] = useState("");
  const [buyerType, setBuyerType] = useState<"Domestic Institutional" | "International Importer">("Domestic Institutional");
  const [productInterest, setProductInterest] = useState<string>("Raw Whole");
  const [gradePreference, setGradePreference] = useState<string>("95%+ (Super)");
  const [destination, setDestination] = useState("");
  const [approxQuantity, setApproxQuantity] = useState("10 Tons (Standard MOQ)");
  const [inquiryDetails, setInquiryDetails] = useState("");

  useEffect(() => {
    const prefill = searchParams.get("inquiry_prefill");
    const sample = searchParams.get("sample");

    if (prefill) {
      setInquiryDetails(prefill);
    } else if (sample) {
      setInquiryDetails(`Hello, I would like to request an official evaluation sample lot for: ${sample}.`);
    }
  }, [searchParams]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  // Construct direct WhatsApp message from form state
  const constructedWaMsg = encodeURIComponent(
    `Official Trade RFQ Inquiry:\n\n• Name / Entity: ${fullName || "Institutional Buyer"}\n• Buyer Type: ${buyerType}\n• Product: ${productInterest}\n• Grade: ${gradePreference}\n• Destination: ${destination || "Pan-India"}\n• Approx Quantity: ${approxQuantity}\n\nDetails / Notes:\n${inquiryDetails || "Requesting best market quote, batch availability, and COA specs."}`
  );

  return (
    <div className="glass-card rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-200 bg-white">
      {submitted ? (
        <div className="text-center py-16 animate-scale-in space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 text-[#1F4A3D]">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <h3
            className="text-2xl font-bold text-[#1F4A3D]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            RFQ Inquiry Received
          </h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you for reaching out. Harsh Agrawal and our sourcing desk will review your {productInterest} ({gradePreference}) requirement and respond same-day with current market pricing and specifications.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/918839966253?text=${constructedWaMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !py-3 !px-6"
            >
              Accelerate via WhatsApp Desk →
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary text-xs !py-3 !px-6"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3
                className="text-xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Official Areca Nut RFQ & Trade Inquiry
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">
                Direct to Harsh Agrawal · Indore Headquarters & Pologround Facility
              </p>
            </div>
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF3E7] text-[#8A6A2E] border border-[#B8934A]/30">
              Direct Desk
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Field 1: Full Name / Company */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Full Name / Company Entity *
              </label>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ramesh Trading Co. / Food Processors Ltd."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
              />
            </div>

            {/* Field 2: Buyer Type & Product Interest */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Buyer Type *
                </label>
                <select
                  value={buyerType}
                  onChange={(e) => setBuyerType(e.target.value as "Domestic Institutional" | "International Importer")}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-white"
                >
                  <option value="Domestic Institutional">Domestic Institutional (Pan-India)</option>
                  <option value="International Importer">International Importer (Import / Global)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Product Interest *
                </label>
                <select
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-white"
                >
                  <option value="Raw Whole">Raw Areca Nut — Whole</option>
                  <option value="Raw Split">Raw Areca Nut — Split</option>
                  <option value="Roasted Whole">Roasted Areca Nut — Whole</option>
                  <option value="Roasted Split">Roasted Areca Nut — Split</option>
                </select>
              </div>
            </div>

            {/* Field 3: Grade Preference & Destination (Conditional Label) */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Grade Preference *
                </label>
                <select
                  value={gradePreference}
                  onChange={(e) => setGradePreference(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-white"
                >
                  <option value="80–85%">Grade 80–85% (Commercial)</option>
                  <option value="90–95%">Grade 90–95% (Selected Purity)</option>
                  <option value="95%+ (Super)">Grade 95%+ (Super Caliber)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  {buyerType === "Domestic Institutional"
                    ? "Destination State / City (India) *"
                    : "Destination Country / Port *"}
                </label>
                <input
                  required
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder={
                    buyerType === "Domestic Institutional"
                      ? "e.g. Maharashtra / Gujarat / Delhi / UP..."
                      : "e.g. UAE / Singapore / Discharge Port..."
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
                />
              </div>
            </div>

            {/* Field 4: Approx Quantity / Month */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Approx. Quantity / Month (MOQ: 10 Tons) *
              </label>
              <input
                required
                type="text"
                value={approxQuantity}
                onChange={(e) => setApproxQuantity(e.target.value)}
                placeholder="e.g. 10 Tons, 25 Tons, 50 Tons / Month..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all bg-gray-50/50 focus:bg-white"
              />
            </div>

            {/* Field 5: Inquiry Details */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Inquiry Details / Specification Notes
                </label>
                <span className="text-[10px] text-gray-400">Packaging, moisture, delivery terms</span>
              </div>
              <textarea
                rows={4}
                value={inquiryDetails}
                onChange={(e) => setInquiryDetails(e.target.value)}
                placeholder="Specify your delivery schedule, custom moisture requirements, sample lot requests, or bagging preferences..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all resize-none bg-gray-50/50 focus:bg-white leading-relaxed"
              />
            </div>

            {/* Submit & Direct WhatsApp Action */}
            <div className="space-y-3 pt-2">
              <button type="submit" className="btn-primary w-full text-base group !py-3.5 flex items-center justify-center gap-2">
                <span>Submit Official RFQ Inquiry</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <a
                href={`https://wa.me/918839966253?text=${constructedWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full border-2 border-emerald-500/50 bg-emerald-50 hover:bg-emerald-100 text-[#1F4A3D] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>Or Send Direct via WhatsApp (+91 88399 66253)</span>
              </a>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white bg-[#0A1B15]">
        <div className="absolute inset-0">
          <MediaWithFallback
            src="/images/contact/contact-banner.jpg"
            alt="Areca nut trade communication and supply desk"
            fill
            className="object-cover opacity-35"
            fallbackGradient="from-[#1F4A3D] via-[#3F7C67] to-[#0A1B15]"
          />
          <div className="absolute inset-0 bg-[#0A1B15]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B15] via-transparent to-black/50" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#D4B56A] text-sm font-semibold uppercase tracking-[0.15em] drop-shadow-sm">
              Trade Inquiries & Sourcing Desk
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Get in <span className="gold-gradient-text">Touch</span>
          </h1>
          <p className="text-white/85 text-lg max-w-2xl leading-relaxed drop-shadow-sm">
            Contact Harsh Agrawal at our Indore headquarters for stock availability, current areca nut market pricing, sample dispatches, and logistics.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadgeStrip variant="gold" />

      {/* Info & RFQ Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left – Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal animation="fade-up">
                <div>
                  <h2 className="section-heading text-2xl lg:text-3xl mb-4">
                    Warehouse & Operations Facility
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    Situated in Indore&apos;s Pologround Industrial Estate — our central processing and bulk warehousing hub managing raw and roasted areca nut distribution nationwide.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <ScrollReveal key={info.title} animation="fade-up" delay={idx * 80}>
                    <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 hover:border-[#B8934A]/40 transition-colors bg-[#FAFAF8] shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF3E7] to-[#F5F0E8] border border-[#B8934A]/25 flex items-center justify-center text-[#1F4A3D] shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1F4A3D] text-sm">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <div className="mt-1">
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-gray-600 text-xs hover:text-[#B8934A] transition-colors block leading-relaxed"
                            >
                              {info.description}
                            </a>
                            {info.href.includes("maps") && (
                              <a
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B8934A] hover:underline mt-1.5"
                              >
                                <span>Get Directions on Google Maps</span>
                                <span>↗</span>
                              </a>
                            )}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{info.description}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Operating Hours Note */}
              <ScrollReveal animation="fade-up" delay={250}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FAF3E7] to-[#F5F0E8] border border-[#B8934A]/25 space-y-2">
                  <div className="flex items-center gap-2 text-[#1F4A3D] font-bold text-xs uppercase tracking-wider">
                    <span>🏢</span>
                    <span>Facility Operating Hours</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Monday – Saturday: 09:30 AM – 07:30 PM IST. Same-day response for WhatsApp inquiries, sample dispatches, and bulk freight coordination.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right – Form with Pre-fill */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-up" delay={150}>
                <Suspense fallback={<div className="p-12 text-center text-gray-400">Loading inquiry form...</div>}>
                  <ContactFormInner />
                </Suspense>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 lg:py-32 bg-[#FAF6F0] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-divider" />
                <span className="text-[#B8934A] text-sm font-semibold uppercase tracking-[0.15em]">
                  Trade Knowledge Base
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-4xl mb-4">
                Frequently Asked Trade Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Essential information regarding Minimum Order Quantities, moisture parameters, COA lab tests, and WhatsApp quotes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
