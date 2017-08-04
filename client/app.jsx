var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

var Header = require('./views/Header')
var FilmsContainer = require('./containers/FilmsContainer')

ReactDOM.render(
    <div>
        <Header />
        <FilmsContainer />
    </div>,
  document.getElementById('app')
)
