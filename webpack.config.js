var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './client/app.jsx'
  ],
  devServer: {
    contentBase: './client/public',
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, "client/public"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
    // externals: {
    //   jquery: 'jQuery'
    // },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    resolve: {
      modules: [__dirname, 'node_modules'],
      extensions: ['.js', '.jsx'],
      alias: {
        //--------------start:
        //       used this link to resolve many warnings when calling webpack
        //       https://github.com/facebook/react/issues/4566
        react: 'node_modules/react',
        React: 'node_modules/react'
      }
    },
       //---------------end!
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
}
