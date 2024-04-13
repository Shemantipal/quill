/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'typewriter-effect': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

