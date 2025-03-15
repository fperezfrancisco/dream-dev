/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "border-4",
    "border-gray-300",
    "border-solid",
    "outline",
    "outline-4",
    "outline-gray-300",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
