import React from "react";
import { navItems } from "@/lib/data";
import Link from "next/link";
import X from "@/public/assets/x.svg";
import Github from "@/public/assets/github.svg";
import Linkedin from "@/public/assets/linkedin.svg";
import Tooltip from "../ui/tooltip";

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

      <div className="hidden lg:flex lg:flex-col gap-y-2">
        {navItems.map((item) => (
          <li key={item.href} className="list-none">
            <Link
              href={item.href}
              className="flex group transition items-center gap-x-4 w-fit"
            >
              <span className="w-10 group-hover:w-20 duration-300 group-hover:opacity-100 opacity-60 h-[1px] bg-white" />
              <span className="uppercase tracking-widest opacity-60 group-hover:transition group-hover:ease-in-out duration-300 group-hover:opacity-100 text-sm font-medium">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </div>
      <div>
        <div className="mb-6 lg:mb-16 relative rounded-md before:bg-conic before:content-[''] before:left-[-25%] before:top-[-100%] h-[50px] w-28 before:absolute before:h-[300%] before:w-[150%] bg-[#1A1A19] overflow-hidden before:animate-border-spin">
          <Link href="#contact">
            <button className="absolute bg-accent left-[3px] top-[3px] ring-2 ring-white/5 h-[calc(100%-6px)] w-[calc(100%-6px)] font-bold px-4 py-2 rounded-md">
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
              <Tooltip title={"X (Formerly Twitter)"} />
              <Link href="https://twitter.com/_siobaldev" target="_blank">
                <X className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100" />
              </Link>
            </div>
            <div className="relative group">
              <Tooltip title={"Github"} />
              <Link href="https://github.com/siobaldev" target="_blank">
                <Github className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100" />
              </Link>
            </div>
            <div className="group relative">
              <Tooltip title={"Linkedin"} />
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
