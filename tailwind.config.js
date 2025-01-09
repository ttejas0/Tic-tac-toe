/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Custom-Deep-Ocean-Blue': '#213555',
        'Custom-Slate-Blue': '#3E5879',
        'Custom-Soft-Beige': '#D8C4B6',
        'Custom-Ivory-Cream': '#F5EFE7',
      }
    },
  },
  plugins: [],
}

