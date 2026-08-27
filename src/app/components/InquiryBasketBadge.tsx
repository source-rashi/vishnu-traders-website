"use client";

import React from "react";
import { useInquiry } from "../context/InquiryContext";

export default function InquiryBasketBadge({ className = "" }: { className?: string }) {
  const { totalItems, openDrawer } = useInquiry();

  return (
    <button
      onClick={openDrawer}
      aria-label={`Open Inquiry Basket (${totalItems} items)`}
      className={`relative inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-2 rounded-full border border-[#B8934A]/60 bg-[#1F4A3D] hover:bg-[#B8934A] text-white transition-all duration-300 text-xs font-semibold group whitespace-nowrap ${className}`}
    >
      <svg className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.25h6m-7.5 0A2.25 2.25 0 0 1 9.75 3h4.5a2.25 2.25 0 0 1 2.25 2.25m-9 0H6.75A2.25 2.25 0 0 0 4.5 7.5v11.25A2.25 2.25 0 0 0 6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25V7.5a2.25 2.25 0 0 0-2.25-2.25H16.5m-7.5 4.5h6m-6 3h6m-6 3h3" />
      </svg>
      <span className="hidden sm:inline">RFQ Basket</span>
      {totalItems > 0 && (
        <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#B8934A] text-[#1F4A3D] text-[10px] font-bold shadow-md group-hover:bg-white group-hover:text-[#1F4A3D] animate-scale-in">
          {totalItems}
        </span>
      )}
    </button>
  );
}
