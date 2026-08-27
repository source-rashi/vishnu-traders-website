"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    const current = elementRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  const animationStyles: Record<string, { initial: string; animate: string }> = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    "fade-in": {
      initial: "opacity-0",
      animate: "opacity-100",
    },
    "slide-left": {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "slide-right": {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    "scale-up": {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
  };

  const selectedAnim = animationStyles[animation] || animationStyles["fade-up"];

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? selectedAnim.animate : selectedAnim.initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
