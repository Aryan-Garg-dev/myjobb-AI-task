import React from "react";
import { IPricingPlan } from "@/constants/pricing-content";
import PlusCorners from "@/components/plus-corners";
import cn from "@/utilities/tw-merge";
import { CheckCheckIcon, CheckIcon } from "lucide-react";
import NeoButton from "@/components/buttons/neo-button";

interface IPriceCard {
  pricingPlan: IPricingPlan;
  children?: React.ReactNode;
}

const subscriptionDuration = (priceType: IPricingPlan["priceType"]) => {
  switch (priceType) {
    case "monthly":
      return "month";
    case "annually":
      return "year";
    case "payPerUse":
      return "resume";
    default:
      return "";
  }
};

const PriceCard: React.FC<IPriceCard> = ({
  pricingPlan: {
    price,
    priceType,
    cta,
    features,
    name,
    isPopular,
    description,
    plusFree,
  },
  children,
}) => {
  return (
    <div
      className={cn(
        "relative w-full min-w-sm max-w-md flex-1 border-neutral bg-base-200",
        isPopular && "bg-accent border border-neutral-300 border-dotted"
      )}
    >
      <div
        className={cn(
          "p-4 border-b-neutral",
          isPopular && "border-b border-b-neutral-300 border-dotted"
        )}
      >
        <div
          className={cn(
            "font-label text-xl font-semibold text-accent",
            isPopular && "text-accent-content"
          )}
        >
          {name}
        </div>
        <p
          className={cn(
            " text-accent/75",
            isPopular && "text-accent-content/75"
          )}
        >
          {description}
        </p>
      </div>
      <div
        className={cn(
          "p-4 border-b-neutral",
          isPopular && "border-b border-b-neutral-300 border-dotted"
        )}
      >
        <p
          className={cn(
            "text-2xl font-label font-medium text-accent",
            isPopular && "text-accent-content"
          )}
        >
          {price === 0 ? "Free" : `₹${price}`}
          {price !== 0 && (
            <span className={"text-base italic"}>
              {" "}
              /{subscriptionDuration(priceType)}
            </span>
          )}
        </p>
        <NeoButton
          variant={isPopular ? "premium" : "standard"}
          className={"font-sans mt-2 font-medium"}
        >
          {cta}
        </NeoButton>
      </div>
      <ul
        className={cn(
          "p-4 px-4 text-accent",
          isPopular && "text-accent-content"
        )}
      >
        {plusFree && (
          <li className={"flex gap-2 items-center"}>
            <CheckCheckIcon className={"size-3"} />
            <em
              className={cn(
                " text-accent/80",
                isPopular && "text-accent-content/80"
              )}
            >
              Everything included in free plus
            </em>
          </li>
        )}
        {features.map((feature) => (
          <li className={"flex gap-2 items-center"}>
            <CheckIcon className={"size-3"} />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PriceCard;
