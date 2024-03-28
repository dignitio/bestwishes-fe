/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: 
  {
    extend: 
    {
      fontFamily:{
        lexend:['Lexend', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive']
      },
       colors: 
    {
      primary: "#FF433C",
      white: "#fff",
      OauthButton: "#E8E8E8"
    },
    }
  },
  plugins: [],
};

