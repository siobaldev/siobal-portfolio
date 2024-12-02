import React from "react";
import About from "./about/page";
import Projects from "./projects/page";
import Technologies from "./technologies/page";
import Contact from "./contact/page";

export default function Main() {
  return (
    <main className="lg:w-1/2 lg:space-y-36 space-y-20 md:space-y-28 mb-40 md:py-20 lg:py-32">
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}
