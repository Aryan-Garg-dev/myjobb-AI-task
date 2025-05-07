"use client";

import { useEffect, useState } from "react";

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type BreakpointType = keyof typeof breakpoints | "xs";
type DeviceType = "mobile" | "tablet" | "desktop";

const getBreakpoint = (width: number): BreakpointType => {
  if (width < breakpoints.sm) return "xs";
  if (width < breakpoints.md) return "sm";
  if (width < breakpoints.lg) return "md";
  if (width < breakpoints.xl) return "lg";
  if (width < breakpoints["2xl"]) return "xl";
  else return "2xl";
};

const getDeviceType = (width: number): DeviceType => {
  if (width < breakpoints.sm) return "mobile";
  if (width < breakpoints.lg) return "tablet";
  return "desktop";
};

const useBreakpoint = () => {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakpoint = getBreakpoint(size.width);
  const deviceType = getDeviceType(size.width);

  return {
    width: size.width,
    height: size.height,
    breakpoint,
    deviceType,
  };
};

export default useBreakpoint;
