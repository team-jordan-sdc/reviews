module.exports = {projects: [
  {
    displayName: 'dom',
    testEnvironment: 'jsdom',
    "automock": false,
    setupFiles: ['<rootDir>/spec/setupTests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  },
  {
    displayName: 'node',
    testEnvironment: 'node',
    testMatch: [
      '**/spec/**/*.test.js?(x)',
    ],
  },
],
};