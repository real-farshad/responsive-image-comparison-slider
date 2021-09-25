const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/ts/index.ts",

    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.[contenthash].html",
        }),

        new MiniCssExtractPlugin({
            filename: "style.[contenthash].css",
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: path.resolve(__dirname, "dist", "assets"),
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },

            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
