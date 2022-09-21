const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => {
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
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  localIdentName: isDevelopment
                    ? "[path][name]__[local]"
                    : "[hash:base64]",
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
        inject: true,
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
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
      publicPath: "/",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
        // Tell the server at which URL to serve static.directory content
        publicPath: "/static/",
      },
      port: 3000,
      hot: true,
      liveReload: false,
      open: true,
    },
  };
};
