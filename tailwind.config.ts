import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09423d',
        secondary: '#691434',
        tertiary: {
          dark: '#F27405',
          light: '#deb435',
        },
      },
      fontFamily: {
        roboto: ['Roboto', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
