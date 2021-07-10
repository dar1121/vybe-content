const path = require('path'); 


module.exports = {
    entry: './src/app.js',
    output: {
        path:path.join(__dirname, 'public'),
        filename:'bundle.js'
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
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },   {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

