var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, '../src');

module.exports = {
  mode: 'development',
  entry: path.resolve(src, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [
        'eslint-loader',
        'babel-loader'
      ],
      exclude: /node_modules/
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'style-loader', // creates style nodes from JS strings
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
      }, {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          javascriptEnabled: true
        }
      }]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader'
        }
      ]
    }, {
      test: /\.(ico|png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.less'],
    modules: [
      src,
      path.resolve(__dirname, '../node_modules'),
    ],
    alias: {
      _src: path.resolve(__dirname, '../src/'),
      _components: path.resolve(__dirname, '../src/components/'),
      _containers: path.resolve(__dirname, '../src/containers/'),
      _constants: path.resolve(__dirname, '../src/constants/'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'index.html'),
      filename: 'index.html',
      favicon: path.resolve(src, 'zyb.ico')
    })
  ]
};