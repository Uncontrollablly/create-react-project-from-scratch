const path = require("path");

module.exports = {
  entry: "./src/index.js",
  //Sets process.env.NODE_ENV on DefinePlugin to value development
  mode: "development",
  // Loaders are transformations that are applied to the source code of a module
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader", // loader is a shorthand for the 'use' property, when only one loader is being utilized
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }, // allows to import modules without extensions
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // Specify the base path for all the assets within your application
    publicPath: "/dist/", // The url to the output directory resolved relative to the HTML page
  },
};