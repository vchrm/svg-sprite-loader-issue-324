const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: `${__dirname}/dist`,
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			}, {
				test: /\.svg$/,
				loader: "svg-sprite-loader",
				options: {
					extract: true
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new SpriteLoaderPlugin()
	]
};
