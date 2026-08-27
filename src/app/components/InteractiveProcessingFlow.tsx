"use client";

import React, { useState } from "react";
import Link from "next/link";

interface StepDetail {
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  keyParameters: { label: string; value: string }[];
  equipmentUsed: string;
  qualityCheck: string;
  imagePlaceholder: string;
  icon: string;
}

const processingSteps: StepDetail[] = [
  {
    step: "01",
    title: "Raw Material Sourcing",
    subtitle: "Farm-Origin Mandi Procurement",
    summary:
      "Direct procurement relationships across agricultural hubs in Madhya Pradesh (Guna, Neemuch, Mandsaur, Indore) and Rajasthan. Every incoming batch is inspected at intake for moisture, insect damage, and essential purity.",
    keyParameters: [
      { label: "Intake Moisture Target", value: "< 9.5% - 11.0%" },
      { label: "Origin Regions", value: "MP & Rajasthan Mandis" },
      { label: "Traceability", value: "Farm-Gate Batch ID" },
    ],
    equipmentUsed: "Digital Moisture Analyzers, Sample Probes, Gravity Intake Weighbridges",
    qualityCheck: "Initial sensory aroma evaluation, foreign matter screening, and moisture verification.",
    imagePlaceholder: "/images/processing/step-1-sourcing.jpg",
    icon: "🌿",
  },
  {
    step: "02",
    title: "Pre-Cleaning & Sortex",
    subtitle: "Multi-Stage Optical Separation",
    summary:
      "Vibratory aspirators remove dust, chaff, and light impurities. Heavy destoners eliminate stones and earth particles, followed by high-resolution optical sortex cameras that eject discolored and immature seeds.",
    keyParameters: [
      { label: "Target Purity Grade", value: "99.5% - 99.95% Sortex" },
      { label: "Foreign Matter Limit", value: "< 0.1% max" },
      { label: "Machine Stages", value: "3-Stage Vibratory + Sortex" },
    ],
    equipmentUsed: "Buhler-Type Optical Color Sorters, Vibratory Sieves, Cyclone Dust Extractors",
    qualityCheck: "Continuous optical scan logs, seed count per gram, and destoner discharge verification.",
    imagePlaceholder: "/images/processing/step-2-cleaning.jpg",
    icon: "⚙️",
  },
  {
    step: "03",
    title: "Controlled Drum Roasting",
    subtitle: "Precision Thermal Roastery",
    summary:
      "Precision batch drum roasters with digital thermostatic control evenly roast cumin, coriander, and sesame seeds. Thermal profiles are calibrated to lock in natural essential oils without burning or bitterness.",
    keyParameters: [
      { label: "Roasting Temp Range", value: "110°C - 145°C (Batch-specific)" },
      { label: "Moisture Post-Roast", value: "< 6.0% for crispness" },
      { label: "Aroma Activation", value: "100% Volatile Oil Retention" },
    ],
    equipmentUsed: "LPG Indirect-Fired Stainless Drum Roasters with Automated Cooling Trays",
    qualityCheck: "Agtron color degree calibration, aroma punch testing, and moisture analysis.",
    imagePlaceholder: "/images/processing/step-3-roasting.jpg",
    icon: "🔥",
  },
  {
    step: "04",
    title: "Grading & QC Lab Checks",
    subtitle: "Standardized Laboratory Parameters",
    summary:
      "In-house sampling checks for volatile oil percentages, microbial safety, granulation mesh size for powders, and absence of synthetic additives or colorants.",
    keyParameters: [
      { label: "Volatile Oil Check", value: "Meets ASTA / ESA Standards" },
      { label: "Aflatoxin & MRL", value: "Compliant with Destination Regs" },
      { label: "Laboratory Certificate", value: "COA Issued Per Batch" },
    ],
    equipmentUsed: "Clevenger Volatile Oil Distillation Apparatus, Sieve Shakers, Moisture Ovens",
    qualityCheck: "Batch Certificate of Analysis (COA) generation before clearance for packing.",
    imagePlaceholder: "/images/processing/step-4-grading.jpg",
    icon: "🔬",
  },
  {
    step: "05",
    title: "Custom B2B Packaging",
    subtitle: "Nitrogen Flushing & Multi-Wall Sacks",
    summary:
      "Clean-room packaging lines handle formats from 100g consumer nitrogen-flushed barrier pouches up to 25kg multi-wall paper bags and 50kg HDPE woven sacks with customized buyer branding and QR lot codes.",
    keyParameters: [
      { label: "Packaging Formats", value: "100g Pouch to 50kg Export Sacks" },
      { label: "Barrier Protection", value: "Moisture-Proof Poly Liner / Multi-Wall" },
      { label: "Branding", value: "Custom Private Label Available" },
    ],
    equipmentUsed: "Automated Form-Fill-Seal (FFS) Baggers, Heat Sealers, Continuous Bag Stitchers",
    qualityCheck: "Seal integrity inspection, weight checkweigher accuracy (±0.2%), and QR scan verification.",
    imagePlaceholder: "/images/processing/step-5-packaging.jpg",
    icon: "📦",
  },
  {
    step: "06",
    title: "FIFO Warehousing",
    subtitle: "Pologround Industrial Estate, Indore",
    summary:
      "Climate-appropriate palletized storage facilities with strict FIFO inventory control, epoxy sealed floors, fumigation chambers, and automated temperature-humidity telemetry.",
    keyParameters: [
      { label: "Storage Architecture", value: "Pallet Racked & Elevated" },
      { label: "Pest Management", value: "Preventive Non-Chemical & Fumigated" },
      { label: "Dispatch Velocity", value: "Same-Day / Next-Day Container Loading" },
    ],
    equipmentUsed: "Electric Reach Trucks, Dehumidifiers, Digital Climate Loggers",
    qualityCheck: "Weekly moisture equilibrium audits and strict pallet lot traceability.",
    imagePlaceholder: "/images/processing/step-6-warehouse.jpg",
    icon: "🏬",
  },
  {
    step: "07",
    title: "Export Container Dispatch",
    subtitle: "FCL & LCL Port Freight",
    summary:
      "Direct container stuffing with industrial desiccants and cargo lashing. Fast-track phytosanitary inspection and transport via dedicated container trucks to Nhava Sheva (JNPT) and Mundra ports.",
    keyParameters: [
      { label: "Container Types", value: "20ft FCL (~18 MT) / 40ft FCL (~26 MT)" },
      { label: "Port Corridors", value: "Nhava Sheva (JNPT) & Mundra" },
      { label: "Documentation", value: "Phytosanitary, COO, BL, Packing List" },
    ],
    equipmentUsed: "Container Ramps, Heavy Cargo Strapping, High-Capacity Desiccant Bags",
    qualityCheck: "Pre-stuffing container cleanliness inspection, seal verification, and customs clearance.",
    imagePlaceholder: "/images/processing/step-7-export.jpg",
    icon: "🚢",
  },
];

export default function InteractiveProcessingFlow() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const activeStep = processingSteps[activeStepIdx];

  return (
    <div className="space-y-10">
      {/* Step Navigation Bar with Connecting Progress Line */}
      <div className="relative">
        {/* Step Buttons */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 no-scrollbar">
          {processingSteps.map((s, idx) => {
            const isActive = idx === activeStepIdx;
            const isPast = idx < activeStepIdx;

            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIdx(idx)}
                className="flex flex-col items-center min-w-[90px] sm:min-w-[120px] group focus:outline-none"
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
                  className={`text-[10px] text-center line-clamp-1 max-w-[100px] hidden sm:block ${
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
      <div className="rounded-3xl border border-gray-200 bg-white p-8 lg:p-12 shadow-xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1F4A3D] text-[#D4B56A]">
              Stage {activeStep.step} of 07
            </span>
            <span className="text-xs font-semibold text-gray-500">
              {activeStep.subtitle}
            </span>
          </div>

          <h3
            className="text-2xl lg:text-4xl font-bold text-[#1F4A3D]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            {activeStep.title}
          </h3>

          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            {activeStep.summary}
          </p>

          {/* Technical Specs Metric Strip */}
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
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
          <div className="space-y-3 pt-2 border-t border-gray-100 text-xs">
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

        {/* Right Visual / Step Switcher Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#1F4A3D] to-[#0A1B15] rounded-3xl p-8 text-white flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8934A]/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-5xl font-bold text-[#D4B56A]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                {activeStep.step}
              </span>
              <span className="text-4xl">{activeStep.icon}</span>
            </div>
            <h4
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
            >
              Facility Operations
            </h4>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Operated directly by our experienced quality team at R-20 Pologround Industrial Estate, Indore.
            </p>
          </div>

          {/* Navigation Controls inside Card */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIdx === 0}
              className="text-xs font-semibold text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              ← Previous Stage
            </button>
            <button
              onClick={() =>
                setActiveStepIdx((prev) =>
                  Math.min(processingSteps.length - 1, prev + 1)
                )
              }
              disabled={activeStepIdx === processingSteps.length - 1}
              className="btn-primary text-xs !py-2 !px-4 disabled:opacity-30"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
