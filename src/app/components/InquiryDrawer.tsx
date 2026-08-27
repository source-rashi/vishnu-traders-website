"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useInquiry } from "../context/InquiryContext";

const quantityOptions = [
  "Sample Pack (100g - 500g)",
  "500 kg (Standard MOQ)",
  "1 - 2 Metric Tons",
  "5 Metric Tons",
  "10 Metric Tons",
  "20ft FCL Container (~18 MT)",
  "40ft FCL Container (~26 MT)",
  "Custom / Contract Quantity",
];

export default function InquiryDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateItemQuantity, clearInquiry } =
    useInquiry();
  const router = useRouter();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeDrawer]);

  const handleProceed = () => {
    if (items.length === 0) return;
    closeDrawer();

    // Format list into URL encoded string for contact message pre-fill
    const summary = items
      .map((item, idx) => `${idx + 1}. ${item.name} (${item.category}) — Target: ${item.targetQuantity || "Standard MOQ"}`)
      .join("\n");

    const query = encodeURIComponent(
      `Hello Vishnu Traders Export Desk,\n\nI would like to request an official FOB/CIF quote for the following items:\n\n${summary}\n\nPlease share current crop pricing, lab specification sheets, and earliest dispatch timeline.`
    );

    router.push(`/contact?inquiry_prefill=${query}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-lg bg-white shadow-2xl z-10 flex flex-col h-full overflow-hidden border-l border-[#B8934A]/20 animate-slide-right">
        {/* Header */}
        <div className="bg-[#1F4A3D] text-white p-6 flex items-center justify-between border-b border-[#B8934A]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8934A]/20 border border-[#B8934A]/40 flex items-center justify-center text-lg">
              📋
            </div>
            <div>
              <h2
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Export Inquiry Basket
              </h2>
              <p className="text-xs text-[#D4B56A]">
                {items.length} {items.length === 1 ? "commodity" : "commodities"} selected for quotation
              </p>
            </div>
          </div>
          <button
            onClick={closeDrawer}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            aria-label="Close Inquiry Drawer"
          >
            ✕
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-[#FAF3E7] px-6 py-3 border-b border-[#B8934A]/20 flex items-center gap-2 text-xs text-[#8A6A2E]">
          <span className="font-semibold">B2B Trade Mode:</span> Add commodities, select target quantities, and send one combined inquiry directly to Harsh Agrawal.
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <span className="text-5xl block">📦</span>
              <h3 className="text-lg font-bold text-[#1F4A3D]">Your Inquiry Basket is Empty</h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Explore our export catalogue and click &ldquo;Add to Inquiry&rdquo; on whole spices, powders, or commodities.
              </p>
              <Link
                href="/products"
                onClick={closeDrawer}
                className="btn-primary text-xs !py-2.5 !px-6 inline-block mt-2"
              >
                Browse Export Products
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-[#B8934A]/40 transition-colors space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8934A]">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-[#1F4A3D] text-base">{item.name}</h4>
                    {item.origin && (
                      <p className="text-[11px] text-gray-400">Origin: {item.origin}</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 text-xs p-1 transition-colors"
                    title="Remove item"
                  >
                    Remove
                  </button>
                </div>

                {/* Target Quantity Selector */}
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    Target Inquiry Volume:
                  </label>
                  <select
                    value={item.targetQuantity || quantityOptions[1]}
                    onChange={(e) => updateItemQuantity(item.id, e.target.value)}
                    className="w-full text-xs rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B8934A]/30 focus:border-[#B8934A] transition-all"
                  >
                    {quantityOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-[#FAFAF8] space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Total Selected Items: {items.length}</span>
              <button
                onClick={clearInquiry}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Clear All
              </button>
            </div>
            <button
              onClick={handleProceed}
              className="btn-primary w-full text-sm font-semibold !py-3.5 flex items-center justify-center gap-2"
            >
              <span>Proceed to Official RFQ Quote</span>
              <span>→</span>
            </button>
            <p className="text-[10px] text-center text-gray-400">
              Pre-fills your selected items into the official contact form.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
