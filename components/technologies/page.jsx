"use client";

import React, { useState } from "react";
import { mainTechItems, allTechItems } from "@/lib/data";
import Image from "next/image";
import Tooltip from "../ui/tooltip";

export default function Technologies() {
  const [technology, setTechnology] = useState("Main");

  return (
    <section id="technologies" className="space-y-4 scroll-mt-32">
      <h1 className="uppercase text-sm font-bold w-fit tracking-widest hover:text-accent hover:opacity-100">
        Technologies
      </h1>
      <div className="flex items-center justify-center gap-x-4">
        <button
          onClick={() => setTechnology("Main")}
          className={`text-sm ${
            technology === "Main" ? `opacity-87` : `opacity-60`
          }`}
        >
          Main Technologies
        </button>
        |
        <button
          onClick={() => setTechnology("All")}
          className={`text-sm ${
            technology === "All" ? `opacity-100` : `opacity-60`
          }`}
        >
          All Technologies
        </button>
      </div>
      {technology === "Main" && (
        <div className="grid grid-cols-2 gap-4 max-[550px]:grid-cols-1">
          {mainTechItems.map((item) => (
            <div
              key={item.title}
              className="inline-flex p-3 items-center gap-x-4 rounded-lg group hover:ring-1 hover:ring-accent/[0.2] hover:bg-accent/[0.1] bg-secondary"
            >
              <div
                className={`p-2 ${item.bgColor} rounded-md group-hover:scale-110 transition`}
                style={{ backgroundColor: `${item.bgColor}20` }}
              >
                <Image
                  src={item.icon}
                  className="size-6"
                  width={100}
                  height={100}
                  alt={item.alt}
                />
              </div>

              <div>
                <h1>{item.title}</h1>
                <p className="text-xs tracking-wide opacity-60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {technology === "All" && (
        <div className="gap-y-4 flex flex-col items-center">
          <div className="flex gap-2 items-center justify-center flex-wrap">
            {allTechItems.map((item) => (
              <div
                key={item.title}
                className="inline-flex p-3 items-center rounded-lg group hover:ring-1 hover:ring-accent/[0.2] hover:bg-accent/[0.1] bg-secondary"
              >
                <div className="p-2 ounded-md group-hover:scale-110 transition">
                  <Image
                    src={item.icon}
                    className="size-6"
                    width={100}
                    height={100}
                    alt={item.alt}
                  />
                  <Tooltip title={item.title} position={"-top-14"} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs max-w-md text-center opacity-70 italic">
            Disclaimer: This list includes all the technologies I&apos;ve worked
            with in the past, but does not necessarily reflect the ones I am
            most proficient in.
          </p>
        </div>
      )}
    </section>
  );
}
