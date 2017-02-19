const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        src: './src/index.js',
    },

    output: {
        publicPath: '/public/',
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
            },
            {
                test: /\.woff$/,
                // Inline small woff files and output them below font/.
                // Set mimetype just in case.
                loader: 'url',
                query: {
                    name: 'font/[hash].[ext]',
                    limit: 5000,
                    mimetype: 'application/font-woff'
                },
                //include: path.fonts
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.woff'],
    },
    plugins: [
        new ExtractTextPlugin('main.css', {
            allChunks: true,
        }),
    ],
};

