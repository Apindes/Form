const Html_Webpack_Plugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SassPlugin = require('sass-webpack-plugin');

module.exports = {
    module:{

        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: "html-loader",
                    options: {minimize:true}
                }
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.scss$/,

                loaders:['style','css','sass']
            }
        ]
    },
    plugins:[
        new Html_Webpack_Plugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new SassPlugin('./src/main.scss',process.env.NODE_COV),
    ]
};