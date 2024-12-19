import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-white/87 container mt-32 flex flex-col gap-y-10">
      <Image
        src="/assets/siobal-logo.svg"
        width={44}
        height={44}
        alt="siobal-logo"
      />
      <div>
        <h1 className="text-6xl font-bold mb-4">
          Nothing to <br /> see here
        </h1>
        <p className="text-xl mb-8">
          Looks like this page doesn&apos;t exist. <br />
          Here&apos;s a picture of silly cat instead.
        </p>
        <Link
          href={"/"}
          className="bg-button-gradient px-8 py-4 rounded-md font-bold text-lg"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
