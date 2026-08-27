"use client";

import Image from "next/image";
import { useState } from "react";

interface MediaWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  fallbackIcon?: string;
  fallbackGradient?: string;
  objectFit?: "cover" | "contain";
}

export default function MediaWithFallback({
  src,
  alt,
  className = "",
  fill = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fallbackIcon = "✦",
  fallbackGradient = "from-[#1F4A3D] via-[#3F7C67] to-[#B8934A]",
  objectFit = "cover",
}: MediaWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${fallbackGradient} text-white ${className}`}
      >
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <span className="text-3xl sm:text-4xl drop-shadow-sm">{fallbackIcon}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      onError={() => setHasError(true)}
      className={`${className} ${objectFit === "cover" ? "object-cover" : "object-contain"}`}
    />
  );
}
