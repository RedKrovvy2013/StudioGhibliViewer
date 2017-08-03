var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

var main = require('./main')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={main}>

    </Route>
  </Router>,
  document.getElementById('app')
)
