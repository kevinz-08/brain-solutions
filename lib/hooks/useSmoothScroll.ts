"use client";

import { useCallback } from "react";

/**
 * Custom smooth scroll that bypasses sticky section traps.
 *
 * navOffset: pixels to subtract from target top (navbar height).
 *            Set to ~20–40px since sections already have their own
 *            `scroll-margin-top: 40px` in globals.css.
 *
 * duration:  animation length in ms.
 */
export function useSmoothScroll(navOffset: number = 20, duration: number = 900) {
  const smoothScrollTo = useCallback((targetY: number, dur: number) => {
    const startY = window.scrollY;
    const diff = targetY - startY;

    // Don't animate if already there (within 2px tolerance)
    if (Math.abs(diff) < 2) return;

    let start: number | null = null;

    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / dur, 1);

      window.scrollTo(0, startY + diff * ease(progress));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY - navOffset;

      smoothScrollTo(Math.max(0, absoluteTop), duration);
    },
    [navOffset, duration, smoothScrollTo]
  );

  return handleClick;
}