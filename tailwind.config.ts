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
        primary: "#6759B6",
        "primary-dark": "#5B4DA5",
        "primary-darker": "#4A4A7C",
        "primary-light": "#A098CC",
        bg: "#F5F5FE",
        "card-bg": "#F4F4F5",
        "text-dark": "#1D1930",
        "text-body": "#27272A",
        "text-muted": "#68618C",
        "text-light": "#A098CC",
        "accent-blue": "#74B8EF",
        "accent-navy": "#3A52C9",
        "accent-pink": "#E9A5C6",
        "accent-purple": "#B500FF",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #6759B6 0%, #3A52C9 60%, #74B8EF 100%)",
        "card-gradient": "linear-gradient(135deg, #5B4DA5 0%, #3A52C9 100%)",
        "progress-gradient": "linear-gradient(90deg, #6759B6 0%, #3A52C9 50%, #E9A5C6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
