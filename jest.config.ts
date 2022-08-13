import type { Config } from "@jest/types"
import { readFileSync } from "fs"
import { pathsToModuleNameMapper } from "ts-jest"
const { compilerOptions } = require("./tsconfig")

// Reading the SWC compilation config and remove the "exclude"
// for the test files to be compiled by SWC
const { exclude: _, ...swcJestConfig } = JSON.parse(readFileSync(`${__dirname}/.swcrc`, "utf-8"))

const config: Config.InitialOptions = {
  // preset: "blitz",
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  modulePathIgnorePatterns: ["<rootDir>/.blitz", "<rootDir>/.next"],
  transform: {
    // "^.+\\.[tj]sx?$": ["@swc/jest", swcJestConfig],
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      {
        sourceMaps: true,
        module: {
          type: "commonjs",
        },
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    // This ensures any path aliases in tsconfig also work in jest
    ...pathsToModuleNameMapper(compilerOptions.paths || {}),
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  // Coverage output
  // coverageDirectory: ".coverage",
  automock: false,
  // https://github.com/zeit/next.js/issues/8663#issue-490553899
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json",
    },
  },
}

export default config
