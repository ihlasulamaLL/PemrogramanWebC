/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          gray: "#D9D9D9",
          darkGray: "#A1A1A1",
          primary: "#1e293b",
          accent: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
}
