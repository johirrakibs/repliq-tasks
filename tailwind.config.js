/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ash: "#e7e9f6",
        ash1:"#eef0f9",
        blue:"#5c6ac4",
        red:"#fadedd"
      },
    },
  },
  plugins: [],
};
