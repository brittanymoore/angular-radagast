var webpack = require('webpack');
var path = require('path');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

exports.apiUrl = ""; // can be used to prepend a static URL to web service calls
exports.config = {

    entry: {
        'main': './src/main.ts',
        'polyfill': './src/polyfill.ts'
    },

    output: {
        publicPath: '',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ path.resolve(__dirname, './../node_modules') ]
    },

    module: {
        rules: [
            { 
                test: /\.scss$/, use: [ 
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    'sass-loader',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}}
                ]
            },            
            { 
                test: /\.css$/, use: [
                    'exports-loader?module.exports.toString()',
                    'css-loader?sourceMap=false&importLoaders=1&minimize=true',
                    { loader: 'postcss-loader', options: { config: { path: './config/postcss.config.js' }}},                    
                ] 
            },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './config/index.template.ejs'
        })
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000
    }

};