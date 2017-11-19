const { resolve } = require('path')
const nodeExternals = require('webpack-node-externals')
// cons CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = () => {
  return {
    target: 'node',
    context: resolve('src'),
    entry: {
      index: './index.js'
    },
    output: {
      filename: '[name]-bundle.js'
    },
    devtool: 'inline-eval-cheap-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        },
      ]
    },
    externals: [nodeExternals()],
  }
}
