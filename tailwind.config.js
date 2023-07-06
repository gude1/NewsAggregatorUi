/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 51, 153, 1)",
        color1: "#4764e6",
        color2: "#1E1E1E",
        color3: "#3D3D3D",
      },
      fontFamily: {
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
