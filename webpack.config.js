const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/main.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
},
devServer: {
    contentBase: './dist',
    port: 9000
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
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
        },
    ]
}
}
