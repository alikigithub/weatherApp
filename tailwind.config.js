/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bground: "#13131A",
        gray: "#FFFFFF",
        bluelight: "#8FB2F5",
        BaseGray: "#BFBFD4",
        darkgray: "#1E1E29",
        lightGary: "#3B3B54",
        headingGray: "#FAFAFA",
        fullgray: "#16161F",
        headGray: "#7F7F98",
        bgcard: "#16161F",
      },
      screens: {},
    },
  },
  plugins: [],
};
