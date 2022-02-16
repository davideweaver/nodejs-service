module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './build',
    './test',
    './src/index.ts',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./test/', './src'],
  setupFiles: ['./test/setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: {
        strict: false,
      },
    },
  },
};
