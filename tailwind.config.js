/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class" means Tailwind applies dark: classes
  // only when a parent element has class="dark"
  // Our ThemeContext wraps everything in <div class="dark"> when dark=true
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
