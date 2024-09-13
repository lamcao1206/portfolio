/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        nodeGreen: "#3C873A", // Node.js documentation green color
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
      },
      animation: {
        move: "move 2s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
