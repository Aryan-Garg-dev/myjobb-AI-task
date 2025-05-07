import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/sections/hero";

export default function Home() {
  return (
    <div className={"h-full w-full min-h-screen"}>
      <Navbar />
      <main className={"mt-[72px] max-md:mt-[65px] w-full h-full"}>
        <HeroSection />
        <div className={"border-b-neutral"}></div>
      </main>
    </div>
  );
}
