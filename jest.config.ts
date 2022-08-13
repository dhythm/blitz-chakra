import type { Config } from "@jest/types"
import { readFileSync } from "fs"

// Reading the SWC compilation config and remove the "exclude"
// for the test files to be compiled by SWC
const { exclude: _, ...swcJestConfig } = JSON.parse(readFileSync(`${__dirname}/.swcrc`, "utf-8"))

const config: Config.InitialOptions = {
  preset: "blitz",
  transform: {
    "^.+\\.[tj]sx?$": ["@swc/jest", swcJestConfig],
  },
  transformIgnorePatterns: ["/node_modules/**/.+\\.(t|j)sx?$"],
}

export default config
