/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2l':"1380px",
        '2md':'974px',
        'xs':'460px',
        '2xs':'335px',
      },
      colors: {
        'mainBrown': '#503129',
        'mainOrange': '#FF9704',

        'mainYellow': '#FFD604',
        'brightYellow':'#FFE97B',
        'orangeBrown': '#9D5C00',
        
        'mainGray': '#F0F0F0',

      },
      boxShadow: {
        'button-tw': 'inset 2px 4px 6.1px rgba(0, 0, 0, 0.15), inset -2px -4px 6.1px rgba(0,0,0,0.25)',
        'button-outside-tw': '2px 4px 6.1px rgba(0, 0, 0, 0.25), -2px 0px 6.1px rgba(0,0,0,0.25)',
      },


      fontFamily: {
        'raleway': ['var(--raleway)'],
        'radioCanada': ['var(--radioCanada)']
      },
    },
  },
  plugins: [],
};
