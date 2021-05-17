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
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: "url-loader",
                options: {
                    limit: 8192,
                },
            },
        ],

    },
};