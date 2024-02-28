/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors:{
        primary:"black",
        lightGray:"#616895",
        darkGray:"#1e212f"

      },
      fontFamily:{
        serif:[ "Rubik"]
      },
      fontSize:{
       
      },
      container:{
        center:true,

      },
     backgroundImage:{
      "gradient":"linear-gradient( 58.2deg,  rgba(40,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7% )"
     }
    },
  },
  plugins: [],
}


