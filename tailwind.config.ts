import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050B14",
        panel: "#0B1321",
        card: "#0E1624",
        muted: "#9AA4B2",
        line: "rgba(154, 164, 178, 0.16)",
        green: "#52E58C",
        gold: "#E4B15B",
        blue: "#4DA8FF",
        purple: "#B36DFF"
      },
      boxShadow: {
        glow: "0 0 50px rgba(82, 229, 140, 0.16)",
        card: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
