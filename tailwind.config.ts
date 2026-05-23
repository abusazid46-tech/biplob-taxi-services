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
        brand: {
          red: "#d71920",
          dark: "#09090b",
          ink: "#18181b",
          soft: "#fff5f5"
        }
      },
      boxShadow: {
        lift: "0 20px 60px rgba(9, 9, 11, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
