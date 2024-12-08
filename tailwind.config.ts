/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      display: ['M PLUS Rounded 1c', 'sans-serif'],
    },

    extend: {
      // Colours used in the project
      colors: {
        primary: "#7880B5",
        background: "#1B1030",
        cardbg: "#291849",
        white: "#e4e1e9",
        lightpink: "#F0D1CE",
        lesswhite: "#a299b3",
        whiteish: "#c9c4d3",
        lightpurple: "#7880B5",
        darkpurple: "#403D65",
        overlayBg: 'rgba(0, 0, 0, 0.3)',
        cardhover: "#372062",
        brightpurple: "#8c98e9",

      },

      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "almostwhite"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink 1s infinite"
      },

      height: {
        'cursor': '50%', // Example: 50% of the line height
      }
    },
  },
  plugins: [],
}
