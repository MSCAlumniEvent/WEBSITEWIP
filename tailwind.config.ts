import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#242E57',
        orange: '#EE9643',
        'light-gray': '#F5F5F5',
        'medium-gray': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Avenir', 'Avenir Next', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
