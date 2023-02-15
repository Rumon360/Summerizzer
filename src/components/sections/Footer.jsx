import React from "react";

function Footer() {
  return (
    <div className="relative">
      <div className="footer-drop" />
      <p className="text-center text-sm pt-4 pb-3">
        Deleveloped by{" "}
        <a
          target="_blank"
          href="https://hmk360.vercel.app/"
          className="hover:underline"
          rel="noreferrer"
        >
          Hasin Mahtub Khan
        </a>
      </p>
    </div>
  );
}

export default Footer;
