import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"
const path = require("path")

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "blitz-chakra",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  // Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.module.rules.push({
      // Refs: https://github.com/vercel/next.js/discussions/12810#discussioncomment-13851
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: `${isServer ? "../" : ""}fonts/`,
        publicPath: isServer ? `${path.join(__dirname)}/.next/fonts/` : `/fonts/`,
        //   // esModule: false,
      },
      // loader: "url-loader",
      // options: {
      //   limit: 6_000_000,
      // },
    })
    return config
  },
}
module.exports = config
