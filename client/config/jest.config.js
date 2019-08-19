const path = require('path');

module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^_atoms(.*)$': '<rootDir>/client/components/atoms/$1',
    '^_molecules(.*)$': '<rootDir>/client/components/molecules/$1',
    '^_organisms(.*)$': '<rootDir>/client/components/organisms/$1',
    '^_templates(.*)$': '<rootDir>/client/components/templates/$1',
    '^_pages(.*)$': '<rootDir>/client/components/pages/$1',
    '^_environment(.*)$': '<rootDir>/client/components/environment/$1',
    '^_hooks(.*)$': '<rootDir>/client/hooks/$1',
    '^_store(.*)$': '<rootDir>/client/store/$1',
    '^_actions(.*)$': '<rootDir>/client/store/actions/$1',
    '^_thunks(.*)$': '<rootDir>/client/store/thunks/$1',
    '^_reducers(.*)$': '<rootDir>/client/store/reducers/$1',
    '^_assets(.*)$': '<rootDir>/client/assets/$1',
    '^_styles(.*)$': '<rootDir>/client/styles/$1',
    '^_utils(.*)$': '<rootDir>/client/utils/$1',
    '^_api(.*)$': '<rootDir>/client/api/$1',
  },
  rootDir: path.join(__dirname, '../..'),
  setupFiles: [
    '<rootDir>/client/config/jest.setup.js',
    '<rootDir>/client/config/enzyme.setup.js',
  ],
  testEnvironment: 'jest-environment-jsdom-global',
  testMatch: [path.join(__dirname, '../../**/?(*.)+(spec|test).[tj]s?(x)')],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    // eslint-disable-next-line
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/client/config/assetsTransformer.js',
  },
};
