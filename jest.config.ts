import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/test/mocks/styleMock.ts",
    "^.+\\.(svg)$": "<rootDir>/src/test/mocks/svg.ts",
  },
};

export default config;
