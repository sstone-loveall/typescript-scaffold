/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  preset: "ts-jest",
  roots: ["<rootDir>/src/", "<rootDir>/test/"],
  // The test environment that will be used for testing
  testEnvironment: "node",
  // The glob patterns Jest uses to detect test files
  testMatch: ["**/test/**/*.test.*"],
  setupFilesAfterEnv: ["jest-extended/all"],
};
