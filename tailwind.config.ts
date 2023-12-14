import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1BADFF',
        secondary: '#FFA226',
        bg: '#00010D',
        text: '#FFF',
        bg2: '#1C1D33',
      }
    },
  },
  plugins: [],
};
export default config;
