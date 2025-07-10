/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        text: {
          primary: "#EEEEEE",
          secondary: "#a9a9a9",
        },
        backgroundDark: "#222831",
        backgroundLight: "#393E46",
        highlight: "#00ADB5",
        light: "#EEEEEE",
        darkTone1: "#181818",
        darkTone2: "#202020",
        textColor: "#a9a9a9",
        lightHalfOpacity: "#ffffff0d",
      },
    },
  },
  plugins: [],
};
