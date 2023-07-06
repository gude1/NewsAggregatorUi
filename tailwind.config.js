/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 51, 153, 1)",
      },
      fontFamily: {
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
