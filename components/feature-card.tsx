import React from "react";
import PlusCorners from "@/components/plus-corners";

export interface IFeatureCard {
  displayContent: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<IFeatureCard> = ({
  displayContent,
  title,
  description,
}) => {
  return (
    <div
      className={
        "relative border-neutral bg-base-100 w-full flex-1 flex flex-col group/feature-card"
      }
    >
      <PlusCorners className={"group-hover/feature-card:text-accent"} />
      <div className={"border-b-neutral"}>{displayContent}</div>
      <div className={"pt-2 px-4 pb-4 flex-1 flex flex-col"}>
        <h3 className={"text-2xl max-md:text-lg font-semibold"}>{title}</h3>
        <p className={"max-md:text-sm"}>{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
