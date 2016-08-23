var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry : {
        'name' : './src/js/main.js'
    },
    output : {
        path : path.join(__dirname, 'dist'),
        publicPath : '/dist/',
        filename : 'bundle.js'
    },
    plugins : [

    ],
    devtool : 'source-map',
    module : {
        loaders : [
            {
                test : /\.js$/,
                loaders : [
                    'babel'
                ],
                include : path.join(__dirname, 'src')
            },
            {
                test : /\.(jpe?g|png|gif|svg)$/i,
                loaders : [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test : /\.scss$/,
                include : path.join(__dirname, 'styles'),
                loaders : [
                    'style',
                    'css',
                    'sass'
                ]
            }
        ]
    },
    resolve : {
        extensions : [
            '',
            '.js',
            '.json',
            '.sass'
        ]
    }
};