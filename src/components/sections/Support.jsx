/* eslint-disable @next/next/no-img-element */
import React from "react";

function Support() {
  return (
    <div
      id="support"
      className="py-16 relative max-w-[80%] md:max-w-4xl mx-auto text-sm md:text-lg"
    >
      <div className="support-drop" />
      <h4 className="text-center uppercase leading-relaxed">
        You can support us by buying us a{" "}
        <span className="font-bold">coffee</span>. We are currently using
        OpenAI&apos;s free tier. We won&apos;t be able to afford the paid
        version, so if you want this website to stay alive, you can help us by
        buying as a coffee. Thank You {": )"}
      </h4>
      <a
        target="_blank"
        href="https://www.buymeacoffee.com/rumonkhan3K"
        className="flex flex-col gap-y-2 items-center justify-center py-3"
        rel="noreferrer"
      >
        <img
          src="/coffee.svg"
          className="w-[50px] h-[50px] object-contain border-2 border-violet-600 rounded-full cursor-pointer"
          alt="coffee"
        />
        <p className="uppercase text-xs cursor-pointer hover:text-violet-600">
          click me!
        </p>
      </a>
    </div>
  );
}

export default Support;
