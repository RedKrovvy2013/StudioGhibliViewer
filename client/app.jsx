var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

var Header = require('./views/Header')
var FilmsContainer = require('./containers/FilmsContainer')
var PeopleContainer = require('./containers/PeopleContainer')

ReactDOM.render(
    <div>
        <Header />
        {/* <FilmsContainer /> */}
        <PeopleContainer />
    </div>,
  document.getElementById('app')
)
