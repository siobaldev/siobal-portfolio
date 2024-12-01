import React from "react";
import { techItems } from "@/lib/data";
import Image from "next/image";

export default function Technologies() {
  return (
    <section id="#technologies" className="space-y-8">
      <h1 className="uppercase text-sm font-bold w-fit tracking-widest hover:text-accent hover:opacity-100">
        Technologies
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {techItems.map((item) => (
          <div
            key={item.title}
            className="inline-flex p-2 items-center gap-x-4 rounded-lg bg-secondary"
          >
            <div
              className={`p-2 pl-2 ${item.bgColor} rounded-md`}
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
              <p className="text-sm opacity-60">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
