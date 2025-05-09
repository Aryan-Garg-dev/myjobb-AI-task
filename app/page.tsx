import Navbar from "@/components/navbar";
import HeroSection from "@/sections/hero";
import Footer from "@/sections/footer";
import FaqSection from "@/sections/faq";
import PricingSection from "@/sections/pricing";
import FeaturesSection from "@/sections/features";

export default function Home() {
  return (
    <div className={"h-full w-full min-h-screen"}>
      <Navbar />
      <main
        className={
          "mt-[72px] min-h-[calc(100vh-72px)] max-md:mt-[65px] max-md:min-h-calc(100vh-65px)] w-full h-full"
        }
      >
        <HeroSection />
        <div className={"border-b-neutral"}></div>
        <FeaturesSection />
        <div className={"border-b-neutral"}></div>
        <PricingSection />
        <div className={"border-b-neutral"}></div>
        <FaqSection />
        <div className={"border-b-neutral"}></div>
      </main>
      <Footer />
    </div>
  );
}
