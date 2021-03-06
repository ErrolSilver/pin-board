const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './js/app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: '[name].bundle.js',
        publicPath: '/assets', 
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',                
                    options: { presets: ['es2015'] },
                }],
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
