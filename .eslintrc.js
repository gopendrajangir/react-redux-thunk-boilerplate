const path = require('path');

module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  settings: {
    "import/resolver": {
      alias: [
        ['assets', path.join(__dirname, './assets')],
        ['components', path.join(__dirname, './src/components')],
        ['containers', path.join(__dirname, './src/containers')],
        ['actions', path.join(__dirname, './src/actions')],
        ['reducers', path.join(__dirname, './src/reducers')],
        ['apis', path.join(__dirname, './src/apis')]
      ],
    }
  },
  "rules": {
    "no-console": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  },
  "parser": "babel-eslint"
}