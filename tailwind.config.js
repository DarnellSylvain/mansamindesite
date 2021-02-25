const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      text_color: "#4B5563",
      heading_color: "#111827",
      ...colors,
    },

    maxHeight: {
      yt: "369px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
