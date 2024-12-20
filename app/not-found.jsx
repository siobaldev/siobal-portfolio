import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-white/87 relative h-screen bg-accent">
      <div>
        <div className="bg-primary h-[45vh] top-0 absolute w-screen">
          <svg
            width="1440"
            height="200"
            viewBox="0 0 1440 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary h-auto top-full absolute w-full"
          >
            <path d="M708 103l9-5 13 1 2-2 5 1h8l1-1 42-5h7l7 3v1l12-2a9368 9368 0 0129-6l2-5 12 1 6-2 3 1 2 1v-2l13-2v1l4 2 7-1h1l17-3 1 2 4-1 18-7 3-1 4-1h9l13-1 1-4 3-2 13 1v2l22-2 10-3h6l10 5 16-5 15-3 2-1 8-4 6-2 12-1 7-2 8 5 7 1 22-9h7l5-1v-1l25-3 1 2 5 2v1h11l2 1 8-4h3l-1 1h11l10-6 6 3 9-1 4-1 1 1 1-2 6-1 1-1 10-2h2l7-5v1h4l3-1c11 0 23 2 34-3 2-2 7 0 10 0l12 1 4 1 9 2 12-1 11-3 11 1h4l10-6 17 1 2 1c9 2 19-3 22-11l1-1 9 1 15-5c3-1 9 4 9-5 5 0 5 3 5 7l2 3 4-1 4-2 9-4 3-3h3l8-4 6-3 26 2 7-4h18l7 1c10 3 13-6 17-12l8 4 3-1 14-3 15-2a38 38 0 01-5-1l-8-4 7-8 8-4-10-136-922 71 16 205z" />
            <path d="M-36 193l9-5 13 1 2-2 5 1h8l1-1 42-5h7l7 3v1l12-2a9328 9328 0 0129-6l2-5 12 1 6-2 3 1 2 1v-2l13-2v1l4 2 7-1h1l17-3 1 2 4-1 18-7 3-1 4-1h9l13-1 1-4 3-2 13 1v2l22-2 10-3h6l10 5 16-5 15-3 2-1 8-4 6-2 12-1 7-2 8 5 7 1 22-9h7l5-1v-1l25-3 1 2 5 2v1h11l2 1 8-4h3l-1 1h9a6 6 0 002 0l10-6 6 3 9-1 4-1a6 6 0 001 1l1-2 6-1 1-1 10-2h2l7-5v1h4l3-1c11 0 23 2 34-3 2-2 7 0 10 0l12 1 4 1 9 2 12-1 11-3 11 1h4l10-6 17 1 2 1c9 2 19-3 22-11l1-1 9 1 15-5c3-1 9 4 9-5 5 0 5 3 5 7l2 3 4-1 4-2 9-4 3-3h3l8-4 6-3 26 2 7-4h18l7 1c10 3 13-6 17-12l8 4 3-1 14-3 15-2a37 37 0 01-5-1l-8-4 7-8 8-4-10-136-922 71 16 205z" />
          </svg>
        </div>
        <div className="container h-screen relative z-40">
          <div className="pt-12 w-fit">
            <Image
              src="/assets/siobal-logo.svg"
              width={44}
              height={44}
              alt="siobal-logo"
              className="mb-12"
            />
            <h1 className="md:text-6xl text-3xl font-bold mb-4">
              Nothing to <br /> see here
            </h1>
            <p className="md:text-xl text-sm mb-8">
              Looks like this page doesn&apos;t exist. <br />
              Here&apos;s a picture of silly cat instead.
            </p>
            <Link
              href={"/"}
              className="bg-button-gradient px-8 py-4 rounded-md font-bold md:text-lg text-sm"
            >
              Return Home
            </Link>
          </div>
          <Image
            className="size-[clamp(10rem,30rem+10vw,50rem)] bottom-0 right-0 scale-x-[-1] absolute"
            src={"/assets/pop-cat.gif"}
            width={100}
            height={100}
            alt="pop-cat"
          />
        </div>
      </div>
    </main>
  );
}
