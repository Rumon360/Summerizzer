import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function StartButton() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div>
      <div
        onClick={() => {
          const target = document.querySelector("#main");
          scroll.scrollTo(target);
        }}
        className="link"
        data-scroll
        data-scroll-speed="1"
      >
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          className="link__svg"
          aria-labelledby="link1-title link1-desc"
        >
          <title id="link1-title">Start Now</title>
          <desc id="link1-desc">* Start Now *</desc>

          <path
            id="link-circle"
            className="link__path"
            d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            stroke="none"
            fill="none"
          />

          <path
            className="link__arrow"
            d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
            fill="none"
          />

          <text className="link__text">
            <textPath href="#link-circle" stroke="none">
              * Start Now * * Start Now *
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default StartButton;
