/** @type {import('jest').Config} */
const config = {
  // Mantemos como false para não pesar nos testes normais
  collectCoverage: false,

  // Deixamos a configuração pronta para quando o coverage for ativado via CLI
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text", "lcov"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },

  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
  },
};

export default config;
