/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {extend: {
    backgroundImage: {
      'hero-pattern': "url('./src/assets/hero.png'), linear-gradient(#1237, #1237, #1237)",
      'program1': "url('./src/assets/program-icon-1.png'), linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7))",
      'program2': "url('./src/assets/program-icon-2.png'), linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7))",
      'program3': "url('./src/assets/program-icon-3.png'), linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.7))",
    },  
    },
  },
  plugins: [],
}