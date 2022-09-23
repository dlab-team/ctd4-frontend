module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/bkg-web.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #A172FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        'hero-gradient': 'linear-gradient(106.75deg, #2272FF 0%, #0D03C3 100%)'

      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4060ab',
          secondary: '#646FD4',
          accent: '#FFD24C',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
};
