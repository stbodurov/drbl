import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import dotenv from "dotenv"

dotenv.config();

const PROD = process.env.MODE === "production";
// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

export default {
	mode: process.env.MODE,
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-env",
								["@babel/preset-react", { runtime: "automatic" }]]
						}
					},
					"ts-loader"
				]
			},
			{
				test: /\.s?(a|c)ss$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: !PROD
						}
					},
					"postcss-loader",
					"sass-loader"]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({ template: "./src/index.html", favicon: "./public/favicon.ico" })],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
	},
	// output: {
	// 	publicPath: ASSET_PATH
	// }
	stats: {
		errorDetails: true
	}
};