"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  category: "all" | "products" | "pricing" | "logistics";
  question: string;
  answer: string;
  iconType: "product" | "pricing" | "logistics";
  isFlagged?: boolean;
  flagNotice?: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "products",
    question: "What grades and forms of areca nut do you supply?",
    answer:
      "We supply Raw and Roasted Areca Nut, in both Whole and Split forms, across three grade tiers: 80–85%, 90–95%, and 95%+ (Super).",
    iconType: "product",
  },
  {
    id: "faq-2",
    category: "products",
    question: "What moisture and purity standards does your areca nut meet?",
    answer:
      "Every batch is screened in-house for moisture, size, and purity before dispatch, backed by a Certificate of Analysis (COA). Full moisture and purity specifications are shared with each quote.",
    iconType: "product",
  },
  {
    id: "faq-3",
    category: "products",
    question: "Can raw and roasted areca nut be combined in a single order?",
    answer:
      "In most cases, yes — raw and roasted areca nut can be combined within a single institutional order. Confirm your exact mix when requesting a quote.",
    iconType: "product",
    isFlagged: true,
    flagNotice:
      "⚠️ Note: Mixed-line consolidation to be confirmed with Harsh Agrawal based on active batch schedules.",
  },
  {
    id: "faq-4",
    category: "products",
    question: "Do you provide a Certificate of Analysis (COA) with every shipment?",
    answer:
      "Yes — every batch is accompanied by a Certificate of Analysis (COA) confirming quality and specification compliance.",
    iconType: "product",
  },
  {
    id: "faq-5",
    category: "logistics",
    question: "What is your minimum order quantity for bulk or institutional buyers?",
    answer:
      "Our minimum order quantity for bulk and institutional buyers is 10 tons.",
    iconType: "logistics",
  },
  {
    id: "faq-6",
    category: "products",
    question: "Can you provide a sample lot before a full order?",
    answer:
      "Yes — sample lots are available on request before committing to a full order. Use the 'Request Sample Lot' option to get started.",
    iconType: "product",
  },
  {
    id: "faq-7",
    category: "logistics",
    question: "Do you supply manufacturers only, or also wholesalers and distributors?",
    answer:
      "We supply manufacturers, wholesalers, and distributors across India, in addition to institutional and international buyers.",
    iconType: "logistics",
  },
  {
    id: "faq-8",
    category: "logistics",
    question: "How is your areca nut sourced — directly from farmers, from trading partners, or both?",
    answer:
      "We source directly from farmers and trusted trading partners, both overseas — across Indonesia, Thailand, Myanmar, and Sri Lanka — and domestically across Kerala and Karnataka.",
    iconType: "logistics",
  },
  {
    id: "faq-9",
    category: "products",
    question: "What quality checks does each batch go through before dispatch?",
    answer:
      "Each batch passes through in-house moisture, size, and purity grading, followed by batch-level laboratory testing and a Certificate of Analysis (COA) before dispatch.",
    iconType: "product",
  },
  {
    id: "faq-10",
    category: "pricing",
    question: "What is your current price for areca nut?",
    answer:
      "Prices vary by grade, quantity, and current market conditions — message us on WhatsApp for a fast, accurate quote.",
    iconType: "pricing",
  },
  {
    id: "faq-11",
    category: "pricing",
    question: "How quickly can I get a quote?",
    answer:
      "Our team responds to WhatsApp inquiries the same business day with current pricing and availability.",
    iconType: "pricing",
  },
];

function FAQIcon({ type }: { type: "product" | "pricing" | "logistics" }) {
  if (type === "pricing") {
    return (
      <svg className="w-5 h-5 text-[#B8934A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );
  }
  if (type === "logistics") {
    return (
      <svg className="w-5 h-5 text-[#1F4A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75M8.25 21h8.25" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-[#8A6A2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  );
}

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-10": true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqs.filter(
    (f) => activeCategory === "all" || f.category === activeCategory
  );

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "all", label: "All Questions" },
          { id: "products", label: "Grades & Quality (📦)" },
          { id: "pricing", label: "Pricing & WhatsApp Quotes (💰)" },
          { id: "logistics", label: "MOQ & Pan-India Sourcing (🚚)" },
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

      {/* Accordion Items */}
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
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF3E7] border border-[#B8934A]/20 flex items-center justify-center shrink-0">
                    <FAQIcon type={faq.iconType} />
                  </div>
                  <span
                    className="font-bold text-[#1F4A3D] text-base sm:text-lg leading-snug"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                  >
                    {faq.question}
                  </span>
                </div>

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
                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.flagNotice && (
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 font-medium leading-relaxed">
                      {faq.flagNotice}
                    </div>
                  )}
                  {faq.category === "pricing" && (
                    <div className="pt-2">
                      <a
                        href="https://wa.me/918839966253?text=Hi%2C%20I%27d%20like%20to%20request%20current%20areca%20nut%20pricing%20and%20availability."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#1F4A3D] hover:text-[#B8934A] transition-colors"
                      >
                        <span>Message on WhatsApp for Immediate Pricing Desk</span>
                        <span>→</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
