/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: 
  {
    colors: 
    {
      primary: "#FF433C",
      white: "#ffff",
      OauthButton: "#E8E8E8"
    },
    extend: 
    {
      fontFamily:{
        lexend:['Lexend', 'sans-serif']
      },
    }
  },
  plugins: [],
};

