"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RegionData {
  id: string;
  name: string;
  badge: string;
  volume: string;
  countries: string;
  ports: string;
  transitTime: string;
  topCommodities: string[];
  certificationsNeeded: string[];
  description: string;
  pinCoordinates: { x: number; y: number };
}

const regions: RegionData[] = [
  {
    id: "middle-east",
    name: "Middle East & GCC",
    badge: "Primary Export Corridor",
    volume: "180+ MT / Year",
    countries: "UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain",
    ports: "Jebel Ali (Dubai), Dammam, Jeddah, Sohar, Hamad",
    transitTime: "4 - 7 Days via Nhava Sheva (JNPT) / Mundra",
    topCommodities: ["Cumin Seeds 99.5%", "Green Cardamom", "Cloves", "Hulled Sesame Seeds", "Black Pepper"],
    certificationsNeeded: ["Phytosanitary Certificate", "Certificate of Origin", "Halal Compliant", "COA"],
    description:
      "Our largest continuous export destination. We provide direct containerized consignments (20ft FCL & LCL) with customized Arabic & English bilingual labeling.",
    pinCoordinates: { x: 58, y: 44 },
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    badge: "High Growth Market",
    volume: "120+ MT / Year",
    countries: "Malaysia, Singapore, Indonesia, Vietnam, Thailand",
    ports: "Port Klang, Singapore, Tanjung Priok, Cat Lai",
    transitTime: "8 - 12 Days from Western Ports",
    topCommodities: ["Non-GMO Yellow Soybeans", "Yellow Corn/Maize", "Turmeric Fingers", "Coriander Seeds"],
    certificationsNeeded: ["Non-GMO Declaration", "Phytosanitary", "Aflatoxin Test Certificate"],
    description:
      "Serving food processing conglomerates and spice millers across ASEAN nations with strict bulk moisture & grading standards.",
    pinCoordinates: { x: 76, y: 55 },
  },
  {
    id: "europe",
    name: "Europe & United Kingdom",
    badge: "Strict MRL & Quality Standards",
    volume: "90+ MT / Year",
    countries: "Germany, Netherlands, United Kingdom, France, Poland",
    ports: "Rotterdam, Hamburg, Felixstowe, Antwerp",
    transitTime: "18 - 24 Days via Sea Freight",
    topCommodities: ["High Curcumin Turmeric (4%+)", "Sortex Cumin", "Tellicherry Black Pepper", "Drum-Roasted Cumin"],
    certificationsNeeded: ["EU Pesticide MRL Compliance", "Microbiological Lab Test", "Certificate of Origin"],
    description:
      "Fully compliant with European Union Maximum Residue Limits (MRLs), aflatoxin thresholds, and heavy metal testing.",
    pinCoordinates: { x: 48, y: 28 },
  },
  {
    id: "north-america",
    name: "North America",
    badge: "B2B Bulk & Foodservice",
    volume: "70+ MT / Year",
    countries: "United States, Canada",
    ports: "New York, Houston, Long Beach, Vancouver, Montreal",
    transitTime: "28 - 35 Days Container Shipping",
    topCommodities: ["Single-Origin Ground Spices", "Garam Masala Blends", "Roasted Spices", "Sesame Seeds"],
    certificationsNeeded: ["US FDA Registered Standards", "Bacteriological Testing", "Tamper-Evident Packaging"],
    description:
      "Supplying commercial food manufacturing plants and ethnic grocery distributor chains across major US and Canadian metropolitan hubs.",
    pinCoordinates: { x: 22, y: 34 },
  },
  {
    id: "africa-domestic",
    name: "Africa & Pan-India Network",
    badge: "Regional & Domestic Trade",
    volume: "100+ MT / Year",
    countries: "Kenya, Nigeria, South Africa & 15+ Indian States",
    ports: "Mombasa, Lagos, Durban, Inland Mandi Hubs",
    transitTime: "12 - 16 Days (Africa) / 24-48h Domestic Dispatch",
    topCommodities: ["Sharbati Wheat", "Soybeans", "Whole Spices", "Chickpeas (Kabuli Chana)"],
    certificationsNeeded: ["FSSAI License", "GST Invoice", "Phytosanitary for African Ports"],
    description:
      "Direct farm supply chain connecting central India agricultural mandis to pan-India wholesale networks and expanding East & West African ports.",
    pinCoordinates: { x: 54, y: 60 },
  },
];

export default function InteractiveGlobalMap() {
  const [activeRegionId, setActiveRegionId] = useState<string>("middle-east");

  const activeRegion =
    regions.find((r) => r.id === activeRegionId) || regions[0];

  return (
    <div className="space-y-8">
      {/* Region Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {regions.map((region) => {
          const isSelected = region.id === activeRegionId;
          return (
            <button
              key={region.id}
              onClick={() => setActiveRegionId(region.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                isSelected
                  ? "bg-[#1F4A3D] text-white shadow-lg shadow-[#1F4A3D]/20 scale-105 border border-[#B8934A]"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isSelected ? "bg-[#B8934A] animate-ping" : "bg-gray-300"
                }`}
              />
              <span>{region.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Map & Details Card */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Vector World Map Graphic with Active Hotspots */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#0F2F27] via-[#163D31] to-[#0A1B15] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl border border-[#B8934A]/25">
          {/* Ambient Glow */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-[#B8934A]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header info */}
          <div className="relative z-10 mb-4 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4B56A]">
                Interactive Trade Corridors
              </span>
              <h3
                className="text-lg font-bold text-white mt-0.5"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                Indore Origin → Worldwide Ports
              </h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#B8934A]/20 text-[#D4B56A] border border-[#B8934A]/40 font-mono">
              JNPT / Mundra
            </span>
          </div>

          {/* Stylized Vector World Map Container */}
          <div className="relative w-full aspect-[16/9] my-auto bg-white/5 rounded-2xl border border-white/10 p-4 flex items-center justify-center overflow-hidden">
            {/* World Grid Lines */}
            <svg
              viewBox="0 0 100 60"
              className="w-full h-full opacity-40"
              fill="none"
              stroke="#3F7C67"
              strokeWidth="0.3"
            >
              {/* Latitude lines */}
              <line x1="0" y1="15" x2="100" y2="15" strokeDasharray="1 1" />
              <line x1="0" y1="30" x2="100" y2="30" />
              <line x1="0" y1="45" x2="100" y2="45" strokeDasharray="1 1" />
              {/* Longitude lines */}
              <line x1="25" y1="0" x2="25" y2="60" strokeDasharray="1 1" />
              <line x1="50" y1="0" x2="50" y2="60" />
              <line x1="75" y1="0" x2="75" y2="60" strokeDasharray="1 1" />

              {/* Simplified World Continents Silhouette Outlines */}
              {/* North America */}
              <path
                d="M15 15 Q22 12, 28 18 Q26 26, 22 34 Q18 30, 15 24 Z"
                fill="#3F7C67"
                fillOpacity="0.25"
                stroke="#3F7C67"
                strokeWidth="0.5"
              />
              {/* South America */}
              <path
                d="M24 35 Q30 36, 28 48 Q24 54, 22 45 Z"
                fill="#3F7C67"
                fillOpacity="0.25"
                stroke="#3F7C67"
                strokeWidth="0.5"
              />
              {/* Europe */}
              <path
                d="M44 14 Q52 12, 54 22 Q48 24, 44 20 Z"
                fill="#3F7C67"
                fillOpacity="0.25"
                stroke="#3F7C67"
                strokeWidth="0.5"
              />
              {/* Africa */}
              <path
                d="M46 25 Q56 25, 54 44 Q48 50, 44 35 Z"
                fill="#3F7C67"
                fillOpacity="0.25"
                stroke="#3F7C67"
                strokeWidth="0.5"
              />
              {/* Asia & India */}
              <path
                d="M55 14 Q78 12, 82 28 Q74 42, 60 30 Q56 20, 55 14 Z"
                fill="#3F7C67"
                fillOpacity="0.3"
                stroke="#3F7C67"
                strokeWidth="0.5"
              />
              {/* Australia */}
              <path
                d="M78 44 Q88 42, 86 52 Q80 54, 78 48 Z"
                fill="#3F7C67"
                fillOpacity="0.25"
                stroke="#3F7C67"
                strokeWidth="0.5"
              />

              {/* Origin Hub (Indore, India) with radiating trade rings */}
              <circle cx="63" cy="28" r="1.5" fill="#FAF3E7" />
              <circle cx="63" cy="28" r="4" stroke="#D4B56A" strokeWidth="0.4" strokeDasharray="1 1" />
            </svg>

            {/* Interactive Pins on Map */}
            {regions.map((reg) => {
              const isSelected = reg.id === activeRegionId;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegionId(reg.id)}
                  style={{
                    left: `${reg.pinCoordinates.x}%`,
                    top: `${reg.pinCoordinates.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  aria-label={`Select region: ${reg.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="absolute w-8 h-8 rounded-full bg-[#B8934A]/40 animate-ping" />
                    )}
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#D4B56A] ring-4 ring-[#B8934A]/50 scale-125"
                          : "bg-white/80 hover:bg-[#B8934A] hover:scale-110"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1F4A3D]" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Note */}
          <p className="text-[11px] text-white/50 mt-3 text-center">
            Click any trade hotspot or region tab above to view custom logistics & commodity details.
          </p>
        </div>

        {/* Right: Dynamic Regional Intelligence Panel */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 shadow-xl flex flex-col justify-between">
          <div className="space-y-5">
            {/* Header */}
            <div className="border-b border-gray-100 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8934A]">
                  {activeRegion.badge}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1F4A3D]/5 text-[#1F4A3D]">
                  Annual Volume: {activeRegion.volume}
                </span>
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-[#1F4A3D]"
                style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              >
                {activeRegion.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                Key Markets: {activeRegion.countries}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {activeRegion.description}
            </p>

            {/* Logistics Specs Grid */}
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <span className="block text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
                  Discharge Ports
                </span>
                <span className="block font-medium text-gray-900 mt-0.5">
                  {activeRegion.ports}
                </span>
              </div>

              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                <span className="block text-gray-400 font-semibold uppercase tracking-wider text-[10px]">
                  Estimated Transit Time
                </span>
                <span className="block font-medium text-gray-900 mt-0.5">
                  {activeRegion.transitTime}
                </span>
              </div>
            </div>

            {/* Top Commodities Demanded */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">
                Top Commodities Supplied:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeRegion.topCommodities.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg text-xs bg-[#FAF3E7] text-[#8A6A2E] border border-[#B8934A]/25 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Required Documentation */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">
                Standard Export Documents Provided:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeRegion.certificationsNeeded.map((doc) => (
                  <span
                    key={doc}
                    className="px-2.5 py-1 rounded-lg text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium flex items-center gap-1"
                  >
                    <span>✓</span>
                    <span>{doc}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/contact?region=${encodeURIComponent(activeRegion.name)}`}
              className="btn-primary text-xs w-full sm:w-auto !py-3 !px-6 group"
            >
              <span>Request Quote for {activeRegion.name}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/products"
              className="text-xs text-gray-500 hover:text-[#1F4A3D] font-semibold"
            >
              Browse Catalogue →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
