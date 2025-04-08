/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#0F1117",
          200: "#1F232F",
          300: "#171A23",
          400: "#272C3B",
          500: "#1a1a1a",
          600: "#3E465E",
          700: "#0C0D12",
          800: "#07080B",
        },

        "blue-mode": {
          100: "#00103C",
        },
        "gray-mode": {
          100: "#78829E",
        },
        "dark-blue": "rgba(31, 35, 47, 1)",
        "fluorescent-blue": "rgba(12, 179, 168, 1)",
      },
      fontFamily: {
        "sf-pro-display": ["Inter Display", "sans-serif"],
      },
      animation: {
        bounceOnce: "bounce 0.5s ease-in-out 1",
        pulseOnce: "pulse 0.7s ease-in-out 1",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(0)" },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
