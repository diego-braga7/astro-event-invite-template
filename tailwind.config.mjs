/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF', // Azul Sonic
        secondary: '#FF0000', // Vermelho Sapatos
        accent: '#FFD700', // Dourado Anéis
        background: '#FFFFFF', // Fundo base (usaremos gradiente no CSS)
        sonic: {
          blue: '#1E90FF',
          red: '#FF0000',
          gold: '#FFD700',
          dark: '#0047AB'
        }
      },
      fontFamily: {
        display: ['"Righteous"', 'ui-rounded', 'cursive', 'system-ui'],
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        game: ['"Press Start 2P"', 'cursive']
      },
      backgroundImage: {
        'sonic-gradient': 'linear-gradient(180deg, #E0F7FA 0%, #FFFFFF 100%)',
        'speed-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e90ff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }
    }
  }
};
