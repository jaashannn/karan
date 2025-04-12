/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#333',
            p: {
              marginBottom: '1.5em',
            },
            'h1, h2, h3': {
              fontWeight: '700',
              marginBottom: '1em',
            },
          },
        },
      },
    },
  },
  plugins: [],
};