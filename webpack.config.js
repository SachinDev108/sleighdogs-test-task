var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');


var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
  ?	 ['./src/index.js']
  :  [
  		 './src/index.js',
			 'webpack/hot/dev-server',
		   'webpack-dev-server/client?http://localhost:8000'
     ];

var plugins = PRODUCTION
	?	 [
				new webpack.optimize.UglifyJsPlugin(),
				new ExtractTextPlugin('styles-[contentHash:10].css'),
				new HTMLWebpackPlugin({
					template: 'index-template.html'
				})
		 ]
	:  [
		    new webpack.HotModuleReplacementPlugin()
	   ]

plugins.push(
	new webpack.DefinePlugin({
			DEVELOPMENT: JSON.stringify(DEVELOPMENT),
			PRODUCTION: JSON.stringify(PRODUCTION)
	})
);

var cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]'

var prodCSSLoader = ExtractTextPlugin.extract(
	{
		fallback: 'style-loader',
		use: 'css-loader?localIdentName=' + cssIdentifier
	}
);

var devCSSLoader = ['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

var cssLoader = PRODUCTION ? prodCSSLoader : devCSSLoader;
 
module.exports = {
	devtool: 'source-map',
	entry: entry,
	plugins: plugins,
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: '/node_modules/'
		},
		{
			test: /\.(png|jpg|gif)$/,
			loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
			exclude: '/node_modules/'
		},
		{
			test: /\.css$/,
			loaders: cssLoader,
			exclude: '/node_modules/'
		}]
	},
	output:{
		path: path.join(__dirname, 'dist'),
		publicPath: PRODUCTION ? '/' : '/dist/',
		filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
	}
}