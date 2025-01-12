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
        },
        "dark-blue": "rgba(31, 35, 47, 1)",
        "fluorescent-blue": "rgba(12, 179, 168, 1)",
      },
    },
    fontFamily: {
      "sf-pro-display": ["SF Pro Display", "sans-serif"],
    },
  },
  plugins: [],
};
