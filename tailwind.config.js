/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 51, 153, 1)",
        "color-bg": "#F9FAFB",
        color1: "#4764e6",
        color2: "#1E1E1E",
        color3: "#3D3D3D",
        color4: "#0a66c2",
      },
      fontFamily: {
        inter: ["inter"],
        chirp: ["chirp"],
      },
      keyframes: {
        loading: {
          to: {
            "background-position-x": "-20%",
          },
        },
      },
      animation: {
        loading: "loading 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
