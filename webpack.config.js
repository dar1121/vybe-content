const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = (env) => {
    const isProduction = env === 'production';

    return {
    entry: './src/app.js',
    output: {
        path:path.join(__dirname, 'public'),
        filename:'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        },  { 
            test: /\.(png|jpg)$/, 
            loader: 'url-loader' 
    },{
            test: /\.scss$/,
            use: [
                isProduction ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
              ],
        },   {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          },
        ]
    },
    plugins: [].concat(isProduction ? [] : [new MiniCssExtractPlugin()]),
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}
};