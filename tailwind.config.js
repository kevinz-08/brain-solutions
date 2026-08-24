/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Superficies claras
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC", // slate-50
          muted: "#F1F5F9", // slate-100
        },
        line: {
          DEFAULT: "#E2E8F0", // slate-200
          soft: "#F1F5F9",
        },
        ink: {
          title: "#0F172A", // slate-900
          body: "#475569", // slate-600
          muted: "#94A3B8", // slate-400
        },
        // Acento morado
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          950: "#2E1065",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.10)",
        lift: "0 2px 4px rgba(15,23,42,0.04), 0 24px 48px -16px rgba(15,23,42,0.16)",
        brand: "0 12px 32px -10px rgba(124,58,237,0.55)",
        "brand-lg": "0 18px 48px -12px rgba(124,58,237,0.65)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "marquee-x": "marquee-x 38s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
