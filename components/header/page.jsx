"use client";

import React, { useState } from "react";
import Link from "next/link";
import X from "@/public/assets/x.svg";
import Github from "@/public/assets/github.svg";
import Linkedin from "@/public/assets/linkedin.svg";
import Tooltip from "../ui/tooltip";

import TableOfContents from "../tableOfContents/page";

export default function Header() {
  return (
    <header className="lg:flex lg:top-0 max-h-screen lg:flex-col py-14 md:py-20 lg:py-32 lg:w-1/2 lg:justify-between lg:sticky">
      <div className="mb-6">
        <h1 className="lg:text-5xl text-4xl tracking-tight font-bold">
          Minard Siobal
        </h1>
        <h2 className="text-lg font-medium lg:text-2xl">Front End Developer</h2>
        <p className="opacity-60 group">
          Based in{" "}
          <span className="lg:cursor-[url('/assets/ph-flag.png'),_pointer] transition inline-flex">
            Philippines
          </span>
        </p>
      </div>

      <TableOfContents />

      <div>
        <div className="mb-6 lg:mb-16 relative rounded-md before:bg-conic before:content-[''] before:left-[-25%] before:top-[-100%] h-[50px] w-28 before:absolute before:h-[300%] before:w-[150%] bg-[#1A1A19] overflow-hidden before:animate-border-spin">
          <Link href="#contact">
            <button className="absolute bg-button-gradient left-[3px] top-[3px] ring-2 ring-white/5 h-[calc(100%-6px)] w-[calc(100%-6px)] font-bold px-4 py-2 rounded-md">
              Hire Me
            </button>
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-sm font-bold tracking-widest opacity-60">
            SAY HELLO
          </h1>
          <div className="flex gap-x-4">
            <div className="relative group">
              <Tooltip title={"X (Formerly Twitter)"} position={"-top-14"} />
              <Link href="https://twitter.com/_siobaldev" target="_blank">
                <X className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100" />
              </Link>
            </div>
            <div className="relative group">
              <Tooltip title={"Github"} position={"-top-14"} />
              <Link href="https://github.com/siobaldev" target="_blank">
                <Github className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100" />
              </Link>
            </div>
            <div className="group relative">
              <Tooltip title={"Linkedin"} position={"-top-14"} />
              <Link
                href="https://www.linkedin.com/in/minard-siobal-dev"
                target="_blank"
              >
                <Linkedin className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
