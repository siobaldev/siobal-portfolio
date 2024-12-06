import React from "react";

export default function Tooltip({ title, position }) {
  return (
    <>
      <span
        className={`absolute whitespace-nowrap bg-secondary border-2 border-white/5 ${position} left-1/2 z-20 -translate-x-1/2 scale-0 transform rounded-lg bg-button px-4 py-2 text-sm font-medium text-white/60 shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-100`}
      >
        {title}
      </span>
    </>
  );
}
