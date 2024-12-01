import React from "react";
import About from "./about/page";
import Projects from "./projects/page";
import Technologies from "./technologies/page";

export default function Main() {
  return (
    <main className="lg:w-1/2 space-y-36 py-14 md:py-20 lg:py-32">
      <About />
      <Projects />
      <Technologies />
    </main>
  );
}
