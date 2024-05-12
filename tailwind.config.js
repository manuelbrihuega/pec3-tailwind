/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'verde-primario': '#0f5132',
      'verde-secundario':  '#b46f21',
      'color-bordes': '#a3cfbb',
      'color-fondo-tooltips': '#d1e7dd',
      'color-texto-tooltips': '#0f5132',
      'blanco': '#fff'
      /*
      "primary":    #0f5132,
  "secondary":  #b46f21,
  "success":    #198754,
  "info":       #d1e7dd,
  "warning":    #cc9a06,
  "danger":     #58151c,
  "light":      #a3cfbb,
  "dark":       #051b11
  $nav-link-color: #0f5132;
$nav-link-hover-color: #198754;
$tooltip-bg: $color-fondo-tooltips;
$tooltip-color: $color-texto-tooltips;
$card-border-color: $color-bordes;
      */
    },
    fontFamily: {
      sans: [-apple-system, blinkmacsystemfont, 'Segoe UI', roboto, 'Helvetica Neue', arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      serif: ['Georgia', 'Times New Roman', 'serif'],
    },
    fontSize: {
      '2rem': '2rem',
      '1.5rem': '1.5rem'
    },

    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '700px',
      // => @media (min-width: 768px) { ... }

      'lg': '950px'
    },


    extend: {},
  },
  plugins: [],
}

