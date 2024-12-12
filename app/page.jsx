import Header from "@/components/header/page";
import About from "@/components/about/page";
import Projects from "@/components/projects/page";
import Technologies from "@/components/technologies/page";
import Contact from "@/components/contact/page";

export default function HomePage() {
  return (
    <div className="container relative lg:gap-y-20 flex flex-col lg:flex-row min-h-screen max-w-screen-[1200px] max-[400px]:px-6 gap-y-12 md:gap-y-0 sm:px-20 px-10 min-w-[320px] text-white/87">
      <div className="grain -z-20 absolute flex items-center justify-center opacity-[0.02] h-full w-full bg-no-repeat bg-cover" />
      <Header />
      <main className="lg:w-1/2 lg:space-y-36 space-y-20 md:space-y-28 mb-[114px] md:py-20 lg:py-32">
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}
