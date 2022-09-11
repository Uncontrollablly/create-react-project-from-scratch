const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env, argv) => {
  const mode = argv.mode;
  const isDevelopment = mode === "development";

  return {
    entry: "./src/index",
    devtool: isDevelopment ? "eval-cheap-module-source-map" : false,
    mode: mode || "production",
    // Loaders are transformations that are applied to the source code of a module
    module: {
      rules: [
        {
          test: /\.m?(js|ts)x?$/,
          exclude: /node_modules/,
          // loader is a shorthand for the 'use' property, when only one loader is being utilized
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
    resolve: {
      // allows to import modules without extensions
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      // Specify the public URL of the output directory when referenced in a browser
      // The URL of output.path from the view of the HTML page
      // A relative URL is resolved relative to the HTML page
      publicPath: "/dist/",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
        // Tell the server at which URL to serve static.directory content
        // publicPath: "/",
      },
      port: 3000,
      hot: true,
      liveReload: false,
      open: true,
    },
  };
};
