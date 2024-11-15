/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      yellow: "#FFE169",
      goldyellow:"#FAD643",
      black: "#000000",
      white: "#f7f7f6",
      secondary: "#1F1F1F",
      primewhite:"#f0f0f0"
    },
    fontFamily: {
      header: ['"Dancing Script"', "cursive"],     // For headers and titles
      body: ['"Open Sans"', "sans-serif"],         // For main body text
      alt: ['"Nunito Sans"', "sans-serif"],        // Additional font option
      poppins: ['"Poppins"', "sans-serif"],        // Another modern font option
      monts: ['"Montserrat"', "sans-serif"],  // Newly added Montserrat font
    },
  },
};
export const plugins = [];
