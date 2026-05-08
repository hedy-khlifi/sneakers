/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        brand: {
          black: "#0A0A0A",
          white: "#F5F5F0",
          red: "#E63329",
          orange: "#FF6B35",
          gray: "#1A1A1A",
          "gray-mid": "#2A2A2A",
          "gray-light": "#888888",
          accent: "#FFD700",
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
