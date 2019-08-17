module.exports = {
  "root": true,
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": './config/webpack.config.js',
      }
    },
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
  },
  "env": {
    "browser": true,
    "jest": true,
  },
  "plugins": ["react"],
  "rules": {
    // enable rules
    "react/jsx-key": 2,

    // override default options for rules from base configurations
    "eqeqeq": [2, "smart"],
    "max-len": [2, {"code": 120, "tabWidth": 2, "ignoreUrls": true}],
    "newline-per-chained-call": [2, {"ignoreChainWithDepth": 4}],
    "no-cond-assign": [2, "except-parens"],
    "no-multi-spaces": [2, {"exceptions": {
      "ImportDeclaration": true,
      "Property": true,
      "VariableDeclarator": true
    }}],
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "react/jsx-fragments": [2, 'element'],

    // disable rules
    "arrow-parens": 0,
    "function-paren-newline": 0,
    "implicit-arrow-linebreak": 0,
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "no-plusplus": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-props-no-spreading": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
  },
};
