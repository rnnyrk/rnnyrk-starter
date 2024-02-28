import { type Config } from "tailwindcss";

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-inter)'],
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
} satisfies Config;
