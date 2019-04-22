module.exports = {
  plugins: {
    'autoprefixer': {
       browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      minPixelValue: 10,
      selectorBlackList: ['van']
    }
  }
}
