/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beryl: "#d7ddb0",
        berylop: "#9ca93a66",
        wewak: "#f2b5b5",
        wewakop: "#de474666",
      },
    },
  },
  plugins: [],
};
