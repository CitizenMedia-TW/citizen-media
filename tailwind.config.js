/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'close': "url('/src/Assets/Close.png')",
      },

      colors:{
        'side-bg-blue':'#426ca3',
        'line-border-bar':'#24456d',
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
