const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
              filename: '[name].css',
            }),
          ],
    }
};
