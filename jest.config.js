const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/src/app/api$1',
    '^@components(.*)$': '<rootDir>/src/components$1'
  },
  testPathIgnorePatterns: ['/e2e/'],
  testMatch: ['**/*.test.js']
}

module.exports = createJestConfig(customJestConfig)
