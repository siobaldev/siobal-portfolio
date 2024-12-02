"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [result, setResult] = useState("Send Message");

  async function handleSubmit(e) {
    e.preventDefault();
    setResult("Sending...");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cb5edd12-abfe-4cac-9432-602ff6618e40",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const res = await response.json();
    if (result.success) {
      setResult(res.message);
      e.target.reset();
    } else {
      setResult(res.message);
    }
  }

  return (
    <section id="contact" className="space-y-8">
      <h1 className="uppercase text-sm font-bold w-fit tracking-widest hover:text-accent hover:opacity-100">
        Contact
      </h1>

      <p>
        <span className="opacity-60">Please contact me directly at</span>{" "}
        <Link href="m&#97;ilt&#111;&#58;&#37;&#55;3&#98;%6&#67;&#109;nr%6&#52;%4&#48;g&#109;ail&#46;&#37;63&#111;m">
          &#115;b&#108;mnrd&#64;&#103;m&#97;&#105;l&#46;com
        </Link>{" "}
        <span className="opacity-60"> or through this form</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <div className="space-y-6 md:space-y-0 lg:space-y-6 md:gap-x-4 md:flex md:items-center lg:block">
          <div className="flex md:flex-1 flex-col gap-y-2">
            <label htmlFor="senderName">Name/Company</label>
            <input
              id="senderName"
              name="name"
              type="name"
              placeholder="Minard Siobal"
              className="bg-secondary px-4 py-3 rounded-md focus:ring-2 outline-none placeholder-white/30 ring-[1px] ring-white/[0.04] focus:ring-accent/60"
              required
            />
          </div>

          <div className="flex md:flex-1 flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="sendermail"
              name="email"
              type="email"
              placeholder="sblmnrd@gmail.com"
              className="bg-secondary px-4 py-3 rounded-md focus:ring-2 outline-none placeholder-white/30 ring-[1px] ring-white/[0.04] focus:ring-accent/60"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="senderMessage">Message</label>
          <textarea
            id="senderMessage"
            name="message"
            rows={4}
            placeholder="Hello, I'd like to request a quote for a custom website design..."
            className="bg-secondary px-4 py-3 resize-none rounded-md focus:ring-2 ring-[1px] placeholder-white/30 ring-white/[0.04] outline-none focus:ring-accent/60"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-button-gradient justify-center py-3 rounded-md uppercase tracking-widest text-sm font-semibold flex gap-x-2 group items-center"
        >
          {result}
          <svg
            className="size-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition motion-reduce:transition-none"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0069 1.72267L3.08104 4.95415C1.36306 5.38365 1.1486 7.73842 2.76073 8.47124L6.74326 10.2815C7.55976 10.6526 8.44362 10.7867 9.30253 10.6952C9.21103 11.5541 9.34503 12.4379 9.7162 13.2544L11.5265 17.2369C12.2593 18.8491 14.614 18.6346 15.0435 16.9167L18.2749 3.99071C18.6174 2.62096 17.3767 1.38024 16.0069 1.72267ZM7.43293 8.76416C8.21383 9.11916 9.08787 9.14624 9.87053 8.86866C10.1664 8.76374 10.4491 8.61524 10.7089 8.42449C10.745 8.39791 10.7808 8.37049 10.816 8.34232L12.7234 6.81644C13.0269 6.57358 13.4241 6.97075 13.1812 7.27432L11.6554 9.18166C11.6271 9.21691 11.5998 9.25266 11.5732 9.28882C11.3825 9.54857 11.234 9.83132 11.129 10.1272C10.8514 10.9098 10.8785 11.7838 11.2334 12.5647L13.0437 16.5472C13.1235 16.7227 13.3799 16.6994 13.4266 16.5124L16.6581 3.58648C16.6954 3.43736 16.5603 3.3023 16.4112 3.33958L3.48528 6.57106C3.29824 6.61781 3.2749 6.87416 3.4504 6.95393L7.43293 8.76416Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
