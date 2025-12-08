/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#F7F3F0",
      },
      boxShadow: {
        custom: "2px 2px 2px black",
      },
    },
  },
  plugins: [],
};
