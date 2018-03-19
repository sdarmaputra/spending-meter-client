const path = require('path')

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'dist')

const config = {
	entry: path.resolve(SRC, 'index.js'),
	output: {
		path: DIST,
		filename: 'bundle.js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader']
			}
		]
	}
}

module.exports = config
