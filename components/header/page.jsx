"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "../ui/tooltip";
import { socialIcons } from "@/lib/data";
import TableOfContents from "../tableOfContents/page";

export default function Header() {
  return (
    <header className="lg:flex lg:top-0 max-h-screen lg:flex-col py-14 md:py-20 lg:py-32 lg:w-1/2 lg:justify-between lg:sticky">
      <div className="mb-6">
        <h1 className="lg:text-5xl text-4xl tracking-tight font-bold">
          Minard Siobal
        </h1>
        <h2 className="text-lg font-medium lg:text-2xl">Web Developer</h2>
        <p className="opacity-60 group">
          Based in{" "}
          <span className="lg:cursor-[url('/assets/ph-flag.png'),_pointer] transition inline-flex">
            Philippines
          </span>
        </p>
      </div>

      <TableOfContents />

      <div>
        <div className="mb-6 lg:mb-16 relative rounded-md before:bg-conic before:content-[''] before:left-[-25%] before:top-[-100%] h-[50px] w-28 before:absolute before:h-[300%] flex items-center justify-center before:w-[150%] bg-[#1A1A19] overflow-hidden before:animate-border-spin">
          <Link
            href="#contact"
            className="absolute flex items-center justify-center bg-button-gradient h-[calc(100%-6px)] w-[calc(100%-6px)] font-bold px-4 py-2 !rounded-md"
          >
            Hire Me
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-sm font-bold tracking-widest opacity-60">
            SAY HELLO
          </h1>
          <div className="flex gap-x-4">
            {socialIcons.map((social) => (
              <ul key={social.tooltip}>
                <li className="relative group rounded-sm">
                  <Tooltip title={social.tooltip} position={"-top-14"} />
                  <Link
                    rel="noopener noreferrer"
                    href={social.link}
                    target="_blank"
                    className="focus flex"
                    aria-label={social.label}
                  >
                    <social.icon className="size-6 rounded-md fill-white opacity-60 hover:fill-accent hover:opacity-100" />
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
