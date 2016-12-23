var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	port: 8088,
	publicPath: '/dist/',
	entry: {
		index:'./src/js/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, '/dist/js/')
	},
	cache: false,
    devtool: false,
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
		// new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("styles.css"),
	],
	module: {
		preLoaders: [
		  {
		    test: /\.(js|jsx)$/,
		    include: './src/js',
		    loader: 'eslint-loader'
		  }
		],
		loaders: [
			{
			    test: /\.json$/,
			    loader: "json"
			}, 
			{
			    test: /\.js$/,
			    exclude: /node_modules/,
			    loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.sass/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
			},
			{
				test: /\.less/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader'
			},
			{
				test: /\.styl/,
				loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
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
	postcss: [ autoprefixer({ browsers: ['last 10 versions'] }) ],
	devServer: {
	  contentBase: './',
	  historyApiFallback: true,
	  hot: true,
	  port: this.port,
	  noInfo: false
	},
	resolve: {
		modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
		extensions: [ '', '.web.js', '.js', '.json', '.scss' ],
		alias: {
			uikit:__dirname+'/bower_components/uikit/',
			muijs:__dirname+'/mui/js',
			muicss:__dirname+'/mui/css'
		}
	}
}