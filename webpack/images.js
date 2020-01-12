module.exports = function() {
    return {
      module: {
        rules: [
          {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
                publicPath: '../',
                name: 'images/[name].[ext]',
                     },
                  },
              ],
          },
      };
  };