/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif'],
      serif: [],
    },
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f0ff',
          200: '#bce6ff',
          300: '#8ed8ff',
          400: '#59c0ff',
          500: '#40a9ff',
          600: '#1b84f5',
          700: '#146de1',
          800: '#1757b6',
          900: '#194b8f',
        },
        danger: {
          50: '#fff0f1',
          100: '#ffdee0',
          200: '#ffc3c6',
          300: '#ff999e',
          400: '#ff5f67',
          500: '#ff2d38',
          600: '#f5222d',
          700: '#ce0711',
          800: '#aa0a12',
          900: '#8c1016',
        },
        success: {
          50: '#eefff3',
          100: '#d6ffe6',
          200: '#b0ffce',
          300: '#72ffa9',
          400: '#2efa7b',
          500: '#03d353',
          600: '#00be46',
          700: '#01943a',
          800: '#077432',
          900: '#085f2c',
        },
        'secondary-500': '#ff7849',
        'secondary-200': '#ffff49',
        'accent-500': '#ffc82c',
        'accent-200': '#ffff2c',
        'variant-500': '#8492a6',
        'variant-200': '#dddddd',
        wall: '#f3f5f8',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        sm: '2px',
        '4xl': '2rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
