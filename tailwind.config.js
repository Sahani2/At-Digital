/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      },

      colors:{
               primaryColor: "#6b3cc9",
               secondaryColor:"#f28d35",
               analogousColor1:"#6A44F2",
               analogousColor2: "#1CBDDD",
               TriadicColor1:"#52378C",
               DarkColor: "#2F2F2F",
               TextColorLight: "#545A75",
               TextColorSubtle: "#9C9991",
               AccentColor: "#E2F2FE",
               AccentColor2:"#FFF8E0",
               ErrorColor:"#FF0335",
               SuccessColor:"#5EB30B",
               Darkblue:"#4DCA79",





      },
    },
  },
  plugins: [],
}

