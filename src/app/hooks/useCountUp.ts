"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Custom hook to animate numbers counting up from 0 when visible
 */
export function useCountUp(
  end: number,
  duration = 2000,
  startOnView = true
) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    if (!startOnView) {
      animateCount();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };

    function animateCount() {
      let startTime: number | null = null;

      function step(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic formula
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      }

      requestAnimationFrame(step);
    }
  }, [end, duration, startOnView, hasAnimated]);

  return { count, ref };
}
