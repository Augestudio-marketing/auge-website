import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F3ECE2",
        marfil: "#F3ECE2",
        hueso: "#DCD1C2",
        arena: "#DCD1C2",
        piedra: "#A5988A",
        burgundy: "#5C1B21",
        "burgundy-deep": "#3D1014",
        chocolate: "#4A3122",
        stone: "#4A3122",
      },
      fontFamily: {
        display: ["var(--font-display)"],
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
