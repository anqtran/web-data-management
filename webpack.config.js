const path = require('path');

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
      historyApiFallback: true
  },
  module: {
    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      

      loader: 'babel',
      query: {
        presets: ["react", "es2015", 'stage-0']
      },
      
    },
    {
      test: /\.css$/,  
      include: /node_modules/,  
      loaders: ['style-loader', 'css-loader'],
      },
      {
    test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
    loader: 'file-loader?publicPath=/&name=fonts/[name].[ext]'
    },
      ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ]        
    }
  },
  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true

};
