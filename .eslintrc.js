var path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "rules": {
    // "react/no-danger": 0,
    // "class-methods-use-this": 0,
    // "react/sort-comp": 0,
    // "consistent-return": 0,
    // "camelcase": 0,
    // "dot-notation": 0,
  },
  "env": {
    "browser": true
  },
  "settings": {
    'import/resolver': {
      alias: {
        map: [
          ['_src', path.resolve(__dirname, './src/')],
          ['_components', path.resolve(__dirname, './src/components/')],
          ['_containers', path.resolve(__dirname, './src/containers/')]
        ],
        extensions: ['.js', '.less', '.jsx']
      },
    }
  }
};
