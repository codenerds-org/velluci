/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        // mostly used for navbar, to hide the navbar on smallest mobile devices
        'sm': '375px',
      },
      backgroundImage: {
        'desktop': 'url("/background-desktop.jpg")',
        'desktop-model': 'url("/background-desktop-model.png")',
        'mobile': 'url("/background-mobile.jpg")',
        'mobile-model': 'url("/background-mobile-model.png")',
      },
    },
  },
  plugins: [],
}
