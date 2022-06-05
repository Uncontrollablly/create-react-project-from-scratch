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
    open: true,
  },
};
