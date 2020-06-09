module.exports = {
  root: true,
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    allowImportExportEverywhere: false,
  },
  env: {
    node: true,
    jest: true
  },
  rules: {
    // override defaults
    eqeqeq: [2, 'smart'],
    'max-len': [2, { 'code': 120, 'tabWidth': 2, 'ignoreUrls': true }],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-cond-assign': [2, 'except-parens'],
    'no-multi-spaces': [2, { exceptions: {
      ImportDeclaration: true,
      Property: true,
      VariableDeclarator: true,
    }}],
    'prefer-destructuring': [2, {
      array: false,
      object: true
    }, {
      enforceForRenamedProperties: false
    }],
    'space-before-function-paren': [2, 'never'],

    // disable defaults
    'arrow-parens': 0,
    'brace-style': 0,
    'consistent-return': 0,
    'func-names': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'padded-blocks': 0,
  },
};
