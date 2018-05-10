const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};
