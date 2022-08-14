const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
	mode: process.env.MODE,
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
				use: [
					// {
					// 	loader: "babel-loader",
					// 	options: {
					// 		presets: [["@babel/preset-react", { runtime: "automatic" }]]
					// 	}
					// },
					"ts-loader"
				]
			},
			{
				test: /\.s?(a|c)ss$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({ template: "./src/index.html", favicon: "./public/favicon.ico" })],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	// output: {
	// 	publicPath: ASSET_PATH
	// }
};