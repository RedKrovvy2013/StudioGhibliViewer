import React from 'react'
import ReactDOM from 'react-dom'
var {Route, Router, BrowserRouter, Link} = require('react-router-dom')

import getDataAndPresentViews from './network/getDataAndPresentViews'
import Person from './views/Person'
import Film from './views/Film'

import ViewsLoader from './network/ViewsLoader'

function generateLoadedViews(uri, ViewClass) {
    return ({ match }) => (
        <ViewsLoader uri={uri} ViewClass={ViewClass} match={match} />
    )
}

var LoadedPeople = generateLoadedViews("people", Person)
var LoadedFilms = generateLoadedViews("films", Film)

// var LoadedPeople = ({ match }) => (
//     <ViewsLoader uri="people" ViewClass={Person} match={match} />
// )
// var LoadedFilms = ({ match }) => (
//     <ViewsLoader uri="films" ViewClass={Film} match={match} />
// )

ReactDOM.render(
        <BrowserRouter>
            <div>
                <header>
                        <h3><Link to="/films">Films</Link></h3>
                        <h3><Link to="/people">People</Link></h3>
                </header>
                <hr />
                <Route exact path="/" component={LoadedFilms} />
                <Route path="/films" component={LoadedFilms} />
                <Route path="/films/:id" component={LoadedFilms} />
                <Route path="/people" component={LoadedPeople} />
                <Route path="/people/:id" component={LoadedPeople} />
            </div>
            {/* <div> */}
            {/* <Route path="/" component={Header}> */}
                {/* <Route exact path="/" component={Header}/> */}
                {/* <Route exact path="/" render={()=><ViewsLoader uri="films" ViewClass={Film} />} /> */}
                {/* <Route path="/films" render={()=><ViewsLoader uri="films" ViewClass={Film} />} /> */}
                {/* <Route path="/people/:id" render={()=><ViewsLoader uri="people" ViewClass={Person} />} /> */}
                {/* <Route path="/people/:id" component={LoadedPeople} /> */}
                {/* <Route path="/films" render={()=><ListLoader urls={urls} property="name"
                            ListClass={List} title="People" />} /> */}
                {/* <Route path="/films" component={FilmsContainer} /> */}
            {/* </Route> */}
            {/* </div> */}
        </BrowserRouter>,
    // (function() {
    //     var FetchedPeople = getDataAndPresentViews('people')(Person)
    //     return <FetchedPeople />
    // }()),
    // (function() {
    //     var FetchedFilms = getDataAndPresentViews('films')(Film)
    //     return <FetchedFilms />
    // }()),
    // <ViewsLoader uri="films" ViewClass={Film} />,
  document.getElementById('app')
)
