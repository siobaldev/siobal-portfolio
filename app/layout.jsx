import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400 500 700 900",
});

const description =
  "Hey there! I'm Minard Siobal, a web developer crafting artistic and functional digital experiences that blend elegant design with intuitive interactions.";

export const metadata = {
  title: "Minard Siobal",
  description: description,
  keywords: [
    "Minard Siobal",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Explore Minard Siobal’s Portfolio – Web Developer.",
    description: description,
    url: "https://siobal-portfolio.vercel.app/",
    siteName: "Minard Siobal Portfolio",
    images: [
      {
        url: "https://siobal-portfolio.vercel.app/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Minard Siobal Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Minard Siobal’s Portfolio – Web Developer.",
    description: description,
    images: ["https://siobal-portfolio.vercel.app/assets/og-image.png"],
  },
  verification: {
    google: "Zfuql6i4ntFcw5ESM4-gucPqhmam6CqDLr62PBe_TL4",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/favicon/favicon.svg"
        />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Minard Siobal | Portfolio"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} antialiased font-sans bg-primary`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
