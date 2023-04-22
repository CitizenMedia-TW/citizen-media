/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5/100': '5%',
        '7/100': '7%',
        '12/100': '12%',
        '15/100': '15%',

        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',

        '144': '36rem', /* 576px */
      },
      colors: {
        'footer': '#133157', /* footer 背景色 */
        'loginBorder': '#6a88ad', /* LoginPage 外框 */
        'loginText': '#0f3e7a', /* LoginPage 文字 */
      },
      backgroundImage: {
        'facebook_1': 'url("https://img.icons8.com/ios/256/facebook.png")',
      },
      borderRadius: {
        '4xl': '2rem', /* 24px */
      },
      borderWidth: {
        '0.5': '0.5px',
        '3': '3px',
        '3.5': '3.5px',
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
