import { IFeatureCard } from "@/components/feature-card";

const featureContent: { [key: string]: IFeatureCard } = {
  uploadResume: {
    displayContent: <div>Display - Content</div>,
    title: "Upload Resume",
    description: "Upload Resume Description",
  },
  provideJobDescription: {
    displayContent: <div>Provide Job Description</div>,
    title: "Provide Job",
    description: "Provide Job description",
  },
  editAndCustomize: {
    displayContent: <div>Edit And Customize</div>,
    title: "Edit And Customize",
    description: "Edit And Customise Description",
  },
};

export const featureSectionTitle = "Your Job-Ready Resume is 3 Steps Away";
export const featureSectionDescription =
  "We make it ridiculously simple to go from resume to results.";

export const bonusCard = {
  title: "📊 Get Smart Resume Analytics",
  description:
    "See how well your resume matches the job description, track keyword alignment, and get insights to boost your chances of getting shortlisted.",
};
