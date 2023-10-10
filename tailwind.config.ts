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
        "4.5xl": "2.5rem",
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
        "tb-ash": "#6B7280",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "17.5": "68px",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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

        "xlarge-marquee": "xlarge-marquee 70s linear infinite",
        "xlarge-marquee2": "xlarge-marquee2 70s linear infinite",
        "xlarge-marqueeReverse": "xlarge-marquee 72s reverse infinite",
        "xlarge-marqueeReverse2": "xlarge-marquee2 72s reverse infinite",

        "rotating-words-tb": "rotating-words-tb 8s infinite",
      },
      keyframes: {
        "rotating-words-tb": {
          "0%": { transform: "translateY(-67%)" },
          "50%": { transform: "translateY(-33%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
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
          "100%": { transform: "translateX(-133%)" },
        },
        "large-marquee2": {
          "0%": { transform: "translateX(133%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "xlarge-marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-130%)" },
        },
        "xlarge-marquee2": {
          "0%": { transform: "translateX(130%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
