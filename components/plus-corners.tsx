import { PlusIcon } from "lucide-react";
import cn from "@/utilities/tw-merge";
import React from "react";

interface IPlusCorners {
  className?: string;
  strokeWidth?: number;
}

export const PlusCorners: React.FC<IPlusCorners> = ({
  className,
  strokeWidth = 2,
}) => (
  <>
    <PlusIcon
      className={cn(
        "absolute -top-2 -left-2 size-4 text-neutral-400",
        className
      )}
      strokeWidth={strokeWidth}
    />
    <PlusIcon
      className={cn(
        "absolute -top-2 -right-2 size-4 text-neutral-400",
        className
      )}
      strokeWidth={strokeWidth}
    />
    <PlusIcon
      className={cn(
        "absolute -bottom-2 -left-2 size-4 text-neutral-400",
        className
      )}
      strokeWidth={strokeWidth}
    />
    <PlusIcon
      className={cn(
        "absolute -bottom-2 -right-2 size-4 text-neutral-400",
        className
      )}
      strokeWidth={strokeWidth}
    />
  </>
);

export default PlusCorners;
