import React from "react";

type ButtonPropsType = React.ComponentPropsWithoutRef<"button">;

const NeoButton = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  ({ onClick, children }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={"group/button bg-[#222222] text-black"}
      >
        <span
          className={
            "block -translate-x-[3px] -translate-y-[3px] border border-[#222222] bg-base-200 px-5 py-2 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-1 group-active/button:translate-x-0 group-active/button:translate-y-0"
          }
        >
          {children}
        </span>
      </button>
    );
  }
);

NeoButton.displayName = "NeoButton";

export default NeoButton;
