import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400 500 700 900",
});

export const metadata = {
  title: "Minard Siobal | Portfolio",
  description: "A portfolio to showcase my projects and skills/technologies.",
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
      </body>
    </html>
  );
}
