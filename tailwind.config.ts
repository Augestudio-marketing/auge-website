import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        burgundy: "#5C1A1B",
        stone: "#2B2622",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)"],
        sans: ["var(--font-inter)"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
