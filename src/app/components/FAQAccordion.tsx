"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  category: "all" | "export" | "quality" | "logistics" | "sampling";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "export",
    question: "What is the Minimum Order Quantity (MOQ) for export shipments?",
    answer:
      "Our standard export MOQ is 500 kg per individual spice category. For full container dispatches, we support 20ft FCL (~18 Metric Tons) and 40ft FCL (~26 Metric Tons), as well as consolidated LCL cargo for multi-product test orders.",
  },
  {
    id: "faq-2",
    category: "export",
    question: "Which ports do you dispatch export containers from?",
    answer:
      "Our primary shipping gateways are Nhava Sheva (JNPT, Mumbai) and Mundra Port (Gujarat). From our central Indore facility, sealed container trucks reach western Indian ports within 24 to 36 hours for swift vessel loading.",
  },
  {
    id: "faq-3",
    category: "quality",
    question: "How do you guarantee 99.5%+ Sortex purity and moisture control?",
    answer:
      "All processing happens in-house at our Pologround Industrial Estate facility. We deploy multi-stage vibratory destoners and high-resolution optical sortex color sorters. Moisture is digitally verified below 10-12% baseline to prevent microbial and aflatoxin risk.",
  },
  {
    id: "faq-4",
    category: "quality",
    question: "What laboratory certificates and compliance documentation do you provide?",
    answer:
      "Every shipment is accompanied by a Certificate of Analysis (COA) specifying volatile oil percentage, moisture, and purity. We also provide Phytosanitary Certificates, Certificate of Origin (COO), and facilitate third-party inspections (SGS, Intertek, Geo-Chem) on request.",
  },
  {
    id: "faq-5",
    category: "sampling",
    question: "Can we request evaluation samples before issuing a bulk Purchase Order?",
    answer:
      "Yes. We dispatch 100g to 500g laboratory sample packs for approved importers and manufacturing buyers. Samples can be requested directly via our catalogue or inquiry form.",
  },
  {
    id: "faq-6",
    category: "sampling",
    question: "Do you offer private labelling, custom drum-roasting, and retail packaging?",
    answer:
      "Absolutely. Our packaging lines handle 100g – 1kg nitrogen-flushed barrier pouches with custom brand artwork, 5kg – 10kg cartons, and 25kg / 50kg multi-wall export sacks with custom buyer stencilling.",
  },
  {
    id: "faq-7",
    category: "logistics",
    question: "What are your standard payment terms for international buyers?",
    answer:
      "We typically work on Irrevocable Letter of Credit (L/C at sight) or advance Telegraphic Transfer (T/T with balance against copy of Bill of Lading). Custom credit arrangements can be established for long-term contract partners.",
  },
];

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-3": true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqs.filter(
    (f) => activeCategory === "all" || f.category === activeCategory
  );

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "all", label: "All Questions" },
          { id: "export", label: "Export & MOQs" },
          { id: "quality", label: "Quality & Testing" },
          { id: "logistics", label: "Shipping & Ports" },
          { id: "sampling", label: "Samples & Private Label" },
        ].map((tab) => {
          const isSelected = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                isSelected
                  ? "bg-[#1F4A3D] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openIds[faq.id];

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                isOpen
                  ? "border-[#B8934A]/50 shadow-md ring-1 ring-[#B8934A]/20"
                  : "border-gray-200 hover:border-gray-300 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span
                  className="font-bold text-[#1F4A3D] text-base sm:text-lg leading-snug"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#1F4A3D] text-[#D4B56A] rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>

              {/* Collapsible Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100 px-6 pb-6" : "max-h-0 opacity-0 px-6 pb-0 pointer-events-none"
                }`}
              >
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
