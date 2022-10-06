const path = require('path');

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/client/components/**/*.{js,jsx}',
    '<rootDir>/client/hooks/**/*.js',
    '<rootDir>/client/store/**/*.js',
    '<rootDir>/client/utils/**/*.js',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^_client(.*)$': '<rootDir>/client/$1',
    '^_components(.*)$': '<rootDir>/client/components/$1',
    '^_store(.*)$': '<rootDir>/client/store/$1',
    '^_utils(.*)$': '<rootDir>/client/utils/$1',
    '^_hooks(.*)$': '<rootDir>/client/hooks/$1',
    '^_api(.*)$': '<rootDir>/client/api/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  rootDir: path.join(__dirname, '../..'),
  setupFilesAfterEnv: [
    '<rootDir>/client/config/jest.setup.js',
  ],
  testEnvironment: 'jsdom',
  testMatch: [path.join(__dirname, '../../**/?(*.)+(spec|test).[tj]s?(x)')],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    // eslint-disable-next-line
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/client/config/assetsTransformer.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
