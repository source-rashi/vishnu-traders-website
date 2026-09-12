import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon" | "horizontal";
  className?: string;
  light?: boolean;
}

export default function VishnuTradersLogo({
  variant = "horizontal",
  className = "",
  light = false,
}: LogoProps) {
  const textColor = light ? "text-white" : "text-[#1F4A3D]";
  const subtextColor = light ? "text-[#D4B56A]" : "text-[#B8934A]";

  if (variant === "icon") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <Image
          src="/final-logo.png"
          alt="Vishnu Traders Emblem"
          fill
          sizes="(max-width: 640px) 48px, 64px"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Large Emblem */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 relative drop-shadow-xl">
          <VishnuTradersLogo variant="icon" className="w-full h-full" />
        </div>

        {/* Brand Wordmark */}
        <div className="space-y-1">
          <h2
            className={`text-2xl sm:text-4xl font-bold tracking-tight uppercase ${textColor}`}
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            VISHNU TRADERS
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B8934A]" />
            <p className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase ${subtextColor}`}>
              Since 1996 · Global Trading · Pan-India Network
            </p>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B8934A]" />
          </div>
          <p className="text-[11px] sm:text-xs text-white/60 mt-1 font-medium tracking-wide">
            Pologround Industrial Estate · Indore · Madhya Pradesh · India
          </p>
        </div>
      </div>
    );
  }

  // Horizontal variant (default for Navbar / Footer)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl overflow-hidden shadow-md ring-1 ring-[#B8934A]/30">
        <VishnuTradersLogo variant="icon" className="w-full h-full" />
      </div>
      <div>
        <span
          className={`block text-lg sm:text-xl font-bold tracking-tight leading-tight ${textColor}`}
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          Vishnu Traders
        </span>
        <span className={`block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] ${subtextColor}`}>
          Since 1996 · Global Trading
        </span>
      </div>
    </div>
  );
}
