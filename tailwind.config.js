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
    extend: {},
  },
};
