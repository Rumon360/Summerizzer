import React from "react";

function About() {
  return (
    <section id="about" className="container py-6 relative px-6 uppercase">
      <h3 className=" leading-snug text-3xl font-bold ">About Us</h3>
      <p className="text-sm md:text-lg font-medium mt-4 text-center">
        Summa<span className="font-bold text-lg"> &#123; Rizz &#125; </span>er
        is a tool to summarize any text into any language you want. It uses
        OpenAI&apos;s text-davinci-003 model to generate the summerized text.
      </p>
    </section>
  );
}

export default About;
