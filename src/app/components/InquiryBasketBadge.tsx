"use client";

import React from "react";
import { useInquiry } from "../context/InquiryContext";

export default function InquiryBasketBadge({ className = "" }: { className?: string }) {
  const { totalItems, openDrawer } = useInquiry();

  return (
    <button
      onClick={openDrawer}
      aria-label={`Open Inquiry Basket (${totalItems} items)`}
      className={`relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#B8934A]/40 bg-white/10 hover:bg-[#B8934A] text-white transition-all duration-300 text-xs font-semibold group ${className}`}
    >
      <span className="text-base group-hover:scale-110 transition-transform">📋</span>
      <span className="hidden sm:inline">RFQ Basket</span>
      {totalItems > 0 && (
        <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#B8934A] text-[#1F4A3D] text-[10px] font-bold shadow-md group-hover:bg-white group-hover:text-[#1F4A3D] animate-scale-in">
          {totalItems}
        </span>
      )}
    </button>
  );
}
