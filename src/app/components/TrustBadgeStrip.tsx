import React from "react";

interface TrustBadgeStripProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
}

export default function TrustBadgeStrip({
  className = "",
  variant = "light",
}: TrustBadgeStripProps) {
  const badges = [
    { label: "FSSAI Registered", icon: "✓" },
    { label: "Competitive Pricing", icon: "⚖️" },
    { label: "Fast WhatsApp Response", icon: "⚡" },
    { label: "Certificate of Analysis on Every Batch", icon: "🔬" },
    { label: "Pan-India Distribution", icon: "🇮🇳" },
  ];

  const getStyle = () => {
    if (variant === "dark") {
      return "bg-[#0A1B15] text-white/90 border-[#B8934A]/30 divide-white/10";
    }
    if (variant === "gold") {
      return "bg-[#FAF3E7] text-[#1F4A3D] border-[#B8934A]/30 divide-[#B8934A]/20";
    }
    return "bg-white text-[#1F4A3D] border-gray-200 divide-gray-100 shadow-sm";
  };

  return (
    <div className={`w-full border-y py-4 px-4 ${getStyle()} ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
            >
              <span className="text-[#B8934A] font-bold text-xs">{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
