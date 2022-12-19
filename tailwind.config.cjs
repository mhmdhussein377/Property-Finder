/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "750px",
      lg: "1030px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
