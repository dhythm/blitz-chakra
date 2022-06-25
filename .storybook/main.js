const path = require("path")

module.exports = {
  stories: ["../app/**/*.stories.mdx", "../app/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
  },
  // core: {
  //   builder: "@storybook/builder-webpack5",
  // },
  webpackFinal: async (config) => {
    config.node = {
      fs: "empty",
      child_process: "empty",
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "app/core/components": path.resolve(__dirname, "../app/core/components"),
    }

    return config
  },
}
