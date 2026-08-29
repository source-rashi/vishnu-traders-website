"use client";

import React, { useState } from "react";
import MediaWithFallback from "./MediaWithFallback";

interface StepDetail {
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  keyParameters: { label: string; value: string }[];
  equipmentUsed: string;
  qualityCheck: string;
  image: string;
  icon: string;
}

const processingSteps: StepDetail[] = [
  {
    step: "01",
    title: "Origin Procurement",
    subtitle: "Direct Global & Domestic Intake",
    summary:
      "Direct procurement relationships across prime overseas growing nations (Indonesia, Thailand, Myanmar, Sri Lanka) and domestic South Indian producing regions (Kerala & Karnataka). Raw nuts undergo immediate intake moisture inspection, foreign matter screening, and lot identification.",
    keyParameters: [
      { label: "Intake Moisture", value: "Raw 10–12% baseline" },
      { label: "Origin Sourcing", value: "Global & Domestic Mandis" },
      { label: "Traceability", value: "Origin Lot Tagging" },
    ],
    equipmentUsed: "Digital Calibrated Moisture Meters, Intake Weighbridges, Sampling Probes",
    qualityCheck: "Visual density verification, foreign matter screening (≤1%), and intake moisture logging.",
    image: "/images/process/sourcing.jpg",
    icon: "🌱",
  },
  {
    step: "02",
    title: "Grading & Cutting",
    subtitle: "Moisture, Caliber Screening & Split Cutting",
    summary:
      "Every batch passes through in-house sizing, density separation, and purity grading to categorize nuts into standardized tiers (80–85%, 90–95%, and 95%+ Super). Limited in-house cutting capability handles precision sectioning for select split varieties with uniform cross-section.",
    keyParameters: [
      { label: "Purity & Caliber", value: "80–85%, 90–95%, 95%+ Super" },
      { label: "Broken Rate", value: "≤ 3–5% threshold" },
      { label: "Split Cutting", value: "Clean In-House Sectioning" },
    ],
    equipmentUsed: "Rotary Size Sifters, Gravity Separator Tables, Precision Areca Nut Cutters",
    qualityCheck: "Caliber sizing checks, broken rate threshold audit (≤3–5%), and cut uniformity inspection.",
    image: "/images/process/grading.jpg",
    icon: "⚙️",
  },
  {
    step: "03",
    title: "Controlled Roasting",
    subtitle: "Thermal Drum Roastery (Roasted Line)",
    summary:
      "For our roasted line, whole and split areca nuts are roasted in temperature-controlled drums under calibrated thermal profiles. Monitored heat curves ensure deep, even toasting without scorching or bitter core notes, reducing moisture down to ≤10% (≤5% dry spec).",
    keyParameters: [
      { label: "Heat Profiles", value: "Monitored Batch Roasting" },
      { label: "Moisture Post-Roast", value: "≤ 10% (≤ 5% spec)" },
      { label: "Texture & Aroma", value: "Crisp & Evenly Toasted" },
    ],
    equipmentUsed: "Thermostatically Controlled LPG Indirect-Fired Stainless Drum Roasters, Cooling Trays",
    qualityCheck: "Coloration uniformity, roast degree calibration, and residual moisture verification.",
    image: "/images/process/roasting.jpg",
    icon: "🔥",
  },
  {
    step: "04",
    title: "Quality Control & Lab Testing",
    subtitle: "Batch-Level Certificate of Analysis (COA)",
    summary:
      "Before clearance, every batch undergoes thorough quality control and laboratory analysis. Moisture content, purity percentages, and absence of external contaminants are verified, generating an official Certificate of Analysis (COA) for client records.",
    keyParameters: [
      { label: "Lab Documentation", value: "COA Issued Per Batch" },
      { label: "Purity Check", value: "Zero Adulteration" },
      { label: "Compliance", value: "FSSAI & Trade Standards" },
    ],
    equipmentUsed: "Laboratory Moisture Analyzers, Digital Calipers, Precision Analytical Balances",
    qualityCheck: "Mandatory Certificate of Analysis (COA) generation before consignment release.",
    image: "/images/process/sorting.jpg",
    icon: "🔬",
  },
  {
    step: "05",
    title: "Packing & Dispatch",
    subtitle: "Export-Grade Bagging & Nationwide Freight",
    summary:
      "Finished areca nuts are packed into 50–80kg industrial-grade multi-layer bags with clear batch labeling. In-house logistics handle local movement, while nationwide containerized delivery is coordinated through trusted logistics partners.",
    keyParameters: [
      { label: "Packaging Format", value: "50–80 kg Export Bags" },
      { label: "Dispatch Scope", value: "Pan-India & Local Logistics" },
      { label: "Minimum Order", value: "10 Tons MOQ" },
    ],
    equipmentUsed: "Industrial Heavy-Duty Bag Stitchers, Platform Checkweighers, Pallet Stacking Racks",
    qualityCheck: "Bag seal strength check, gross/net weight verification, and transport lashing inspection.",
    image: "/images/process/packaging.jpg",
    icon: "📦",
  },
];

export default function InteractiveProcessingFlow() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const activeStep = processingSteps[activeStepIdx];

  return (
    <div className="space-y-10">
      {/* Step Navigation Bar */}
      <div className="relative">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 no-scrollbar">
          {processingSteps.map((s, idx) => {
            const isActive = idx === activeStepIdx;
            const isPast = idx < activeStepIdx;

            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIdx(idx)}
                className="flex flex-col items-center min-w-[100px] sm:min-w-[140px] group focus:outline-none"
                aria-label={`Step ${s.step}: ${s.title}`}
              >
                {/* Step Circle */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-300 shadow-md ${
                    isActive
                      ? "bg-[#1F4A3D] text-[#D4B56A] ring-4 ring-[#B8934A]/40 scale-110"
                      : isPast
                      ? "bg-[#FAF3E7] text-[#1F4A3D] border border-[#B8934A]/40"
                      : "bg-white text-gray-400 border border-gray-200 group-hover:border-[#B8934A]/40"
                  }`}
                >
                  <span>{s.icon}</span>
                </div>

                {/* Step Number & Title */}
                <span
                  className={`text-xs font-bold mt-2 transition-colors ${
                    isActive ? "text-[#1F4A3D]" : "text-gray-500 group-hover:text-[#1F4A3D]"
                  }`}
                >
                  Stage {s.step}
                </span>
                <span
                  className={`text-[11px] text-center line-clamp-1 max-w-[120px] hidden sm:block ${
                    isActive ? "text-[#8A6A2E] font-semibold" : "text-gray-400"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detailed Breakdown Panel */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xl grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1F4A3D] text-[#D4B56A]">
                Stage {activeStep.step} of 05
              </span>
              <span className="text-xs font-semibold text-gray-500">
                {activeStep.subtitle}
              </span>
            </div>

            <h3
              className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              {activeStep.title}
            </h3>

            <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
              {activeStep.summary}
            </p>
          </div>

          {/* Technical Specs Metric Strip */}
          <div className="grid sm:grid-cols-3 gap-3">
            {activeStep.keyParameters.map((param) => (
              <div
                key={param.label}
                className="bg-[#FAF3E7] p-3.5 rounded-2xl border border-[#B8934A]/20"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8A6A2E]">
                  {param.label}
                </span>
                <span className="block font-bold text-gray-900 text-xs sm:text-sm mt-0.5">
                  {param.value}
                </span>
              </div>
            ))}
          </div>

          {/* Equipment & Inspection */}
          <div className="space-y-2 pt-4 border-t border-gray-100 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-gray-900 shrink-0">Processing Machinery:</span>
              <span className="text-gray-600">{activeStep.equipmentUsed}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-gray-900 shrink-0">QC Protocol:</span>
              <span className="text-gray-600">{activeStep.qualityCheck}</span>
            </div>
          </div>
        </div>

        {/* Right Visual Photo Card */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="relative rounded-3xl overflow-hidden border border-[#B8934A]/30 shadow-lg h-[280px] sm:h-[340px] lg:h-full min-h-[280px] bg-[#0A1B15] group">
            <MediaWithFallback
              src={activeStep.image}
              alt={activeStep.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              fallbackIcon={activeStep.icon}
              fallbackGradient="from-[#1F4A3D] via-[#3F7C67] to-[#0A1B15]"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 text-[#D4B56A] backdrop-blur-md border border-[#B8934A]/30 shadow-sm">
                Stage {activeStep.step} · {activeStep.icon}
              </span>
              <span className="text-[10px] font-semibold text-white/95 bg-[#1F4A3D]/80 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10 shadow-sm">
                Pologround, Indore
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
              <h4
                className="text-lg font-bold text-white drop-shadow mb-0.5"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                {activeStep.title}
              </h4>
              <p className="text-xs text-white/80 line-clamp-1 drop-shadow-sm">
                {activeStep.subtitle}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF3E7] border border-[#B8934A]/25">
            <button
              onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIdx === 0}
              className="btn-secondary !text-xs !py-2 !px-4 disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous Stage
            </button>
            <span className="text-xs font-bold text-[#1F4A3D]">
              {activeStepIdx + 1} of {processingSteps.length}
            </span>
            <button
              onClick={() =>
                setActiveStepIdx((prev) =>
                  Math.min(processingSteps.length - 1, prev + 1)
                )
              }
              disabled={activeStepIdx === processingSteps.length - 1}
              className="btn-primary !text-xs !py-2 !px-4 disabled:opacity-30"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
