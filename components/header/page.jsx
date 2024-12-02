import React from "react";
import { navItems } from "@/lib/data";
import Link from "next/link";

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
        <div className="mb-6">
          <Link href="#contact">
            <button className="bg-button-gradient font-bold px-4 py-1 ring-4 rounded-md ring-white/[.1]">
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
              <span className="absolute bg-secondary border-2 border-white/5 -top-14 left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg bg-button px-4 py-2 text-sm font-medium text-white/60 shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100">
                X(Twitter)
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100"
                viewBox="0 0 448 512"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z" />
              </svg>
            </div>
            <div className="relative group">
              <span className="absolute bg-secondary border-2 border-white/5 -top-14 left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg bg-button px-4 py-2 text-sm font-medium text-white/60 shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100">
                Github
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2" />
              </svg>
            </div>
            <div className="group relative">
              <span className="absolute bg-secondary border-2 border-white/5 -top-14 left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg bg-button px-4 py-2 text-sm font-medium text-white/60 shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100">
                Linkedin
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-white opacity-60 hover:fill-accent hover:opacity-100"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
