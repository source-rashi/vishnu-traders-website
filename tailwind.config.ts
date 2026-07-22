import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8934A',
          50: '#FAF3E7',
          100: '#F0E0C2',
          200: '#C2A159',
          300: '#B8934A',
          400: '#8A6A2E',
          500: '#B8934A',
          600: '#9A8230',
          700: '#826F29',
          800: '#6A5C22',
          900: '#51471B',
        },
        green: {
          DEFAULT: '#1F4A3D',
          50: '#EAF3F0',
          100: '#CBE0D8',
          200: '#9EC4B6',
          300: '#6FA890',
          400: '#3F7C67',
          500: '#1F4A3D',
          600: '#1A3E33',
          700: '#153229',
          800: '#10261F',
          900: '#0A1B15',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
