import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0A8F4D",
          dark: "#066A39",
          mint: "#E8F7EF",
          soft: "#F8FAF9",
          ink: "#111827"
        },
        ink: "#111827"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(10, 143, 77, 0.16)",
        card: "0 18px 55px rgba(17, 24, 39, 0.08)",
        premium: "0 24px 80px rgba(6, 106, 57, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
