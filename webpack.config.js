import HtmlWebpackPlugin from "html-webpack-plugin";
import dotenv from "dotenv"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

dotenv.config();

const PROD = process.env.MODE === "production";

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
								["@babel/preset-react", { runtime: "automatic" }]
							]
						}
					},
					{
						loader: "@linaria/webpack5-loader",
						options: {
							preprocessor: 'none'
						}
					},
					"ts-loader"
				]
			},
			{
				test: /\.s?(a|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
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
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			favicon: "./public/favicon.ico"
		}),
		new MiniCssExtractPlugin({
			filename: "styles.css"
		})
	],
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