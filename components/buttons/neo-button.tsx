import React from "react";
import cn from "@/utilities/tw-merge";

type ButtonPropsType = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "standard" | "premium" | "light";
};

const NeoButton = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  ({ className, onClick, children, variant = "standard" }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "group/button bg-[#222222] text-accent",
          variant === "premium" && "bg-[#eeeeee]",
          className
        )}
      >
        <span
          className={cn(
            "block -translate-x-[3px] -translate-y-[3px] border border-[#222222] bg-base-200 px-5 py-2 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-1 group-active/button:translate-x-0 group-active/button:translate-y-0",
            variant === "premium" && "bg-[#F5C45E]",
            variant === "standard" && "bg-[#578FCA]"
          )}
        >
          {children}
        </span>
      </button>
    );
  }
);

NeoButton.displayName = "NeoButton";

export default NeoButton;
