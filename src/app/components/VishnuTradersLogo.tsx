import React from "react";

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
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-label="Vishnu Traders Emblem"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4B56A" />
              <stop offset="50%" stopColor="#B8934A" />
              <stop offset="100%" stopColor="#8A6A2E" />
            </linearGradient>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F4A3D" />
              <stop offset="100%" stopColor="#0A1B15" />
            </linearGradient>
          </defs>

          {/* Outer Shield / Container */}
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#greenGrad)" stroke="url(#goldGrad)" strokeWidth="2" />

          {/* Globe Latitude & Longitude lines */}
          <circle cx="32" cy="32" r="23" stroke="#3F7C67" strokeWidth="1.2" strokeDasharray="2 2" fill="none" opacity="0.6" />
          <ellipse cx="32" cy="32" rx="10" ry="23" stroke="#3F7C67" strokeWidth="1.2" fill="none" opacity="0.6" />
          <line x1="9" y1="32" x2="55" y2="32" stroke="#3F7C67" strokeWidth="1.2" opacity="0.6" />
          <line x1="14" y1="20" x2="50" y2="20" stroke="#3F7C67" strokeWidth="0.8" opacity="0.4" />
          <line x1="14" y1="44" x2="50" y2="44" stroke="#3F7C67" strokeWidth="0.8" opacity="0.4" />

          {/* Stylized Grain / Leaf at top */}
          <path
            d="M32 10 C34 14, 38 16, 38 20 C38 22, 35 24, 32 24 C29 24, 26 22, 26 20 C26 16, 30 14, 32 10 Z"
            fill="url(#goldGrad)"
          />

          {/* Bold V Motif */}
          <path
            d="M17 18 L32 49 L47 18 L41 18 L32 38 L23 18 Z"
            fill="url(#goldGrad)"
          />

          {/* Central Trade Star Accent */}
          <polygon
            points="32,26 33.5,30 37.5,30.5 34.5,33 35.5,37 32,34.5 28.5,37 29.5,33 26.5,30.5 30.5,30"
            fill="#FAF3E7"
          />
        </svg>
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
