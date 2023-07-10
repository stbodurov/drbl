import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", { useESM: true }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/test/mocks/styleMock.ts",
    "^.+\\.(svg)$": "<rootDir>/src/test/mocks/svg.ts",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

export default config;
