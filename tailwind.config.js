/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'banner': "url('./banner.png')",
        }
      },
    },
    plugins: [],
  }