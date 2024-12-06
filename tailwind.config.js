import { transform } from "next/dist/build/swc/generated-native";
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
        secondary: "hsl(0, 0%, 9%)",
        accent: "hsl(18, 26%, 52%)",
        selection: "",
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
      },

      backgroundImage: {
        "button-gradient":
          "linear-gradient(to right, hsl(16, 21%, 31%), hsl(18, 26%, 52%), hsl(17, 16%, 22%))",
        conic:
          "conic-gradient(from 10deg, rgba(255, 255, 255, 0.6), transparent, transparent)",
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
