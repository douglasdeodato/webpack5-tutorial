const path = require('path');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
    entry: {
        //chuncks names
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].bundle.js',
        path:path.resolve(__dirname, './dist'),
        publicPath:''
    },
    mode: 'development',
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
                type:'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }   
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
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
    plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename:'hello-world.html',
        chunks: ['hello-world'],
        title: 'hello world',
        template: 'src/page-template.hbs',
        description: 'hello world',
        minify: false
    }),
    new HtmlWebpackPlugin({
        filename:'kiwi.html',
        chunks: ['kiwi'],
        title: 'kiwi title',
        template: 'src/page-template.hbs',
        description: 'kiwi',
        minify: false
    })
    ]
}