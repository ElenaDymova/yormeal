/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        bgColor: '#FFAB08', 
        btnColor: '#F2F2F3', 
        btnAccenrtColor: '#F86310',
        accentColor: '#FF5C00', 
        greyColor: '#B1B1B1', 
        popupColor: '#F9F9F9',
      },
      borderRadius: {
        'custom': '50px',
      },
    },
  },
  plugins: [],
}

