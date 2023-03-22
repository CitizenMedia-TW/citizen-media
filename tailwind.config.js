/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '3/10': '30%',
      },
      colors: {
        'footer': '#133157',
      },
      backgroundImage: {
        'facebook_1': 'url("https://img.icons8.com/ios/256/facebook.png")',
      },
    },
  },
  plugins: [
    require('@neojp/tailwindcss-line-clamp-utilities')
  ],
  variants: {
    lineClamp: ['responsive']
  }
}
