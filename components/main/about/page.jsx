"use client";

import React, { useState, useEffect } from "react";
import HangingCat from "@/public/assets/hangingCat.svg";
import Tooltip from "@/components/ui/tooltip";

export default function About() {
  const [isNekoVisible, setIsNekoVisible] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/oneko.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const neko = document.getElementById("oneko");
    if (neko) {
      neko.style.display = isNekoVisible ? "block" : "none";
    }
  }, [isNekoVisible]);

  const toggleNeko = () => {
    setIsNekoVisible(!isNekoVisible);
  };

  return (
    <section id="about" className="space-y-8 scroll-mt-32">
      <h1 className="uppercase text-sm font-bold w-fit tracking-widest hover:text-accent hover:opacity-100">
        about
      </h1>
      <p>
        <span className="opacity-60">
          {" "}
          Hey! I&apos;m Minard, a front-end developer who started taking
          interest in awesome websites in 2023. I specialize in UI design and
          crafting engaging experiences with great attention to detail. <br />{" "}
          <br />
          When I&apos;m not coding, you&apos;ll find me reading comics, playing
          AQW, or browsing meowrot contents. I love{" "}
        </span>
        <span className="underline relative group">
          <span className="opacity-60">cats</span>
          <Tooltip title={`${isNekoVisible ? "Hide Neko" : "Show Neko"}`} />
          <HangingCat
            className={`size-12 absolute -right-5  top-[16px] cursor-pointer transition-colors duration-300 ${
              isNekoVisible ? "fill-[#A47764]" : "fill-white"
            }`}
            onClick={toggleNeko}
          />
        </span>
      </p>
    </section>
  );
}
