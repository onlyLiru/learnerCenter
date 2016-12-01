var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var BowerWebpackPlugin = require('bower-webpack-plugin');
module.exports = {
	entry: {
		index:'./src/js/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: './dist/js'
	},
	cache: false,
    devtool: 'sourcemap',
    plugins: [
    	commonsPlugin,
		// new webpack.optimize.DedupePlugin(),
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': '"production"'
		// }),
		// new webpack.optimize.UglifyJsPlugin({
		// 	output: {
		// 		comments: false,
		// 	},
		// 	compress: {
		// 		warnings: false
		// 	}
		// }),
		// new webpack.optimize.OccurenceOrderPlugin(),
		// new webpack.optimize.AggressiveMergingPlugin(),
		// new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
			    test: /\.json$/,
			    loader: "json"
			}, {
			    test: /\.js$/,
			    exclude: /node_modules/,
			    loader: 'babel',
			    query: {
	              presets: ['react', 'es2015', 'stage-0']
	            }
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.sass/,
				loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
			},
			{
				test: /\.less/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.styl/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /\.(png|jpg|gif|woff|woff2)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.(mp4|ogg|svg)$/,
				loader: 'file-loader'
			}
		]
	},
	postcss: [
	    require('autoprefixer')
	],
	devServer: {
	    contentBase: "./",
	    hot: true,
	    colors: true,
	    historyApiFallback: true,
	    inline: true
	},
	resolve: {
		extensions: [ '', '.js', '.json', '.scss' ],
		alias: {
			uikit:__dirname+'/bower_components/uikit/'
		}
	}
}