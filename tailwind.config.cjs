/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'home-picture1': "url('/src/assets/image/home-1.jpg')",
        'home-picture2': "url('/src/assets/image/homePNG.jpg')",
        'services-bg': "url('/src/assets/image/bg-services.png')",
        'about-picture1': "url('/src/assets/assetAbout/About_1.jpg')",
        'about-picture2': "url('/src/assets/assetAbout/About_2.jpg')",
        'about-picture3': "url('/src/assets/assetAbout/About_3.jpg')",
        'about-picture4': "url('/src/assets/assetAbout/About_4.jpg')",
        'about-picture5': "url('/src/assets/assetAbout/About_5.jpg')",
        'about-picture6': "url('/src/assets/assetAbout/About_6.jpg')",
        'about-picture7': "url('/src/assets/assetAbout/About_7.jpg')",
        'about-picture8': "url('/src/assets/assetAbout/About_8.jpg')",
        'about-picture9': "url('/src/assets/assetAbout/About_9.jpg')",
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  plugins: [],
}
