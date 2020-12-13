const path = require('path');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world-button': './src/hello-world-button.js',
        'potato': './src/potato.js'
    },
    output: {
        filename: '[name].bundle.js',
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
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'hello world handlebars',
            template: 'src/index.hbs',
            description: 'some description with hello world and handlebars'
        }),
        new HtmlWebpackPlugin({
            filename: 'potato',
            chunks:['potato'],
            title: 'potato handlebars',
            template: 'src/index.hbs',
            description : 'some description with handlebars' 
        }),
        new HtmlWebpackPlugin({
            filename: 'hello world button',
            chunks:['hello-world-button'],
            title: 'hello world handlebars',
            template: 'src/index.hbs',
            description : 'some description with handlebars' 
        }) 
    ]
}