import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3f5",
          100: "#dbe6ea",
          700: "#163341",
          800: "#102b38",
          900: "#0c2430",
          950: "#071923"
        },
        stonewarm: {
          50: "#fbfaf7",
          100: "#f5f1ea",
          200: "#e8dfd1",
          300: "#d7c9b7",
          700: "#6d6255",
          800: "#473f36",
          900: "#2e2924"
        },
        gold: {
          100: "#efe5cf",
          300: "#d5bd85",
          500: "#a8823d",
          700: "#705529"
        },
        sage: {
          100: "#e9eee8",
          300: "#bfccb9",
          700: "#596b55"
        }
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(12, 36, 48, 0.08)"
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
