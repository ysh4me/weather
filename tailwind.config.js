/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '370px',
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

