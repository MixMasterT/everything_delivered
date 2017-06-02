var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/frontend/everything_delivered.jsx",
  output: {
    path: path.join(__dirname, '/frontend/dist'),
    filename: "bundle.js",
    publicPath: path.join(__dirname, '/frontend/dist'),
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
};
