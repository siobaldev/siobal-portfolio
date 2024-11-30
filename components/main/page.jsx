import React from "react";
import About from "./about/page";
import Projects from "./projects/page";

export default function Main() {
  return (
    <main className="lg:w-1/2 space-y-36">
      <About />
      <Projects />
    </main>
  );
}
