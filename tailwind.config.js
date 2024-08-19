/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx,astro,css}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--cl-green1))",
        black_primary: "rgba(var(--cl-black))",
      },
    },
  },
  plugins: [],
};
