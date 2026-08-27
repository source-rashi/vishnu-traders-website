"use client";

import React, { useState, useEffect } from "react";

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  caption: string;
  filePath: string;
  fallbackIcon: string;
  gradient: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Optical Sortex Cleaning Floor",
    category: "Processing Technology",
    caption: "High-resolution color sorting cameras separating foreign matter and discolored seeds to reach 99.5%+ export purity.",
    filePath: "/images/facility/sortex-machinery.jpg",
    fallbackIcon: "⚙️",
    gradient: "from-[#1F4A3D] to-[#3F7C67]",
  },
  {
    id: "gal-2",
    title: "Precision Drum Roasting Unit",
    category: "In-House Roastery",
    caption: "Thermostatically controlled drum roasting for uniform essential oil release across cumin and coriander batches.",
    filePath: "/images/facility/drum-roaster.jpg",
    fallbackIcon: "🔥",
    gradient: "from-[#3F7C67] to-[#1F4A3D]",
  },
  {
    id: "gal-3",
    title: "Climate-Controlled Warehouse",
    category: "Storage Architecture",
    caption: "Elevated palletized warehouse with strict FIFO rotation, epoxy flooring, and automated moisture monitoring.",
    filePath: "/images/facility/warehouse-floor.jpg",
    fallbackIcon: "🏬",
    gradient: "from-[#1F4A3D] to-[#0A1B15]",
  },
  {
    id: "gal-4",
    title: "B2B Packaging & Nitrogen Barrier Line",
    category: "Packaging Line",
    caption: "Clean-room packaging lines handling 100g consumer pouches up to 50kg export HDPE & multi-wall sacks.",
    filePath: "/images/facility/packaging-line.jpg",
    fallbackIcon: "📦",
    gradient: "from-[#0A1B15] to-[#1F4A3D]",
  },
  {
    id: "gal-5",
    title: "Quality Control & Volatile Oil Testing",
    category: "QC Testing Lab",
    caption: "In-house laboratory verification of moisture, ASTA color value, volatile oil retention, and grain mesh sizing.",
    filePath: "/images/facility/qc-laboratory.jpg",
    fallbackIcon: "🔬",
    gradient: "from-[#3F7C67] to-[#0A1B15]",
  },
  {
    id: "gal-6",
    title: "Container Stuffing & Port Freight",
    category: "Export Logistics",
    caption: "Direct container loading with moisture desiccants and cargo lashing for shipping via Nhava Sheva (JNPT) and Mundra.",
    filePath: "/images/facility/container-dispatch.jpg",
    fallbackIcon: "🚢",
    gradient: "from-[#1F4A3D] to-[#B8934A]",
  },
];

export default function ImageLightbox() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight")
        setSelectedIdx((prev) => (prev! + 1) % galleryImages.length);
      if (e.key === "ArrowLeft")
        setSelectedIdx(
          (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  return (
    <div className="space-y-8">
      {/* Thumbnail Gallery Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setSelectedIdx(idx)}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-[#B8934A]/50 transition-all duration-300 flex flex-col"
          >
            {/* Visual Block with Fallback */}
            <div
              className={`h-48 bg-gradient-to-br ${img.gradient} flex flex-col items-center justify-center p-6 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
            >
              <span className="text-5xl group-hover:scale-125 transition-transform duration-300 mb-2">
                {img.fallbackIcon}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4B56A] bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                {img.category}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-[#1F4A3D] text-base group-hover:text-[#B8934A] transition-colors">
                  {img.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {img.caption}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#1F4A3D] font-semibold">
                <span>View Full Photo & Specs</span>
                <span>🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedIdx(null)}
          />

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-3xl bg-[#0A1B15] text-white rounded-3xl border border-[#B8934A]/40 overflow-hidden shadow-2xl animate-scale-in">
            {/* Top Close Bar */}
            <div className="p-4 sm:p-6 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4B56A]">
                  {galleryImages[selectedIdx].category}
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  {galleryImages[selectedIdx].title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedIdx(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm transition-colors"
                aria-label="Close Lightbox"
              >
                ✕
              </button>
            </div>

            {/* Main Visual Display */}
            <div className="p-8 sm:p-12 text-center bg-gradient-to-br from-[#1F4A3D] to-[#0A1B15] flex flex-col items-center justify-center min-h-[260px] relative">
              <span className="text-7xl mb-4">
                {galleryImages[selectedIdx].fallbackIcon}
              </span>
              <p className="text-xs text-white/50 font-mono">
                {galleryImages[selectedIdx].filePath}
              </p>
            </div>

            {/* Caption & Specs */}
            <div className="p-6 sm:p-8 bg-black/40 border-t border-white/10 space-y-4">
              <p className="text-sm text-white/80 leading-relaxed">
                {galleryImages[selectedIdx].caption}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() =>
                    setSelectedIdx(
                      (prev) =>
                        (prev! - 1 + galleryImages.length) %
                        galleryImages.length
                    )
                  }
                  className="btn-secondary !text-white !border-white/30 hover:!bg-white/20 text-xs !py-2 !px-4"
                >
                  ← Previous Image
                </button>
                <span className="text-xs text-white/50">
                  {selectedIdx + 1} of {galleryImages.length}
                </span>
                <button
                  onClick={() =>
                    setSelectedIdx(
                      (prev) => (prev! + 1) % galleryImages.length
                    )
                  }
                  className="btn-primary text-xs !py-2 !px-4"
                >
                  Next Image →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
