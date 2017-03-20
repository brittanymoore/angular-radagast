var webpack = require('webpack');
var path = require('path');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

exports.apiUrl = ""; // can be used to prepend a URL to web service calls without repetition
exports.config = {

    entry: {
        'main': './test/main.ts',
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
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader?tsconfig=./tsconfig.json',
                    'angular2-template-loader'
                ]
            },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },    

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            path.resolve(__dirname, './../src'),
            {
                // your Angular Async Route paths relative to this root directory
            }
        ),
        new HtmlWebpackPlugin({
            title: 'Radagast',
            template: './config/index.template.ejs'
        })
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000,
    }

};