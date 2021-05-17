const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    mode: 'none',
    entry: './assets/js/main.js',
    output: {
        filename: 'awesome.js',
        path: path.resolve(__dirname, './assets/js/'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
};