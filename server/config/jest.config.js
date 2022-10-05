const path = require('path');

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/server/database/**/*.js',
    '<rootDir>/server/routes/**/*.js',
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
  rootDir: path.join(__dirname, '../..'),
  setupFiles: ['<rootDir>/server/config/jest.setup.js'],
  testEnvironment: 'node',
  testMatch: [path.join(__dirname, '../../**/?(*.)+(spec|test).js')],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
