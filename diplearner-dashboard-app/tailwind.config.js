/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0vw 0vw 0.5vw 0vw rgb(32 32 32 / 12%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
      },
      colors: {
        'defult': '#009fe9',
      },
    },
  },
  presets: [keepPreset],
};
