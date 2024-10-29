/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { max: "320px"},
      md: { max: "375px", min: "321px" },
      lg: { max: "425px", min: "376px"},
      xl: { max: "768px", min: "426px"},
      xxl: { max: "1024px", min: "769px" }
    }
  },
  plugins: [],
}

