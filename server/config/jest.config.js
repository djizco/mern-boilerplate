const path = require('path');

module.exports = {
  collectCoverageFrom: ['**/*.{js}'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
  rootDir: path.join(__dirname, '../..'),
  setupFiles: ['<rootDir>/server/config/jest.setup.js'],
  testEnvironment: 'node',
  testMatch: [path.join(__dirname, '../../**/?(*.)+(spec|test).[tj]s?(x)')],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
