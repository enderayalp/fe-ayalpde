module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.js"),
    require("postcss-import"),
    require("postcss-custom-properties"),
    require("postcss-color-function"),
    require("autoprefixer"),
  ],
  corePlugins: {
    preflight: true,
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeIn 0.5s ease-out',
      },
      fontFamily: {
        bebas: ["'Bebas Neue'"], // Ensure fonts with spaces have " " surrounding it.
        cantana: ["'Cantana One'"],
        nunito: ['nunito']
      },
      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': {
            opacity: '0',
            background: 'white'
          },
          '100%': {opacity: '1'},
        },
      }),
    },
  },
};
