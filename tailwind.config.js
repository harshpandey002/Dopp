/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [
          "Poppins, sans-serif",
          { fontFeatureSettings: '"cv11", "ss01"' },
        ],
      },

      colors: {
        primary: "#333333",
        secondary: "#7A7A7A",
      },

      gridTemplateColumns: {
        campaigns: "repeat(auto-fill, minmax(340px, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
