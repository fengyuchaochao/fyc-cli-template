//导入node api
var path = require('path');

//导入依赖
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//导入文件
const util = require('./util');
const config = require('../config/index');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        filename: util.assetsPath('js/[name].[hash:5].js'),
        publicPath: config.build.assetsPublicPath
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        properties: false,
                        warnings: false
                    },
                    output: {
                        beautify: true,
                        quote_keys: true
                    },
                    // mangle: {
                    //     screw_ie8: false
                    // },
                }
            })
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { safe: true, inline: false },
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/static/images'),
                to: path.resolve(__dirname, '../dist/static/images')
            },
            {
                from: path.resolve(__dirname, '../src/static/libs/js'),
                to: path.resolve(__dirname, '../dist/static/libs/js')
            },
            {
                from: path.resolve(__dirname, '../src/static/libs/style'),
                to: path.resolve(__dirname, '../dist/static/libs/style')
            },
            {
                from: path.resolve(__dirname, '../src/static/js'),
                to: path.resolve(__dirname, '../dist/static/js')
            }
        ]),
    ]
});


