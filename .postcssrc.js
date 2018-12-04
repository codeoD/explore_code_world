// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  // "plugins": {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   // to edit target browsers: use "browserslist" field in package.json
  //   "autoprefixer": {}
  // }
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.js')
  ]
}
