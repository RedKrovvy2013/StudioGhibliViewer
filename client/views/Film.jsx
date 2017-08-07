import React from 'react'

import TitleAndSideData from './../subViews/TitleAndSideData'
// import Description from './../subViews/Description'
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
<span><img src="images/tomato.png" className="icon tomato"/> {props.rt_score}%</span>
            </TitleAndSideData>
            <Description value={props.description} />
            {/* <GhibliDetails items={props.details} /> */}
                {function() {
                    var FetchedList = getDataAndPresentList(props.people, "name")(List)
                    return <FetchedList title="People" uri="people" />
                }()}
                {/* <ListLoader urls={props.people} property="name" filmTitle={props.title}
                            ListClass={List} title="People" /> */}
                {/* {function() {
                    var FetchedList = getDataAndPresentList(props.species, "name")(List)
                    return <FetchedList title="Species" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresentList(props.locations, "name")(List)
                    return <FetchedList title="Locations" />
                }()}
                {function() {
                    var FetchedList = getDataAndPresentList(props.vehicles, "name")(List)
                    return <FetchedList title="Vehicles" />
                }()} */}
        </article>
    )
}

export default Film
