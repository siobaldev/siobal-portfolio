import React from "react";
import Image from "next/image";
import Link from "next/link";
import Github from "@/public/assets/github.svg";
import { projectItems } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 scroll-mt-32">
      <h1 className="uppercase text-sm font-bold w-fit tracking-widest hover:text-accent hover:opacity-100">
        projects
      </h1>
      <div className="space-y-16">
        {projectItems.map((item) => (
          <div className="block group relative">
            <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-secondary lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <Link
              key={item.title}
              href="/"
              className="inline-flex items-center gap-x-2 relative"
            >
              <Image
                className="size-6 hover:opacity-100"
                src={item.icon}
                width={100}
                height={100}
                alt={item.alt}
              />
              <div className="group/link flex gap-x-2">
                <h1 className="font-medium after:content-inline-flex transition hover:text-accent ">
                  {item.title}
                </h1>
                <span className="group-hover/link:-translate-y-[2px] transition group-hover/link:text-accent motion-reduce:transition-none group-hover/link:translate-x-1 translate-y-[2px]">
                  ↗
                </span>
              </div>
            </Link>
            <p className="opacity-60 text-sm">{item.description}</p>
            <Link
              href={item.githubLink}
              target="_blank"
              className="mt-4 flex gap-x-2 group/github"
            >
              <Github className="size-6 fill-white opacity-60 group-hover/github:fill-accent group-hover/github:transition-all group-hover/github:opacity-100" />
              <span className="opacity-60 group-hover/github:text-accent group-hover/github:transition-all text-sm group-hover/github:opacity-100">
                {item.githubLink}
              </span>
            </Link>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tag.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-white/[0.03] text-sm text-white/60 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
