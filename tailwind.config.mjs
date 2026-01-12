/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#0EA5E9',
        accent: '#F59E0B',
        background: '#FFF7ED'
      },
      fontFamily: {
        display: ['ui-rounded', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  }
};
