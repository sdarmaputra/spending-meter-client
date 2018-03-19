const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		host: 'localhost',
		port: 16016,
		compress: true,
		open: true
	}
})

module.exports = config
