import Header from "@/components/header/page";
import Main from "@/components/main/page";

export default function HomePage() {
  return (
    <div className="container relative lg:gap-y-20 flex flex-col lg:flex-row min-h-screen max-w-screen-[1200px] max-[400px]:px-6 gap-y-12 md:gap-y-0 sm:px-20 px-10 min-w-[320px] text-white/87">
      <div className="grain -z-20 absolute flex items-center justify-center opacity-[0.01] h-full w-full bg-no-repeat bg-cover" />
      <Header />
      <Main />
    </div>
  );
}
