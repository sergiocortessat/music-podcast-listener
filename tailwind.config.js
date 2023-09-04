/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'emerald': 'rgb(0, 245, 164)',
        'darkEmerald': 'rgb(0, 245, 164, 0.8)',
      },
      colors: {
        'emerald': 'rgb(0, 245, 164)',
        'darkEmerald': 'rgb(0, 245, 164, 0.8)',
        'customGrey': "#d3d3d3",
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif']
      },
      animation: {
        loader: 'loader 0.6s infinite alternate'
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        }
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

