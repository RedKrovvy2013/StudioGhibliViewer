import React from 'react'
import ReactDOM from 'react-dom'
var {Route, Router, BrowserRouter, Link} = require('react-router-dom')

import Person from './views/Person'
import Film from './views/Film'
import Specie from './views/Specie'
import Location from './views/Location'
import Vehicle from './views/Vehicle'
import ViewsLoader from './network/ViewsLoader'

function generateLoadedViews(uri, ViewClass) {
    return ({ match }) => (
        <ViewsLoader uri={uri} ViewClass={ViewClass} match={match} />
    )
}
var LoadedPeople = generateLoadedViews("people", Person)
var LoadedFilms = generateLoadedViews("films", Film)
var LoadedSpecies = generateLoadedViews("species", Specie)
var LoadedLocations = generateLoadedViews("locations", Location)
var LoadedVehicles = generateLoadedViews("vehicles", Vehicle)

ReactDOM.render(
        <BrowserRouter>
            <div className="router-container">
                <header>
                        <h3><Link to="/films">Films</Link></h3>
                        <h3><Link to="/people">People</Link></h3>
                        <h3><Link to="/species">Species</Link></h3>
                        <h3><Link to="/locations">Locations</Link></h3>
                        <h3><Link to="/vehicles">Vehicles</Link></h3>
                </header>
                <hr />
                <Route exact path="/" component={LoadedFilms} />
                <Route path="/films/:id?" component={LoadedFilms} />
                <Route path="/people/:id?" component={LoadedPeople} />
                <Route path="/species/:id?" component={LoadedSpecies} />
                <Route path="/locations/:id?" component={LoadedLocations} />
                <Route path="/vehicles/:id?" component={LoadedVehicles} />
            </div>
        </BrowserRouter>,
  document.getElementById('app')
)
