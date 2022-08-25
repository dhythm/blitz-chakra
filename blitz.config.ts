import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"

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
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "fonts/",
        // publicPath: "./fonts/",
        publicPath: "/fonts/",
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
