const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config.base');
const config = require('./config');

base.output.publicPath = `http://localhost:${config.dev.port}/`;

base.plugins.unshift(
  new webpack.HotModuleReplacementPlugin({})
);

module.exports = Object.assign(base, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    hot: true,
    port: config.dev.port,
    proxy: {
      '/api/*': {
        target: config.dev.apiUrl,
        changeOrigin: true,
        secure: true,
      }
    },
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: '/index.html' }
      ]
    }
  },
  devtool: 'source-map'
});
