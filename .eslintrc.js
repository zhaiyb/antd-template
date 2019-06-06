var path = require('path');

module.exports = {
    parser: "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "react/button-has-type": 0,
    },
    "settings": {
        'import/resolver': {
            alias: {
                map: [
                    ['_components', path.resolve(__dirname, './src/components/')]
                ],
                extensions: ['.js', '.less', '.jsx']
            }
        }
    }
};