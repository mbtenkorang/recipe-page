/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nutmeg: "hsl(14, 45%, 36%)",
        darkraspberry: "hsl(332, 51%, 32%)",
        neutralwhite: "hsl(0, 0%, 100%)",
        rosewhite: "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        lightgrey: "hsl(30, 18%, 87%)",
        wengebrown: "hsl(30, 10%, 34%)",
        darkcharcoal: "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        serif: ["Young Serif", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
