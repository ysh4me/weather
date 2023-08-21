/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      '2xs': '370px',
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    colors: {
      primary: {
        50: "#F5F5F5",
        100: "#82B4FF",
        200: "#5090F0",
        300: '#BEBEBE',
        400: "#686868",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

