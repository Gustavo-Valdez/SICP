const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Merriweather Sans', ...defaultTheme.fontFamily.sans],
        display: ['Poppins'],
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        'whatsappGreen': '#25d366'
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    [Myclass]
    
  ],
}
