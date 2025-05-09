import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps {
  text: string;
  afterText?: string;
  className?: string;
  onClick?: () => void;
}

export function InteractiveHoverButton({
  text,
  afterText,
  className,
  onClick,
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={`group relative w-32 cursor-pointer overflow-hidden border border-dashed bg-white p-2 text-center font-semibold text-black ${className}`}
      onClick={onClick}
    >
      <span className="inline-block text-sm translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute text-base top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{afterText || text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-accent dark:group-hover:bg-accent"></div>
    </button>
  );
}
