import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080d10",
        "ink-2": "#161d21",
        "ink-3": "#272727",
        paper: "#fffefd",
        orange: "#ff7a00"
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        caption: "0.145em"
      },
      borderRadius: {
        section: "clamp(40px, 5.55vw, 80px)"
      },
      boxShadow: {
        glow: "0 28px 120px rgba(255, 122, 0, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
