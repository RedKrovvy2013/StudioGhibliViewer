var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, '../client/public')))

// needed for getting react router browser history to work
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
})
//TODO: seems to be source of bootstrap warning

app.listen(3007, function() {})



// "use strict";
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./../webpack.config');
//
// var express = require('express');
// var proxy = require('proxy-middleware');
// var url = require('url');
// var path = require('path');
//
// // --------your proxy----------------------
// var app = express();
// // proxy the request for static assets
// app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));
//
// app.get('/*', function(req, res) {
//     res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
// });
//
//
// // -----your-webpack-dev-server------------------
// var server = new WebpackDevServer(webpack(config), {
//     // contentBase: __dirname,
//     hot: true,
//     quiet: false,
//     noInfo: false,
//     publicPath: "/assets/",
//     stats: { colors: true }
// });
//
// // run the two servers
// server.listen(8081, "localhost", function() {});
// app.listen(8080);



// var webpack = require('webpack'),
//     WebpackDevServer = require('webpack-dev-server'),
//     config = require('./../webpack.config'),
//     path = require("path");
//
// var server = new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
// });
//
// // Important part. Send down index.html for all requests
// server.use('/', function(req, res) {
//   res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
// });
//
// server.listen(3010, 'localhost', function (err, result) {
//   if (err) {
//     console.log(err);
//   }
//
//   console.log('Listening at localhost:3010');
// });
