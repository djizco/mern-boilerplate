const path = require('path');

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/server/database/**/*.[tj]s',
    '<rootDir>/server/routes/**/*.[tj]s',
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
  rootDir: path.join(__dirname, '../..'),
  setupFiles: ['<rootDir>/server/config/jest.setup.js'],
  testEnvironment: 'node',
  testMatch: [path.join(__dirname, '../../**/?(*.)+(spec|test).[tj]s')],
  transform: {
    '^.+\\.[tj]s$': 'babel-jest',
  },
};
