/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'outfit' : ["Outfit", "sans-serif"],
        'roboto' : ["Roboto", "sans-serif"],
        'dancing' : ["Dancing Script", "cursive"]
      },
      colors:{
        'facebook': '#3b5999',
        'linkedin': '#0077b5',
        'instagram': '#e4405f'
      },
      width: {
        '128': '32rem',
        'large':'72rem'
      },
      height:{
        '128':'32rem'
      },
      backgroundImage: {
        'home-image' : "url('./assets/home.jpg')",
      },
      
    },
  },
  plugins: [],
  darkMode:'selector'
}

