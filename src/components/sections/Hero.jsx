import StartButton from "../StartButton";

function Hero() {
  return (
    <section className="container relative flex flex-col justify-center gap-y-16 md:gap-y-24 items-center pt-16 md:pt-28 text-3xl md:text-6xl text-center font-bold">
      <div className="hero-drop" />
      <h1 data-scroll data-scroll-speed="1" className="uppercase leading-snug">
        Summe
        <span className="bg-[#E4CDF5] p-2">Rizz</span>e any Text into any{" "}
        <span className="underline-gradient">Language</span> you want for free
        using <span className="bg-[#E4CDF5] p-2">AI</span>
      </h1>
      <StartButton />
    </section>
  );
}

export default Hero;
