import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        'neutral': '#faf8f5',
        'matte-black': '#28282b'
      },
      scale: {
        '30': '0.3',
        '25': '0.25',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
