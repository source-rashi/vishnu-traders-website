"use client";

import React, { useState, useEffect } from "react";
import MediaWithFallback from "./MediaWithFallback";

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  caption: string;
  filePath: string;
  fallbackIcon: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Direct Origin Procurement & Intake",
    category: "Sourcing Operations",
    caption:
      "Intake of raw areca nuts from overseas plantations and domestic South Indian producing belts with digital moisture screening and batch lot tagging.",
    filePath: "/images/process/sourcing.jpg",
    fallbackIcon: "🌱",
  },
  {
    id: "gal-2",
    title: "In-House Size & Purity Grading",
    category: "Grading Technology",
    caption:
      "Vibratory sieves and optical gravity tables separating nuts into 80–85%, 90–95%, and 95%+ Super grade tiers with minimal broken threshold.",
    filePath: "/images/process/sorting.jpg",
    fallbackIcon: "⚙️",
  },
  {
    id: "gal-3",
    title: "Controlled Drum Roasting Unit",
    category: "In-House Roastery",
    caption:
      "Thermostatically controlled LPG drum roasters evenly roasting whole and split areca nuts under monitored heat curves.",
    filePath: "/images/process/roasting.jpg",
    fallbackIcon: "🔥",
  },
  {
    id: "gal-4",
    title: "Laboratory Analysis & COA Testing",
    category: "QC Testing Lab",
    caption:
      "In-house laboratory verification of moisture, density, and absence of external contaminants to certify every consignment.",
    filePath: "/images/process/grading.jpg",
    fallbackIcon: "🔬",
  },
  {
    id: "gal-5",
    title: "Industrial Multi-Wall Bagging",
    category: "Packaging Floor",
    caption:
      "Heavy-duty industrial bagging lines packaging 50–80kg export sacks with clear batch lot labeling.",
    filePath: "/images/process/packaging.jpg",
    fallbackIcon: "📦",
  },
  {
    id: "gal-6",
    title: "Bulk Warehousing & Freight Loading",
    category: "Central Logistics",
    caption:
      "Elevated palletized warehouse at R-20 Pologround with fast container loading for local and nationwide dispatches.",
    filePath: "/images/process/warehouse.jpg",
    fallbackIcon: "🚚",
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
            className="group cursor-pointer rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-[#B8934A]/50 transition-all duration-300 flex flex-col"
          >
            {/* Real Photo Thumbnail */}
            <div className="relative h-52 w-full overflow-hidden bg-[#0A1B15]">
              <MediaWithFallback
                src={img.filePath}
                alt={img.title}
                fill
                className="media-zoom object-cover"
                fallbackIcon={img.fallbackIcon}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <span className="absolute left-3 bottom-3 text-[10px] uppercase font-bold tracking-widest text-[#D4B56A] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
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
                <span>View Full Photo & Details</span>
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
          <div className="relative z-10 w-full max-w-4xl bg-[#0A1B15] text-white rounded-3xl border border-[#B8934A]/40 overflow-hidden shadow-2xl animate-scale-in">
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

            {/* Main Visual Photo Display */}
            <div className="relative w-full h-[320px] sm:h-[420px] bg-black">
              <MediaWithFallback
                src={galleryImages[selectedIdx].filePath}
                alt={galleryImages[selectedIdx].title}
                fill
                priority
                className="object-contain"
                fallbackIcon={galleryImages[selectedIdx].fallbackIcon}
              />
            </div>

            {/* Caption & Controls */}
            <div className="p-6 sm:p-8 bg-black/60 border-t border-white/10 space-y-4">
              <p className="text-sm text-white/90 leading-relaxed">
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
                  ← Previous
                </button>
                <span className="text-xs text-[#D4B56A] font-semibold">
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
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
