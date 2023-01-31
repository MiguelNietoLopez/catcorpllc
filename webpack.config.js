const path = require('path');

module.exports = {
  entry: {
    home: "./src/index.js",
    contact: './src/contact.js',
    solutions: './src/solutions.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name].bndl.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}