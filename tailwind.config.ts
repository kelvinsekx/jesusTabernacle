import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "4.5xl": [
          "2.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
      },
      width: {
        "38": "9.375rem",
      },
      height: {
        "38": "9.375rem",
      },
      colors: {
        "tb-green": "#148745",
        "tb-black": "#222222",
        "tb-grey2": "#4F4F4F",
        "tb-grey3": "#828282",
        "tb-grey6": "#F2F2F2",
        "tb-gold": "#FFBF00",
      },
      spacing: {
        "17.5": "68px",
      },
      animation: {
        strok: "strok 2s",
        "strok-reverse": "strok 2s reverse",
        marquee: "marquee 42s linear infinite",
        marquee2: "marquee2 42s linear infinite",
        marqueeReverse: "marquee 45s reverse infinite",
        marqueeReverse2: "marquee2 45s reverse infinite",

        "large-marquee": "large-marquee 70s linear infinite",
        "large-marquee2": "large-marquee2 70s linear infinite",
        "large-marqueeReverse": "large-marquee 72s reverse infinite",
        "large-marqueeReverse2": "large-marquee2 72s reverse infinite",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        strok: {
          "100%": {
            "stroke-dashoffset": "400",
            fill: "transparent",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-280%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(280%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "large-marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-140%)" },
        },
        "large-marquee2": {
          "0%": { transform: "translateX(140%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
