import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        peach: "rgb(238, 192, 159)",
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        opensans: ["var(--font-opensans)"],
        notoserif: ["var(--font-notoserif)"],
        inter: ["var(--font-inter)"],
      },
      objectPosition: {
        "custom-center": "58%",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      padding: {
        DEFAULT: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
