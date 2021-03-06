module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50': '50%',
      '16': '30%',
    },
    backgroundColor: {
      'myPink': '#fe3666',
      'white': '#fff',
      'picFont': 'rgb(0,0,0)',
      'myGrey': 'rgb(243, 244, 246)'
    },
    textColor: {
      'myPink': '#fe3666',
      'white': '#fff',
      'myGray': 'rgb(107, 114, 128)'
    },
    extend: {
      backgroundImage: {
        'likelihood': "url('https://ali-ec.static.yximgs.com/udata/pkg/eshop/kwaishop-shop-hybrid/i/a5a09fcf1c8e447dfbc8e5cf83a8649a.png')",
        'recommend': "url('https://p2.eckwai.com/ufile/adsocial/1dc759e9-7c62-4ca8-9444-11891bdcbaa1.jpg')"
      }
    },
  },
  plugins: [],
}