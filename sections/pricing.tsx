import React from "react";
import {
  pricingFAQ,
  pricingPlans,
  pricingSlogan,
} from "@/constants/pricing-content";
import PriceCard from "@/components/price-card";
import PlusCorners from "@/components/plus-corners";

const PricingSection = () => {
  return (
    <section className={"section-container"} id={"pricing"}>
      <div className={"section bg-base-100 flex-center flex-col gap-4 px-0"}>
        <div className={"w-full flex-center flex-col px-2"}>
          <h2
            className={
              "font-label text-center text-3xl max-md:text-2xl font-semibold"
            }
          >
            Pricing
          </h2>
          <p className={"mb-3 text-center max-md:text-sm"}>{pricingSlogan}</p>
        </div>
        <div
          className={
            "w-full flex flex-wrap max-lg:flex-col lg:justify-center max-lg:items-center gap-5 px-5"
          }
        >
          {pricingPlans.map((plan, index) => (
            <PriceCard pricingPlan={plan} key={index} />
          ))}
        </div>
        <div
          className={
            "relative group border-neutral bg-base-200 m-4 mt-8 p-2 px-4 flex-center flex-col"
          }
        >
          <PlusCorners className={"group-hover:text-accent"} />
          <p className={"font-semibold text-center max-md:text-sm"}>
            {pricingFAQ.question}
          </p>
          <p className={"text-center max-md:text-sm"}>{pricingFAQ.answer}</p>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
