import React from "react";

function About() {
  return (
    <section id="about" className="container py-16 relative">
      <h3 className="uppercase leading-snug text-3xl font-bold">About Us</h3>
      <p className="text-xl font-medium mt-4">
        Summe<span className="font-bold text-lg">Rizz</span>er is a tool to
        summerize any text into any language you want. It uses OpenAI&apos;s
        text-davinci-003 model to generate the summerized text.
      </p>
    </section>
  );
}

export default About;
