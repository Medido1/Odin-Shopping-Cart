/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mobileMenu': "rgba(248,248,248, .5)",
      },
      "starShape": `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%,
      79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,
    },
    
  },
  plugins: [],
}

