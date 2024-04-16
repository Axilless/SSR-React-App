const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const loaders = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
    },
    {
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: "style-loader",
          options: { injectType: "singletonStyleTag" },
        },
        "css-loader",
      ],
    },
  ],
};

const resolve = {
  extensions: [".js", ".jsx"],
  modules: [path.resolve(__dirname, "src"), "node_modules"],
};

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./server/index.jsx",
  output: {
    filename: "server.js",
    path: path.join(__dirname, "/dist"),
  },
  module: loaders,
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: 3001,
    }),
  ],
  resolve,
};

const clientConfig = {
  target: "web",
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    /*
     * Appends /static to index.html when looking for client.js
     * This is where Express is serving static files from
     */
    publicPath: "/static",
    filename: "client.js",
  },
  module: loaders,
  plugins: [
    new htmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
    }),
  ],
  resolve,
};

module.exports = [serverConfig, clientConfig];
