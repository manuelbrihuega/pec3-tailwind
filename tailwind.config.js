/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'verde-primario': '#0f5132',
      'verde-secundario':  '#b46f21',
      'verde-hover': '#198754',
      'color-bordes': '#a3cfbb',
      'color-fondo-tooltips': '#d1e7dd',
      'color-texto-tooltips': '#0f5132',
      'blanco': 'rgba(255, 255, 255, 1)',
      'blanco-semitransparente': 'rgba(255, 255, 255, 0.5)',
      'oscuro': '#051b11'
    },

    fontFamily: {
      sans: ['Segoe UI', 'roboto', 'Helvetica Neue', 'arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      serif: ['Georgia', 'Times New Roman', 'serif'],
    },

    fontSize: {
      '2.5rem': '2.5rem',
      '2.25rem': '2.25rem',
      '2rem': '2rem',
      '1.7rem': '1.7rem',
      '1.5rem': '1.5rem',
      '1.25rem': '1.25rem',
      '1.2rem': '1.2rem',
      '1rem': '1rem',
      '0.75rem': '0.75rem',
      '0.6rem': '0.6rem'
    },

    screens: {
      'mobile': '300px',
      'tablet': '700px',
      'desktop': '950px'
    },

    extend: {
      backgroundImage: {
        'portada': "url('../images/2.jpg')"
      }
    },
  }
}
