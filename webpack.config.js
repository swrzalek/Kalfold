const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/js/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
},
devServer: {
    contentBase: './dist'
},
plugins: [
    new HtmlWebpackPlugin({
       filename: 'index.html',
       template: './src/index.html' 
    })
],
module: {
    rules: [
        {
            enforce: 'pre',
            test: /\.js$/, //using regex to tell babel exactly what files to transcompile
            exclude: /node_modules/, // files to be ignored
            loader: 'eslint-loader' // specify the loader 
        },
        {
            test: /\.js$/, //using regex to tell babel exactly what files to transcompile
            exclude: /node_modules/, // files to be ignored
            loader: 'babel-loader' // specify the loader 
        }
    ]
}
}