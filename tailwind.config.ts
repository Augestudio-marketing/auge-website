import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        marfil: "#F0EAE0",
        hueso: "#EBE2D0",
        burgundy: "#5C1A1B",
        stone: "#2B2622",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-inter)"],
        signature: ["var(--font-signature)"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
