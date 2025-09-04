"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import SendIcon from "@/public/assets/send.svg";
import { toast } from "sonner";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  access_key: z.string().nonempty({ message: "Access key is required." }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(formSchema) });

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from Website`);
  }, [userName, setValue]);

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
  }
  const apiKey = process.env.WEB3FORM_ACCESS_KEY;

  const onSubmit = async (data, e) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      const json = await response.json();
      if (json.success) {
        toast.success(json.message, {
          description:
            "Your message has been sent. I will get back to you as soon as possible.",
          duration: 5000,
          position: isMobile ? "top-center" : "bottom-right",
          classNames: {
            icon: "text-green-500",
            toast:
              "bg-secondary shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] text-white/87 drop-shadow-lg border-0",
            description: "text-white/60",
          },
        });
        e.target.reset();
        reset();
      } else {
        toast.error(json.message, {
          duration: 5000,
          position: isMobile ? "top-center" : "bottom-right",
          classNames: {
            icon: "text-red-500",
            toast:
              "bg-secondary shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] text-white/87 drop-shadow-lg border-0",
          },
        });
      }
    } catch (error) {
      console.error("Error occurred while sending email:", error);
      toast.error("Error occurred while sending email", {
        description: error.message,
        duration: 5000,
        position: isMobile ? "top-center" : "bottom-right",
        classNames: {
          icon: "text-red-500",
          toast:
            "bg-secondary shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] text-white/87 drop-shadow-lg border-0",
          description: "text-white/60",
        },
      });
    }
  };

  return (
    <section id="contact" className="space-y-8 scroll-mt-32">
      <h1 className="uppercase text-sm font-bold w-fit tracking-widest hover:text-accent hover:opacity-100">
        Contact
      </h1>

      <p>
        <span className="opacity-60">Please contact me directly at</span>{" "}
        <Link
          href="m&#97;ilt&#111;&#58;&#37;&#55;3&#98;%6&#67;&#109;nr%6&#52;%4&#48;g&#109;ail&#46;&#37;63&#111;m"
          className="focus"
        >
          &#115;b&#108;mnrd&#64;&#103;m&#97;&#105;l&#46;com
        </Link>{" "}
        <span className="opacity-60"> or through this form</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        <div className="space-y-6 md:space-y-0 lg:space-y-6 md:gap-x-4 md:flex md:items-center lg:block">
          <div className="flex md:flex-1 flex-col gap-y-2">
            <input type="hidden" value={apiKey} {...register("access_key")} />
            <label
              htmlFor="senderName"
              className={`${errors.name ? `text-red-500` : `text-white`}`}
            >
              Name/Company
            </label>
            <input
              {...register("name")}
              id="senderName"
              name="name"
              type="text"
              placeholder="Minard Siobal"
              className="bg-secondary px-4 py-3 rounded-md focus:ring-2 outline-none placeholder-white/30 ring-[1px] ring-white/[0.04] focus:ring-accent/60"
              maxLength={500}
            />
            {errors.name && (
              <p className="mt-1 text-xs tracking-wider text-red-500">
                {errors.name.message}
              </p>
            )}
            <div className="hidden ">Name must be at least 2 characters.</div>
          </div>

          <div className="flex md:flex-1 flex-col gap-y-2">
            <label
              htmlFor="email"
              className={`${errors.email ? `text-red-500` : `text-white`}`}
            >
              Email
            </label>
            <input
              {...register("email")}
              id="sendermail"
              name="email"
              type="email"
              placeholder="sblmnrd@gmail.com"
              className="bg-secondary px-4 py-3 rounded-md focus:ring-2 outline-none placeholder-white/30 ring-[1px] ring-white/[0.04] focus:ring-accent/60"
              maxLength={500}
            />
            {errors.email && (
              <p className="mt-1 text-xs tracking-wider text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-y-2 mb-4">
          <label
            htmlFor="senderMessage"
            className={`${errors.message ? `text-red-500` : `text-white`}`}
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="senderMessage"
            name="message"
            rows={4}
            placeholder="Hello, I'd like to request a quote for a custom website design..."
            className="bg-secondary px-4 py-3 resize-y min-h-32 rounded-md focus:ring-2 ring-[1px] placeholder-white/30 ring-white/[0.04] outline-none focus:ring-accent/60"
            maxLength={5000}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-xs tracking-wider text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-button-gradient justify-center py-3 rounded-md uppercase tracking-widest text-sm font-semibold flex gap-x-2 group items-center focus"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          <SendIcon className="size-4 fill-white group-hover:-translate-y-1 group-hover:translate-x-1 transition motion-reduce:transition-none" />
        </button>
      </form>
    </section>
  );
}
