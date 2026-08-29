"use client";

import React from "react";
import { useCountUp } from "../hooks/useCountUp";

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
  formatNumber?: boolean;
}

function StatItem({
  end,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  duration = 2000,
  formatNumber = false,
}: StatItemProps) {
  const { count, ref } = useCountUp(end, duration);

  const displayCount = formatNumber ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="text-center group px-4">
      <div
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F4A3D] group-hover:text-[#B8934A] transition-colors duration-300 tracking-tight"
        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
      >
        <span>{prefix}</span>
        <span>{displayCount}</span>
        <span className="text-[#B8934A]">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-800 font-bold mt-2">
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-gray-500 mt-1 font-medium">{sublabel}</div>
      )}
    </div>
  );
}

export default function StatCounters() {
  return (
    <section className="bg-[#FAF3E7] border-y border-[#B8934A]/25 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#B8934A]/25">
          {/* Stat 1 */}
          <div className="pt-4 md:pt-0">
            <StatItem
              end={30}
              suffix="+"
              label="Years of Legacy & Experience"
              sublabel="Commodity Trading Est. 1996"
              duration={1800}
            />
          </div>

          {/* Stat 2 */}
          <div className="pt-8 md:pt-0">
            <StatItem
              end={100}
              suffix="+"
              label="Institutional Clients, Pan-India"
              sublabel="Food Manufacturers, Wholesalers & Distributors"
              duration={2000}
            />
          </div>

          {/* Stat 3 */}
          <div className="pt-8 md:pt-0">
            <StatItem
              end={500}
              suffix="M+ Kg"
              label="Traded Volume, Till Date & Counting"
              sublabel="High-Volume Supply Chain Stability"
              duration={2200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
