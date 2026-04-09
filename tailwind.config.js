/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0B0C",
          secondary: "#111113",
          tertiary: "#16161A",
        },
        border: {
          DEFAULT: "#1F1F23",
          bright: "#2A2A30",
        },
        text: {
          title: "#E4E4E7",
          body: "#A1A1AA",
          muted: "#71717A",
        },
        accent: {
          DEFAULT: "#6366F1",
          purple: "#8B5CF6",
          glow: "#818CF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
