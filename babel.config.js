const presets = [
  "@babel/env",
  "@babel/preset-react"
];
const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-syntax-dynamic-import',
  'react-hot-loader/babel',
  ["import", {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": true
  }]
];

module.exports = { presets, plugins };