var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

var Header = require('./views/Header')
var FilmsContainer = require('./containers/FilmsContainer')

var List = require('./subViews/List')

ReactDOM.render(
    <div>
        {/* <Header />
        <FilmsContainer /> */}
        <List />
    </div>,
  document.getElementById('app')
)
