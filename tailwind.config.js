/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  
  theme: {
    screens: {
      'cxl': {'max': '1279px' },
      'clg': {'max': '1023px' },
      'cmd': {'max': '767px' },
      'csm': {'max': '639px' },
    },
    fontFamily: {
      'sans': ['RNSSanz', 'Sans-serif']
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
