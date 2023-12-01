/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js",
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
        'defult': '#F27851',
        'defult-100':"#f2795121",
        'defult-200':"#f2795121",
        'defult-300':"#f2795136",
        'defult-400':"#f279514f",
        'defult-500':"#f2795170",
        'defult-600':"#f2795196",
        'defult-700':"#f27951b6",
        'defult-800':"#f27951d5",
        'defult-900':"#f27951ec",
      },
    },
  },
  plugins: [],
};
