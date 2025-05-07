import NeoButton from "@/components/buttons/neo-button";

const HeroSection = () => {
  return (
    <section className={"section-container"}>
      <div className={"section section-gradient"}>
        <h2 className={"text-center flex flex-wrap justify-center gap-1"}>
          <span>Polish your resume.</span>
          <span>Unlock bigger opportunities.</span>
        </h2>
        <h1
          className={
            "text-center font-label text-4xl font-bold text-neutral-800"
          }
        >
          Tailor Your <span className={"text-blue-500"}>Resume</span> to Any Job
          in <span className={"text-red-500"}>Seconds</span>
        </h1>
      </div>
    </section>
  );
};
export default HeroSection;
