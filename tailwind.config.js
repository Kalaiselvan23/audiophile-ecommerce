/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        "xx99":"url('/public/images/home/desktop/image-hero.jpg')",
        "zx7":"url('/public/images/home/desktop/image-speaker-zx7.jpg')"
      }
    },
  },
  plugins: [],
}

