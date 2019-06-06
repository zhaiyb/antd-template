var path = require('path');

module.exports = {
    parser: "babel-eslint",
    "extends": [
        "airbnb",
        "plugin:import/react",
    ],
    "env": {
        "browser": true
    },
    "rules": {
        "react/button-has-type": "never",
        "react/prop-types": "never",
        "react/sort-comp": "never",
        "import/extensions": "never"
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