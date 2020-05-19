const path = require('path');
const webpack = require('webpack');
module.exports = {
    devServer: {
        open: true,
        inline: true,
        contentBase: './dist',
        port: 9000,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpeg|gif|ttf|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "js/bundle.js",
        publicPath: '/'
    },
};