const path = require('path');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry:'./src/potato.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode:'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
        writeToDisk: true
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader', 'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
            test: /\.hbs$/,
            use: [
                'handlebars-loader'
            ]
        }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'hello world handlebars',
            template: 'src/index.hbs',
            description : 'some description with handlebars' 
        })
    ]
}