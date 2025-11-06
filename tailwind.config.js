// tailwind.config.js
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ohno: ["var(--font-ohno)"],
        ohno: ['"Ohno Softie Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

