import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "marime-blue": " #02295a",
          "purplish-blue": "	#473dff",
          "pastel-blue": " 	#adbeff",
          "light-blue": " #bfe2fd",
          "strawberry-red": " 	#ed3548",
        },
        neutral: {
          "cool-gray": "	#9699ab",
          "light-gray": " 	#d6d9e6",
          magnolia: "	#f0f6ff",
          alabaster: " 	#fafbff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
