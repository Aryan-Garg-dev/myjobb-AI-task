import React from "react";
import {
  featureSectionDescription,
  featureSectionTitle,
  featureContent,
  bonusCard,
} from "@/constants/feature-content";
import FeatureCard from "@/components/feature-card";
import { MoveRightIcon } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className={"section-container"} id={"features"}>
      <div
        className={
          "section section-gradient-light flex-center flex-col justify-around gap-4 px-0"
        }
      >
        <div className={"w-full flex-center flex-col px-2"}>
          <h2
            className={
              "font-label text-center text-3xl max-md:text-2xl max-sm:text-xl font-semibold"
            }
          >
            {featureSectionTitle}
          </h2>
          <p className={"mb-3 text-center max-md:text-sm"}>
            {featureSectionDescription}
          </p>
        </div>
        <div className={"w-full h-full flex max-lg:flex-col gap-2 px-4"}>
          <FeatureCard
            displayContent={featureContent.uploadResume.displayContent}
            title={featureContent.uploadResume.title}
            description={featureContent.uploadResume.description}
          />
          <MoveRightIcon
            className={"size-4 m-auto max-lg:rotate-90 text-neutral-500"}
          />
          <FeatureCard
            displayContent={featureContent.provideJobDescription.displayContent}
            title={featureContent.provideJobDescription.title}
            description={featureContent.provideJobDescription.description}
          />
          <MoveRightIcon
            className={"size-4 m-auto max-lg:rotate-90 text-neutral-500"}
          />
          <FeatureCard
            displayContent={featureContent.editAndCustomize.displayContent}
            title={featureContent.editAndCustomize.title}
            description={featureContent.editAndCustomize.description}
          />
        </div>
        <div
          className={
            "relative group border-neutral bg-base-100 m-4 p-2 px-4 flex-center flex-col max-w-2xl"
          }
        >
          <p className={"font-semibold text-center max-md:text-sm"}>
            {bonusCard.title}
          </p>
          <p className={"text-center max-md:text-sm"}>
            {bonusCard.description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
