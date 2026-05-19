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
        "feva-dark": "#023e44",
        "feva-teal": "#2e8278",
        "feva-teal-light": "#25c7b1",
        "feva-purple": "#9731a1",
        "feva-purple-light": "#b667c0",
        "feva-gray": "#6a6a6a",
        "feva-gray-dark": "#555555",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "feva-gradient": "linear-gradient(68.75deg, rgb(46, 130, 120) 28.77%, rgb(151, 49, 161) 193.41%)",
        "feva-bg-gradient": "linear-gradient(180deg, rgba(37, 199, 177, 0.05) 0%, rgba(0, 101, 110, 0.05) 48.3%, rgba(151, 49, 161, 0.05) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-delayed": "float-delayed 6s ease-in-out infinite 1s",
        "slide-up": "slide-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
