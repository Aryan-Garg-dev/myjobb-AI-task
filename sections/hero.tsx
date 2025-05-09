const HeroSection = () => {
  return (
    <section className={"section-container"}>
      <div className={"section bg-white"}>
        <h2
          className={
            "text-center flex flex-wrap justify-center gap-1 max-md:text-sm max-md:mb-2"
          }
        >
          <span>Polish your resume.</span>
          <span>Unlock bigger opportunities.</span>
        </h2>
        <h1
          className={
            "text-center font-label text-4xl max-md:text-3xl font-bold text-neutral-800"
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
