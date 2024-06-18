/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        arabic: ["arabic", "sans-serif"],
        sansArabic: ["sansArabic", "sans-serif"],
        Mont: ["Mont", "sans-serif"],
      },
      colors: {
        primary: "#FEC3A6",
        secondary: "#685044",
        dark: "#000000",
        gray: "#DDDBCC",
        bage: "#D1DDCB",
        grayLight: "#DDD1CC",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
