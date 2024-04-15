/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: 
  {
    extend: 
    {
      fontFamily:{
        lexend:['Lexend', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'] 
      },
       colors: 
    {
      primary: "#271F6B",
      errorColor: "#FF433C",
      removeButton: "#607D8B",
      white: "#fff",
      OauthButton: "#E8E8E8",
      Draft: "#1061B1",
      bgWalletBalanceFigure: "#1061B1",
      bgWalletBalance: "#465C86",
      hoverColor: "#271F6B30"
    },
    }
  },
  plugins: [],
};

