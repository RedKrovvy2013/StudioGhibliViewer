var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, browserHistory} = require('react-router')

var Header = require('./views/Header')
var FilmsContainer = require('./containers/FilmsContainer')
var PeopleContainer = require('./containers/PeopleContainer')

//adapted from:
//https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    var intervalId = setInterval(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView()
            clearInterval(intervalId)
        }
    }, 100)
    //having to keep checking, as data, and resultant anchors,
    //are populated by ajax request
  }
}

ReactDOM.render(
    <div>
        <Router history={browserHistory} onUpdate={hashLinkScroll}>
          <Route path="/" component={Header}>
            <IndexRoute component={FilmsContainer} />
            <Route path="films" component={FilmsContainer} />
            <Route path="people" component={PeopleContainer} />
          </Route>
        </Router>
    </div>,
  document.getElementById('app')
)
