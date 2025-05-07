"use client";

import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | null;

interface ScrollInfoType {
  direction: ScrollDirection;
  scrolled: boolean;
}

const useScrolled = (threshold = 10): ScrollInfoType => {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfoType>({
    direction: null,
    scrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollInfo = () => {
      const currentScrollY = window.pageYOffset;
      const direction: ScrollDirection =
        currentScrollY > lastScrollY ? "down" : "up";
      const scrolled = currentScrollY > threshold;

      if (
        direction !== scrollInfo.direction ||
        scrolled !== scrollInfo.scrolled
      ) {
        setScrollInfo({ direction, scrolled });
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScrollInfo);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrollInfo;
};

export default useScrolled;
