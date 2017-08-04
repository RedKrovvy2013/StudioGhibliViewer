var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

var Header = require('./views/Header')
var Film = require('./views/Film')

ReactDOM.render(
    <div>
        <Header />
        <div className="container">
            <Film />
        </div>
    </div>,
  document.getElementById('app')
)
