/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.vitepress/theme/**/*.{vue,js,ts,jsx,tsx,md}',
    './docs/**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
