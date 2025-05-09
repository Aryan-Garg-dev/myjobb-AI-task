import { IFeatureCard } from "@/components/feature-card";
import UploadResume from "@/components/ui/feature-cards/upload-resume";
import PasteJobDescription from "@/components/ui/feature-cards/paste-job-description";
import EditCustomizeResume from "@/components/ui/feature-cards/edit-customize-resume";
type FeatureKey = "uploadResume" | "provideJobDescription" | "editAndCustomize";

export const featureContent: Record<FeatureKey, IFeatureCard> = {
  uploadResume: {
    displayContent: <UploadResume />,
    title: "Upload Resume",
    description:
      "Start by uploading your existing resume — PDF, DOCX, or even plain text. We’ll extract and structure your content in seconds.",
  },
  provideJobDescription: {
    displayContent: <PasteJobDescription />,
    title: "Paste Job Description",
    description:
      "Paste the job description you're targeting. This helps us tailor your resume for maximum relevance and impact.",
  },
  editAndCustomize: {
    displayContent: <EditCustomizeResume />,
    title: "Edit And Customize",
    description:
      "Use our intuitive editor to review, refine, and personalize the AI-generated resume. Choose different templates, tweak wording, and adjust formatting with ease.",
  },
};

export const featureSectionTitle = "Your Job-Ready Resume is 3 Steps Away ✨";
export const featureSectionDescription =
  "We make it ridiculously simple to go from resume to results.";

export const bonusCard = {
  title: "📊 Get Smart Resume Analytics",
  description:
    "See how well your resume matches the job description, track keyword alignment, and get insights to boost your chances of getting shortlisted.",
};
