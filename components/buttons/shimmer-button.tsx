import React from "react";

interface IShimmerButton {
  text: string;
  onClick: () => void;
}

export const ShimmerButton: React.FC<IShimmerButton> = ({ text, onClick }) => {
  return (
    <button
      className="group relative h-12 overflow-hidden bg-accent px-6 text-neutral-50 transition hover:bg-primary"
      onClick={onClick}
    >
      <span className="relative">{text}</span>
      <div className="absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-[12px]">
        <div className="relative h-full w-8 bg-white/30"></div>
      </div>
    </button>
  );
};
