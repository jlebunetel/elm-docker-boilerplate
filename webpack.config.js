const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new WebpackManifestPlugin(),
        new HtmlWebpackPlugin({
            title: process.env.APP_SITE_NAME,
            template: 'src/index.html',
        }),
    ],
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, './docs'),
        publicPath: '/',
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [{
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            use: {
                loader: "elm-webpack-loader",
                options: {
                    verbose: true,
                }
            },
        },
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'img/[contenthash][ext][query]',
            },
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[contenthash][ext][query]',
            },
        },
        ],
    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';

        config.devServer = {
            host: '0.0.0.0',
            port: 3000,
            headers: { 'Access-Control-Allow-Origin': '*' },
        };

        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        });
    }

    if (argv.mode === 'production') {
        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
        });
    }

    return config;
};
