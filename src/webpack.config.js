const path = require('path');

module.exports = {

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build-prod.js',
    publicpath: "/",
  },
  mode: 'production',
  devServer: {
    historyApiFallback: true,
  },

  module: {

    rules: [

      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
}