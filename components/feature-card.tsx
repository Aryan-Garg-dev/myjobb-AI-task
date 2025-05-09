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
      className={"relative group border-neutral bg-base-100 w-sm flex flex-col"}
    >
      <PlusCorners />
      <div className={"pt-4 px-4 pb-2"}>{displayContent}</div>
      <div className={"border-b-neutral"} />
      <div className={"pt-2 px-4 pb-4 flex flex-col gap-2"}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
