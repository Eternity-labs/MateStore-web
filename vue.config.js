module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 72
          })
        ]
      }
    }
  }
};
