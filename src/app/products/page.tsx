"use client";

import React, { useState } from "react";
import Link from "next/link";
import AddToInquiryButton from "../components/AddToInquiryButton";
import MediaWithFallback from "../components/MediaWithFallback";
import ScrollReveal from "../components/ScrollReveal";
import TrustBadgeStrip from "../components/TrustBadgeStrip";

interface GradeOption {
  tier: string;
  purity: string;
  description: string;
  application: string;
}

interface ArecaProduct {
  id: string;
  name: string;
  category: "Raw Areca Nut" | "Roasted Areca Nut";
  form: "Whole" | "Split";
  hsCode: string;
  moistureSpec: string;
  drying: string;
  image: string;
  badge: string;
  description: string;
  origins: string;
  grades: GradeOption[];
}

const arecaCatalogue: ArecaProduct[] = [
  {
    id: "raw-areca-whole",
    name: "Raw Areca Nut — Whole",
    category: "Raw Areca Nut",
    form: "Whole",
    hsCode: "0802.80",
    moistureSpec: "≤5%",
    drying: "Sun-Dried / Machine-Dried",
    image: "/images/products/raw-whole.jpg",
    badge: "Direct Sourced",
    description:
      "Carefully screened whole raw areca nuts procured directly from overseas plantation origins (Indonesia, Thailand, Myanmar, Sri Lanka) and domestic South Indian growers in Kerala & Karnataka. High density and uniform caliber.",
    origins: "Indonesia, Thailand, Myanmar, Sri Lanka & Kerala/Karnataka",
    grades: [
      {
        tier: "80–85%",
        purity: "Standard Commercial",
        description: "Sound caliber nuts with balanced firmness for industrial processing.",
        application: "Standard manufacturing & commercial blending",
      },
      {
        tier: "90–95%",
        purity: "Selected High Purity",
        description: "Rigidly sorted for uniform density, high maturity, and minimal defect rate.",
        application: "Premium food processing & wholesale trade",
      },
      {
        tier: "95%+ (Super)",
        purity: "Export Super Caliber",
        description: "Hand-selected prime whole nuts with superior maturity and zero foreign matter.",
        application: "High-grade institutional packaging & specialized formulations",
      },
    ],
  },
  {
    id: "raw-areca-split",
    name: "Raw Areca Nut — Split",
    category: "Raw Areca Nut",
    form: "Split",
    hsCode: "0802.80",
    moistureSpec: "≤5%",
    drying: "Sun-Dried / Machine-Dried",
    image: "/images/products/raw-split.jpg",
    badge: "Limited In-House Cutting",
    description:
      "Precision-graded raw split varieties with limited in-house cutting capability for select varieties. Clean, even splits screened for size consistency, internal moisture balance, and absence of hollow nuts.",
    origins: "Kerala, Karnataka, Indonesia & Sri Lanka",
    grades: [
      {
        tier: "80–85%",
        purity: "Standard Clean Split",
        description: "Evenly halved raw nuts suited for bulk industrial formulations.",
        application: "Bulk processing & confectionery mixing",
      },
      {
        tier: "90–95%",
        purity: "Uniform Graded Split",
        description: "Strictly screened for cut cleanliness, uniform diameter, and structural integrity.",
        application: "Commercial packaging & institutional supply",
      },
      {
        tier: "95%+ (Super)",
        purity: "Super Clean Split",
        description: "Prime export-quality splits with uniform kernel cross-section and bright texture.",
        application: "Premium institutional brands & high-grade formulations",
      },
    ],
  },
  {
    id: "roasted-areca-whole",
    name: "Roasted Areca Nut — Whole",
    category: "Roasted Areca Nut",
    form: "Whole",
    hsCode: "2008.19.91",
    moistureSpec: "≤5%",
    drying: "Controlled Drum-Roasted",
    image: "/images/products/roasted-whole.jpg",
    badge: "In-House Drum Roastery",
    description:
      "Whole areca nuts drum-roasted under calibrated thermal profiles at our Indore facility. Ensures deep, uniform toasting throughout the kernel with crispness, prolonged shelf stability, and locked-in aroma.",
    origins: "Pologround Roastery (Processed from Prime Origin Intake)",
    grades: [
      {
        tier: "80–85%",
        purity: "Standard Roasted Batch",
        description: "Evenly drum-toasted whole nuts with consistent moisture reduction.",
        application: "Industrial food flavoring & commercial distribution",
      },
      {
        tier: "90–95%",
        purity: "Selected Even Toast",
        description: "Optimal roast profile with balanced coloration and crispness throughout.",
        application: "Institutional food processors & premium wholesalers",
      },
      {
        tier: "95%+ (Super)",
        purity: "Super Roasted Caliber",
        description: "Highest caliber roasted whole nuts with uniform golden-brown toasting.",
        application: "High-grade proprietary formulations & premium brands",
      },
    ],
  },
  {
    id: "roasted-areca-split",
    name: "Roasted Areca Nut — Split",
    category: "Roasted Areca Nut",
    form: "Split",
    hsCode: "2008.19.91",
    moistureSpec: "≤5%",
    drying: "Controlled Drum-Roasted",
    image: "/images/products/roasted-split.jpg",
    badge: "Evenly Toasted Splits",
    description:
      "Split areca nuts subjected to precision drum roasting. Thermal penetration across the split surface provides exceptional crisp texture, consistent coloration, and immediate readiness for industrial blending lines.",
    origins: "Pologround Roastery (Indore Processing Facility)",
    grades: [
      {
        tier: "80–85%",
        purity: "Standard Roasted Splits",
        description: "Reliable roasted split nuts with uniform texture and clean edges.",
        application: "Commercial food manufacturing & bulk trade",
      },
      {
        tier: "90–95%",
        purity: "High Purity Roasted Splits",
        description: "Carefully roasted with stringent control over broken percentages and color consistency.",
        application: "Institutional packaging & confectionery blending",
      },
      {
        tier: "95%+ (Super)",
        purity: "Super Selected Roasted Splits",
        description: "Prime selected roasted splits meeting the highest industrial purity standards.",
        application: "Premium proprietary blends & export packaging",
      },
    ],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedGrades, setSelectedGrades] = useState<Record<string, string>>({
    "raw-areca-whole": "95%+ (Super)",
    "raw-areca-split": "95%+ (Super)",
    "roasted-areca-whole": "95%+ (Super)",
    "roasted-areca-split": "95%+ (Super)",
  });

  const filteredProducts = arecaCatalogue.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  const handleGradeSelect = (productId: string, gradeTier: string) => {
    setSelectedGrades((prev) => ({ ...prev, [productId]: gradeTier }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white bg-[#0A1B15]">
        <div className="absolute inset-0">
          <MediaWithFallback
            src="/images/products/raw-whole.jpg"
            alt="Areca Nut catalogue Vishnu Traders"
            fill
            className="object-cover opacity-25"
            fallbackIcon="🥜"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B15] via-[#0A1B15]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B15]/95 via-[#0A1B15]/75 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-divider" />
            <span className="text-[#D4B56A] text-sm font-semibold uppercase tracking-[0.15em] drop-shadow-sm">
              Industrial Commodity Catalogue
            </span>
          </div>
          <h1
            className="text-4xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            Areca Nut <span className="gold-gradient-text">Product Catalogue</span>
          </h1>
          <p className="text-white/85 text-lg max-w-2xl leading-relaxed drop-shadow-sm">
            Supplying Indian food manufacturers, wholesalers, and institutional buyers with precision-graded Raw and Roasted Areca Nut across Whole and Split lines.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadgeStrip variant="gold" />

      {/* ═══════ SPECIFICATIONS SUMMARY TABLE (Part 3 Specifications Block) ═══════ */}
      <section className="bg-[#FAF3E7] border-b border-[#B8934A]/25 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A6A2E]">
                Official Technical Specifications
              </span>
              <h2
                className="text-xl sm:text-2xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Standard Industrial Quality Parameters
              </h2>
            </div>
            <span className="text-xs font-semibold text-gray-500">
              Certificate of Analysis (COA) with Every Batch
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            <div className="p-3.5 rounded-2xl bg-white border border-[#B8934A]/20 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">HS Codes</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-0.5 block font-mono">
                0802.80 / 2008.19.91
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-[#B8934A]/20 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Moisture</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-0.5 block">
                ≤ 5% *
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-[#B8934A]/20 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Foreign Matter</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-0.5 block">
                ≤ 1%
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-[#B8934A]/20 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Broken Rate</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-0.5 block">
                ≤ 3–5%
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-[#B8934A]/20 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Minimum Order (MOQ)</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-0.5 block">
                10 Tons
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-[#B8934A]/20 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Packaging</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-0.5 block">
                50–80 kg Bags
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-[#B8934A]/20 shadow-sm col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-gray-500 block">Drying</span>
              <span className="text-xs sm:text-sm font-bold text-[#1F4A3D] mt-0.5 block">
                Sun / Machine
              </span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-3 text-center">
            * Moisture, foreign-matter, and broken-rate follow standard industry spec conventions — certified against batch laboratory analysis before dispatch.
          </p>
        </div>
      </section>

      {/* ═══════ CATALOGUE FILTER & PRODUCT CARDS ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: "all", label: "All Areca Nut Lines" },
              { id: "Raw Areca Nut", label: "Raw Areca Nut (Whole & Split)" },
              { id: "Roasted Areca Nut", label: "Roasted Areca Nut (Whole & Split)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === tab.id
                    ? "bg-[#1F4A3D] text-white shadow-md"
                    : "bg-[#FAFAF8] text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Deep Cards */}
          <div className="space-y-16">
            {filteredProducts.map((product, idx) => {
              const currentGradeTier = selectedGrades[product.id] || "95%+ (Super)";
              const activeGradeObj =
                product.grades.find((g) => g.tier === currentGradeTier) || product.grades[2];

              const whatsappMessage = `Hi, I'm interested in ${product.name}, ${currentGradeTier} grade — please share your best price.`;

              return (
                <ScrollReveal key={product.id} animation="fade-up" delay={idx * 100}>
                  <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Product Image */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#B8934A]/30 shadow-md bg-[#0A1B15] group">
                        <MediaWithFallback
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          fallbackIcon="🥜"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 text-[#D4B56A] backdrop-blur-md border border-white/20">
                            HS: {product.hsCode}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1F4A3D]/90 text-white backdrop-blur-md">
                            {product.badge}
                          </span>
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                          <span className="text-[11px] font-semibold text-white/90">
                            {product.category} · {product.form}
                          </span>
                        </div>
                      </div>

                      {/* Origin & Drying Specs */}
                      <div className="mt-4 p-4 rounded-2xl bg-[#FAFAF8] border border-gray-200 text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 font-medium">Sourcing Origins:</span>
                          <span className="font-semibold text-[#1F4A3D] text-right">
                            {product.origins}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 font-medium">Processing Method:</span>
                          <span className="font-semibold text-[#1F4A3D]">
                            {product.drying}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Details & Grade Selector */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF3E7] text-[#8A6A2E] border border-[#B8934A]/30 mb-2">
                          {product.category} · Standard MOQ: 10 Tons
                        </span>
                        <h2
                          className="text-2xl sm:text-3xl font-bold text-[#1F4A3D] mb-3"
                          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                        >
                          {product.name}
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                          {product.description}
                        </p>

                        {/* Grade Selector Tabs */}
                        <div className="space-y-3">
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                            Select Grade Tier for Quotation:
                          </label>
                          <div className="grid grid-cols-3 gap-2.5">
                            {product.grades.map((grade) => {
                              const isSelected = currentGradeTier === grade.tier;
                              return (
                                <button
                                  key={grade.tier}
                                  onClick={() => handleGradeSelect(product.id, grade.tier)}
                                  className={`p-3 rounded-2xl border text-left transition-all duration-200 ${
                                    isSelected
                                      ? "bg-[#1F4A3D] text-white border-[#1F4A3D] shadow-md ring-2 ring-[#B8934A]/40"
                                      : "bg-white text-gray-800 border-gray-200 hover:border-[#B8934A]/40"
                                  }`}
                                >
                                  <span className={`block font-bold text-xs sm:text-sm ${isSelected ? "text-[#EBD095]" : "text-[#1F4A3D]"}`}>
                                    {grade.tier}
                                  </span>
                                  <span className={`block text-[10px] mt-0.5 line-clamp-1 ${isSelected ? "text-white/80" : "text-gray-500"}`}>
                                    {grade.purity}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Active Grade Tier Details Box */}
                        <div className="mt-4 p-4 rounded-2xl bg-[#FAF3E7] border border-[#B8934A]/25 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#1F4A3D]">
                              Selected Tier: {activeGradeObj.tier} ({activeGradeObj.purity})
                            </span>
                            <span className="text-[10px] text-[#8A6A2E] font-semibold uppercase">
                              COA Verified
                            </span>
                          </div>
                          <p className="text-gray-700">{activeGradeObj.description}</p>
                          <p className="text-[11px] text-gray-500 pt-1">
                            <span className="font-semibold text-gray-700">Best For:</span> {activeGradeObj.application}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons: WhatsApp First + Basket + RFQ */}
                      <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                        {/* Primary WhatsApp Deep Link (Part 7a) */}
                        <a
                          href={`https://wa.me/918839966253?text=${encodeURIComponent(whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary !py-3 !px-6 text-xs sm:text-sm flex items-center justify-center gap-2 group flex-1 sm:flex-initial shadow-md"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                          </svg>
                          <span>Get WhatsApp Quote</span>
                        </a>

                        {/* Add to Basket */}
                        <AddToInquiryButton
                          id={`${product.id}-${currentGradeTier.replace(/[^a-zA-Z0-9]/g, "")}`}
                          name={`${product.name} (${currentGradeTier})`}
                          category={product.category}
                          origin={product.origins}
                          purity={`Grade ${currentGradeTier}`}
                          className="!py-3 !px-5 text-xs"
                        />

                        {/* Sample Request */}
                        <Link
                          href={`/contact?sample=${encodeURIComponent(`${product.name} - ${currentGradeTier}`)}`}
                          className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#1F4A3D] hover:text-[#B8934A] px-3 py-3"
                        >
                          <span>Request Sample Lot</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="py-20 lg:py-28 bg-[#0F2922] text-white text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Need Custom Grade Sorting or <span className="gold-gradient-text">Drum Roasting?</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              We accommodate institutional contracts, specialized moisture tolerances, and custom industrial packaging at our Indore facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base">
                Submit Official RFQ Inquiry
              </Link>
              <a
                href="https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20discuss%20bulk%20areca%20nut%20supply%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-emerald-400/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-white font-semibold transition-all duration-300 text-base"
              >
                <span>WhatsApp Operations Desk</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
