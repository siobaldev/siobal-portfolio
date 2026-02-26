"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState(null);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const observers = [];
    const observerCallback = (entries) => {
      if (!isManualScroll) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.title);
          }
        });
      }
    };

    const setupObservers = () => {
      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      });

      navItems.forEach((item) => {
        const sectionId = item.title.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.dataset.title = item.title;
          observer.observe(element);
        }
      });
    };

    setupObservers();

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsManualScroll(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isManualScroll]);

  const handleLinkClick = (title) => {
    setIsManualScroll(true);
    setActiveSection(title);
  };

  return (
    <div className="hidden lg:flex lg:flex-col gap-y-3 mb-6">
      {navItems.map((item) => (
        <ul key={item.href}>
          <li className="list-none">
            <Link
              href={item.href}
              onClick={() => handleLinkClick(item.title)}
              className={cn(
                "flex transition items-center gap-x-4 w-fit before:content-[''] before:hover:w-20 hover:text-white/100 before:hover:bg-white/100 before:w-10 before:h-[1px] before:bg-white/60 text-white/60 before:transition-all before:duration-300 before:ease-in-out before:opacity-60 focus",
                {
                  "before:bg-white/100 before:w-20 text-white/100 before:transition-all before:duration-300 before:ease-in-out before:opacity-100":
                    activeSection === item.title,
                },
              )}
            >
              <span className="uppercase tracking-widest text-sm font-medium">
                {item.title}
              </span>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
