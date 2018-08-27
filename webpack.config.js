const webpack = require('webpack')

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "ts-loader"
    }]
  },
  devServer: {
    publicPath: '/dist',
    port: 8888,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
