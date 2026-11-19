/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "Carbón y Champán": neutros cálidos + un único acento dorado
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F6F5F2", // blanco cálido
          muted: "#EFEDE8",
        },
        line: {
          DEFAULT: "#E6E3DC",
          soft: "#EFEDE8",
        },
        ink: {
          title: "#111418",
          body: "#4A5059",
          muted: "#8A9099",
        },
        // Fondos oscuros y botón primario
        carbon: {
          700: "#2A2F37",
          800: "#1C2026",
          900: "#12151A",
          950: "#0B0D10",
        },
        // Único acento: champán / oro
        gold: {
          50: "#FBF7EC",
          100: "#F4EBD3",
          200: "#E9D8A8",
          300: "#E0C783",
          400: "#D8B866",
          500: "#C9A24B",
          600: "#B08A35",
          700: "#8A6A1F", // texto sobre fondo claro (AA)
          800: "#6B5218",
          900: "#4A3910",
          950: "#2A200A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17,20,24,0.04), 0 8px 24px -12px rgba(17,20,24,0.10)",
        lift: "0 2px 4px rgba(17,20,24,0.04), 0 24px 48px -16px rgba(17,20,24,0.16)",
        brand: "0 12px 32px -12px rgba(11,13,16,0.45)",
        "brand-lg": "0 18px 48px -14px rgba(11,13,16,0.55)",
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
