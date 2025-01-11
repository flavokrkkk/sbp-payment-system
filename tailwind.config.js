/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#0F1117",
          200: "#1F232F",
        },
      },
    },
    fontFamily: {
      "sf-pro-display": ["SF Pro Display", "sans-serif"],
    },
  },
  plugins: [],
};
