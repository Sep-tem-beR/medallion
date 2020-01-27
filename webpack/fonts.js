module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    include: [/webfonts/],
                    options: {
                      publicPath: './',
                      name: 'fonts/[name].[ext]',
                    }
                  },
            ]
        }
    };
};
