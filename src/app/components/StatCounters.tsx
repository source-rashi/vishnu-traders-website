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
}

function StatItem({ end, suffix = "", prefix = "", label, sublabel, duration = 2000 }: StatItemProps) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <div ref={ref} className="text-center group">
      <div
        className="text-3xl lg:text-5xl font-bold text-[#1F4A3D] group-hover:text-[#B8934A] transition-colors duration-300"
        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
      >
        <span>{prefix}</span>
        <span>{count}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-wider text-gray-700 font-semibold mt-1">
        {label}
      </div>
      {sublabel && (
        <div className="text-[11px] text-gray-400 mt-0.5">{sublabel}</div>
      )}
    </div>
  );
}

export default function StatCounters() {
  return (
    <section className="bg-[#FAF3E7] border-y border-[#B8934A]/25 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem
            end={1996}
            label="Founded Year"
            sublabel="Indore, Madhya Pradesh"
            duration={1500}
          />
          <StatItem
            end={20}
            suffix="+"
            label="Export Destinations"
            sublabel="Worldwide Port Dispatches"
            duration={2000}
          />
          <StatItem
            end={500}
            suffix="+ MT"
            label="Processed Volume / Yr"
            sublabel="Agricultural Commodities"
            duration={2200}
          />
          <StatItem
            end={100}
            suffix="%"
            label="In-House Custody"
            sublabel="Zero Middlemen Processing"
            duration={1800}
          />
        </div>
      </div>
    </section>
  );
}
