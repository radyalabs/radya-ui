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
        warning: {
          50: '#fff7eb',
          100: '#ffe8c6',
          200: '#ffcd88',
          300: '#ffa940',
          400: '#ff9120',
          500: '#f96b07',
          600: '#dd4802',
          700: '#b72d06',
          800: '#94220c',
          900: '#7a1d0d',
        },
        success: {
          50: '#faffe6',
          100: '#f3fec9',
          200: '#e5fc9a',
          300: '#d0f660',
          400: '#b9eb30',
          500: '#a0d911',
          600: '#78a808',
          700: '#5a7f0c',
          800: '#486410',
          900: '#3d5512',
        },
        grey: {
          50: '#F5F5F5',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#bfbfbf',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#595959',
          900: '#4e4e4e',
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
        '6px': '6px',
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
