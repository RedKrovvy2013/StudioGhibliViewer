import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
import Description from './../subViews/Description'
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
                    <img src="/images/tomato.png"
                    className="icon tomato" alt="rotten tomato score"/>
                        {props.rt_score}%
                </span>
            </TitleAndSideData>
            <Description value={props.description} />
            <section className="ghibli-details">
                <p>Director: {props.director}</p>
                <p>Producer: {props.producer}</p>
            </section>
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
