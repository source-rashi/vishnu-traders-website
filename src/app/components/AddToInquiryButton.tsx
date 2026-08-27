"use client";

import React from "react";
import { useInquiry } from "../context/InquiryContext";

interface AddToInquiryButtonProps {
  id: string;
  name: string;
  category: string;
  origin?: string;
  purity?: string;
  className?: string;
  variant?: "primary" | "secondary" | "icon-only";
}

export default function AddToInquiryButton({
  id,
  name,
  category,
  origin,
  purity,
  className = "",
  variant = "primary",
}: AddToInquiryButtonProps) {
  const { addItem, removeItem, isInInquiry } = useInquiry();
  const added = isInInquiry(id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (added) {
      removeItem(id);
    } else {
      addItem({ id, name, category, origin, purity });
    }
  };

  if (variant === "icon-only") {
    return (
      <button
        onClick={handleClick}
        title={added ? "Remove from RFQ Basket" : "Add to RFQ Basket"}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          added
            ? "bg-[#B8934A] text-white"
            : "bg-gray-100 text-gray-600 hover:bg-[#1F4A3D] hover:text-white"
        } ${className}`}
      >
        {added ? "✓" : "+"}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
        added
          ? "bg-[#1F4A3D] text-[#D4B56A] border border-[#B8934A]/50 shadow-sm"
          : "bg-transparent text-[#1F4A3D] hover:bg-[#1F4A3D] hover:text-white border border-[#1F4A3D]/20 hover:border-[#1F4A3D]"
      } ${className}`}
    >
      <span>{added ? "✓ In RFQ Basket" : "+ Add to Inquiry"}</span>
    </button>
  );
}
