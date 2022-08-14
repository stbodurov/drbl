const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

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
	plugins: [new HtmlWebpackPlugin({ template: "./src/index.html"})],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	}
};