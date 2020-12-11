const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry:{
        'hello-world': './src/hello-world.js',
        'hello-world-button': './src/hello-world-button.js',
        'potato': './src/potato.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode:'production',

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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chuncks:['hello-world'],
            title: 'hello world handlebars',
            template: 'src/index.hbs',
            description : 'some description with hello world and handlebars' 
        }),
        new HtmlWebpackPlugin({
            filename: 'potato.html',
            chuncks:['potato'],
            title: 'potato',
            template: 'src/index.hbs',
            description : 'potato' 
        }),
        new HtmlWebpackPlugin({
            filename: 'hello-world-button.html',
            chuncks:['hello-world-button'],
            title: 'hello-world-button',
            template: 'src/index.hbs',
            description : 'hello-world-button  description' 
        })
    ]
}