module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  devtool: 'sourcemap',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
