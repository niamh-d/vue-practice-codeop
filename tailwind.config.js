/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "nord",
      "dark",
      "winter",
      "cupcake",
      "dracula",
      "sunset",
      "lemonade",
      "garden",
      "pastel",
      "valentine",
      "forest",
    ],
  },
};

// npx tailwindcss -i ./src/index.css -o .src/output.css --watch
