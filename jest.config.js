/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  collectCoverageFrom: ['**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '^@enums(|/.*)$': '<rootDir>/enums/$1',
    '^@errors(|/.*)$': '<rootDir>/errors/$1',
    '^@utils(|/.*)$': '<rootDir>/utils/$1',
    '^@services(|/.*)$': '<rootDir>/services/$1',
  },
};
