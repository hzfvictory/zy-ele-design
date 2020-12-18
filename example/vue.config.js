module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: ['babel-loader']
        }
      ]
    },
  }
};