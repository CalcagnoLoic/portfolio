/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tuatara: "#1F1F1E",
        torchRed: "#FF1D40",
        gallery: "#EBEBEB",
      },
      screens: {
        "2xl": "1362px",
      },

    },
  },
  plugins: [],
};
