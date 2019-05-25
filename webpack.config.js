const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "none", //only for development - comment for production
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: "127.0.0.1", //for working with C9 AWS
    port: "5500", //for working with C9 AWS
    open: true
  },
  entry: {
    main: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contentHash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      stats: { children: false }
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contentHash].css"
    })
  ]
};
