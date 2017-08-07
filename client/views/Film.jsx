import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
import GhibliDetails from './../subViews/GhibliDetails'
import List from './../subViews/List'
import getDataAndPresentList from './../network/getDataAndPresentList'

import ListLoader from './../network/ListLoader'

var Film = function(props) {

    var details = [{key: "Director", value: props.director},
                   {key: "Producer", value: props.producer}]

    return (
        <article>
            <TitleAndSideData title={props.title} id={props.id}
                              farSideData={props.release_date}>
                <span>
                    <img src="http://localhost:8080/images/tomato.png"
                    className="icon tomato" alt="rotten tomato score"/>
                        {props.rt_score}%
                </span>
            {/* TODO: get rid of hack to make images work while nav'ing to url/:id */}
            </TitleAndSideData>
            <Description value={props.description} />
            <GhibliDetails items={details} />
                {function() {
                    var FetchedList = getDataAndPresentList(props.people, "name")(List)
                    return <FetchedList title="People" uri="people" />
                }()}
                {/* <ListLoader urls={props.people} property="name" filmTitle={props.title}
                            ListClass={List} title="People" /> */}
                {function() {
                    var FetchedList = getDataAndPresentList(props.species, "name")(List)
                    return <FetchedList title="Species" uri="species" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresentList(props.locations, "name")(List)
                    return <FetchedList title="Locations" uri="locations" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresentList(props.vehicles, "name")(List)
                    return <FetchedList title="Vehicles" uri="vehicles" />
                }()}
        </article>
    )
}

export default Film
