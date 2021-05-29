const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production'
    const isDev = !isProd
    const filename = (ext) => isProd
        ? `[name].[contenthash].bundle.${ext}`
        : `[name].bundle.${ext}`
    const plugins = () => {
        const base = [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: filename('css')
            })
        ]
        if (isDev) { base.push(new ESLintPlugin()) }
        return base
    }
    return {
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: ['@babel/polyfill', './index.js', ]
        },
        resolve: {
            //'../path/file'
            extensions: ['.js'],
            //  вместо '../../../path/file'
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@core': path.resolve(__dirname, 'src', 'core')
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: filename('js'),
            clean: true, //Cleaning up the /dist folder
        },
        devtool: isDev ? 'source-map' : false,
        plugins: plugins(),
        module: {
            rules: [
                //sass
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                //babel
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env'],
                            // plugins: [ '@babel/plugin-proposal-class-properties']
                        }
                    }
                }
            ],
        },
        devServer: {
            open: true,
            // watchContentBase: true // автоперезагрузка вместе кроме html
            // contentBase: path.join(__dirname, 'dist'),
            // compress: true,
            port: process.env.port || 9000,
            hot: true, // автоперезагрузка, кроме html
        },
        target: 'web' // без этго не работает автоперезагрузка страницы
    }
}


