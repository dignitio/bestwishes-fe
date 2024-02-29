/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#FF433C",
        white: "#fff",
        OauthButton: "#E8E8E8",
        Draft: "#1061B1",
        bgWalletBalanceFigure: "#1061B1",
        bgWalletBalance: "#465C86",
      },
    },
  },
  plugins: [],
};
