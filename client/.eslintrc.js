module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: { config: './client/config/webpack.config.js' },
    },
  },
  rules: {
    // enable rules
    'react/jsx-key': 2,
    'object-curly-newline': [2, {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    }],
    'import/order': [2, {
      'pathGroups': [
        { pattern: 'react', group: 'builtin', position: 'before' },
        { pattern: '@mui/**', group: 'external', position: 'after' },
        { pattern: '@fortawesome/**', group: 'external', position: 'after' },
        { pattern: 'react-bulma-companion/**', group: 'external', position: 'after' },
        { pattern: '_client/**', group: 'internal', position: 'after' },
        { pattern: '_components/**', group: 'internal', position: 'after' },
        { pattern: '_store/**', group: 'internal', position: 'after' },
        { pattern: '_styles/**', group: 'internal', position: 'after' },
        { pattern: '_hooks/**', group: 'internal', position: 'after' },
        { pattern: '_utils/**', group: 'internal', position: 'after' },
      ],
      'pathGroupsExcludedImportTypes': ['react'],
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
    'sort-imports': [2, {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      allowSeparatedGroups: true,
    }],

    // override defaults
    'eqeqeq': [2, 'smart'],
    'max-len': [2, { code: 120, tabWidth: 2, ignoreUrls: true }],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-cond-assign': [2, 'except-parens'],
    'no-multi-spaces': [2, {
      exceptions: {
        ImportDeclaration: true,
        Property: true,
        VariableDeclarator: true,
      },
    }],
    'quote-props': [2, 'consistent-as-needed'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': [2, 'element'],

    // disable rules
    'arrow-parens': 0,
    'default-param-last': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-confusing-arrow': 0,
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
  },
};
