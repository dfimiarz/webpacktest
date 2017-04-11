var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry : './app/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'dist/'),
        sourceMapFilename: "bundle.js",
        publicPath: "/dist/"
    },
    devtool: 'cheap-eval-source-map',
    devServer:{
        open: true,
        hot: true
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /(node_modules|dist)/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}