import { Container } from "postcss";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: { sm: "100%", md: "100%", lg: "100%", xl: "1200px" },
      },
      colors: {
        primary: "hsl(0, 0%, 7%)",
        accent: "hsl(8, 72%, 55%)",
        selection: "",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      opacity: {
        87: ".87",
      },
    },
  },
  plugins: [],
};
