/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        athensGray: "#FCFCFD",
        bunting: "#172554",
        torchRed: "#FF1D40",
      },
    },
  },
  plugins: [],
};
