const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js"
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: [".js"],
    alias: {
      "@assetsFont": path.resolve(__dirname, "./src/assets/fonts"),
      "@assetImgs": path.resolve(__dirname, "./src/assets/imgs")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.png/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "assets/fonts/[hash][ext][query]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
  ],

  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    liveReload: true,
    hot: false,
    watchFiles: ['./public/index.html'],
    port: 3005,
  }

}
