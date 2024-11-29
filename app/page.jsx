import Header from "@/components/header/page";
import Main from "@/components/main/page";
export default function HomePage() {
  return (
    <div className="container gap-y-20 flex flex-col lg:flex-row min-h-screen max-w-screen-[1200px] lg:px-24 py-14 md:py-20 lg:py-32 text-white/87">
      <Header />
      <Main />
    </div>
  );
}
