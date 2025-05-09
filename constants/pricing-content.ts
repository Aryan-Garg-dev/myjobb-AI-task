export interface IPricingPlan {
  name: string;
  description: string;
  price: number;
  priceType: "monthly" | "payPerUse" | "free" | "onetime" | "annually";
  features: string[];
  cta: string; // call to action
  isPopular: boolean;
  plusFree?: boolean;
}

export const pricingPlans: IPricingPlan[] = [
  {
    name: "Starter",
    price: 0,
    priceType: "free",
    description: "Perfect for trying out myjobb Resume AI! 🆓",
    features: [
      "3 basic ATS-friendly templates 📄",
      "Create & download 1 resume (PDF) ",
      "Basic AI suggestions (5 max) 💡",
      "Spell-check & formatting ✅",
      "No credit card needed",
    ],
    cta: "Start for Free",
    isPopular: false,
  },
  {
    name: "Pay-Per-Use",
    price: 49,
    priceType: "payPerUse",
    description: "Craft one job-winning resume! 💸",
    features: [
      "15 premium ATS-friendly templates 🎨",
      "1 resume in PDF, Word, TXT ",
      "Resume score & keyword match",
      "Unlimited AI suggestions (1 resume) 🔍",
      "Job-specific resume tailoring 🚀",
    ],
    cta: "Buy Now",
    isPopular: false,
    plusFree: true,
  },
  {
    name: "Pro",
    price: 299,
    priceType: "monthly",
    description: "Best for active jobseekers! 🌟",
    features: [
      "30+ premium templates (creative/executive) ",
      "Unlimited resumes & cover letters 📝",
      "Unlimited job description targeting",
      "Priority support (same-day) 📞",
      "AI-powered resume analysis 📊",
      "7-day free trial 🎉",
    ],
    cta: "Try Free for 7 Days",
    isPopular: true,
    plusFree: true,
  },
];

export const pricingSlogan =
  "Your Dream Job Awaits – Build the Perfect Resume Today! 🚀";

export const pricingFAQ = {
  question: "🎯 Not sure what to choose?",
  answer:
    "Start free → Pay only when needed → Upgrade when you're applying more frequently!",
};
