/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.html"
  ],
  theme: {
    colors:{
      'badgeHome': 'rgba(249, 179, 216, 0.5)',
      'badgeHomeBorder': 'rgba(245, 184, 195, 1)',
      'addNumBorder': 'rgba(191, 172, 210, 1)',
      'addNumFill': 'rgba(223, 204, 247, 1)',
      'nameTimeBorder': 'rgba(255, 214, 214, 1)',
      'nameTimeFill': 'rgba(255, 236, 236, 1)',
      'greaterBorder':'rgba(236, 85, 143, 1)',
      'greaterFill': 'rgba(244, 160, 192, 1)',
      'madlibsBorder': 'rgba(249, 175, 178, 1)',
      'madlibsFill': 'rgba(255, 210, 212, 1)',
      'oddOrEvenBorder': 'rgba(254, 227, 120, 1)',
      'oddOrEvenFill': 'rgba(255, 240, 182, 1)',
      'reverse123Border':'rgba(172, 197, 136, 1)',
      'reverse123Fill': 'rgba(219, 229, 177, 1)',
      'reverseabcBorder': 'rgba(244, 215, 171, 1)',
      'reverseabcFill': 'rgba(254, 251, 210, 1)',
      'magicBorder': 'rgba(255, 244, 130, 1)',
      'magicFill': 'rgba(255, 251, 195, 1)',
      'sayHelloBorder': 'rgba(245, 177, 166, 1)',
      'sayHelloFill': 'rgba(249, 207, 195, 1)'
    },
    extend: {
      backgroundImage: {
        'bgHome': 'url(../assets/bg.png)',
        'addNumBg': 'url(../assets/hellokittybg.jpg)',
        'nameTimeBg': 'url(../assets/pochaccobg1.png)',
        'greaterBg': 'url(../assets/kuromibg2.jpg)',
        'madlibBg': 'url(../assets/mymelodybg1.jpg)',
        'oddorevenBg': 'url(../assets/cinammorolbg1.jpg)',
        'reverse1Bg': 'url(../assets/pompombg1.jpg)',
        'reverseabc': 'url(../assets/tuxsambg1.png)',
        'magicBg': 'url(../assets/badtzbg1.png)',
        'restPickerBg': 'url(../assets/rilakkumabg1.jpg)',
        'sayHelloBg': 'url(../assets/gudetamabg1.jpg)'
      },
      fontFamily: {
        'mainFont': ['mainFont'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

