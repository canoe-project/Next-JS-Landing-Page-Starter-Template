const tailwindScrollbarHide = require('tailwind-scrollbar-hide');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'fade-in-down': 'fade-in-down 0.5s ease-out',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        lightPurple: '#FFD6FF',
        purple: '#E7C6FF',
        darkPurple: '#C8B6FF',
        blue: '#BBD0FF',
        darkBlue: '#B8C0FF',
        logo: '#A3A5B5',
        border: '#F3F3F3',
        selectedFont: '#323B4C',
        unSelectedFont: '#A3A5B5',
        unSelectedIcon: '#A0A1AA',
        selectedIcon: '#F7F6F9',
        toggle: '#D9D6E5',
        cardValue: '#92959F',
        atomicRed: '#EF476F',
        atomicYellow: '#FFD166',
        atomicIndigo: '#073B4C',
        atomicGreen: '#06D6A0',
        atomicBlue: '#118AB2',
        subtitle: '#7F7F7F',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      fontFamily: {
        NanumSquare: ['NanumSquare', 'sans-serif'],
        NanumSquareRound: ['NanumSquareRound', 'sans-serif'],
        BlackHanSans: ['Black Han Sans', 'sans-serif'],
        DoHyeon: ['Do Hyeon', 'sans-serif'],
        NanumGothic: ['Nanum Gothic', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [tailwindScrollbarHide],
};
